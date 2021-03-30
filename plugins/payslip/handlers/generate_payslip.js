'use strict';

const client = require("jsreport-client")("http://myserver:5488")



const Boom = require('@hapi/boom');
const salary_structure = require('../../pay_structure/schemas/salary_structure');
const employee = require('../../employee/schemas/employee');

module.exports = async (request, h) => {
    try{
        const {employeeId, month_or_year, lop} = request.query;
        let days;
        if(month_or_year === 'month'){
            days = 22;
        }else if(month_or_year === 'year'){
            days = 22*12;
        }
        const employeeDetails = await employee.findOne({_id: employeeId, visibility: true});
        const payDetails = await salary_structure.find({ slab: employeeDetails.slab});
        let pay_data = [];
        let deduction_data = [];
        let pay_count = 0;
        let deduction_count = 0;
        for ( const item in payDetails){
            if(payDetails[item].percentage_or_amount === 'percentage' && payDetails[item].type === 'pay'){
                pay_data[pay_count] = {
                    name: payDetails[item].name,
                    value : (employeeDetails.ctc*payDetails[item].value*days)/(12*(22-lop)*100),
                };
                pay_count++;
            } else if(payDetails[item].percentage_or_amount === 'amount' && payDetails[item].type === 'pay'){
                pay_data[pay_count] ={
                    name: payDetails[item].name,
                    value: payDetails[item].value,
                } ;
                pay_count++;
            } else if(payDetails[item].percentage_or_amount === 'percentage' && payDetails[item].type === 'deduction'){
                deduction_data[deduction_count] ={
                    name : payDetails[item].name,
                    value : (employeeDetails.ctc*payDetails[item].value*days)/(12*(22-lop)*100),
                }
                deduction_count++;
            } else if(payDetails[item].percentage_or_amount === 'amount' && payDetails[item].type === 'deduction'){
                deduction_data[deduction_count] ={
                    name : payDetails[item].name,
                    value : payDetails[item].value,
                };
                deduction_count++;
            }
        }

        const gross_pay = pay_data.reduce((x,y)=> x + y.value,0);
        const total_deductions = deduction_data.reduce((x,y)=> x + y.value,0);
        const net_pay = gross_pay - total_deductions;
        const paySlip = {
            pay_data,
            deduction_data,
            gross_pay,
            total_deductions,
            net_pay
        }

        
        
    


        // const res = await client.render({
        //     template: {
        //       content: 'Payslip',
        //       recipe: 'html',
        //       engine: 'handlebars'
        //     },
        //     data: { 
        //         employeeDetails
        //      }
        //   })
        
        //   const bodyBuffer = await res.body()
        //   console.log(bodyBuffer.toString())
        return{
            statusCode: 200,
            message: 'Employee payslip generated',
            data: paySlip,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

