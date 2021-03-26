'use strict';

const client = require("jsreport-client")("http://myserver:5488")



const Boom = require('@hapi/boom');
const salary_structure = require('../../pay_structure/schemas/salary_structure');
const employee = require('../../employee/schemas/employee');

module.exports = async (request, h) => {
    try{
        const {employeeId} = request.params;

        const employeeDetails = await employee.findOne({_id: employeeId, visibility: true});
        let slab;
        if(employeeDetails.ctc < 250000){
            slab = 'slab1';
        } else if(employeeDetails.ctc < 500000){
            slab = 'slab2';
        } else if (employeeDetails.ctc < 1000000){
            slab = 'slab3';
        } else {
            slab = 'slab4';
        }
        const pay_percent_Details = await salary_structure.find({ slab: slab, type: 'pay', percentage_or_amount: 'percentage'});
        console.log(pay_percent_Details);
        let pay_data = pay_percent_Details.map(x => {
            return {
                name: x.name,
                value: (employeeDetails.ctc*x.value)/(12*22*100),
            }
        })
        console.log(pay_data);

        const deduction_percent_Details = await salary_structure.find({ slab: slab, type: 'deduction', percentage_or_amount: 'percentage'});
        let deduction_data = deduction_percent_Details.map(x => {
            return {
                name: x.name,
                value: (employeeDetails.ctc*x.value)/(12*22*100),
            }
        })
        console.log(deduction_data);
        const pay_amount_Details = await salary_structure.find({ slab: slab, type: 'pay', percentage_or_amount: 'amount'});
        let pay_amount = pay_amount_Details.map(x => {
            return {
                name: x.name,
                value: x.value,
            }
        })
        console.log('pay_amount',pay_amount);
        pay_data = Object.assign(pay_data,pay_amount)
        console.log('pay_data',pay_data);
        const deduction_amount_Details = await salary_structure.find({ slab: slab, type: 'deduction', percentage_or_amount: 'amount'});
        let deduction_amount = deduction_amount_Details.map(x => {
            return {
                name: x.name,
                value: x.value,
            }
        })
        console.log('test',typeof(deduction_amount));
        deduction_data = Object.assign(deduction_data,deduction_amount)

        const gross_pay = pay_data.reduce((x,y) => x.value + y.value);
        const total_deductions = deduction_data.reduce((x,y) => x.value + y.value);
        const net_pay = gross_pay - total_deductions;
        console.log('grosspay',gross_pay);
        console.log('totaldeductions',total_deductions);
        console.log('netpay',net_pay);

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
            statusCode: 201,
            message: 'Employee is created',
            data: basic_pay,
            dearness_allowance,
            hra,
            conveyance,
            other_pay_details,
            TDS,
            provident_fund,
            other_deduction_details,
            gross_pay,
            total_deductions,
            net_pay

        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

