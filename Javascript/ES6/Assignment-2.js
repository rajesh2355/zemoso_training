
/**Question 2 : 
    Rewrite the following code using template literals
        const printBill = (name, bill) => {
            return âHi â + name + â, please pay: â + bill;
        }
 */


        const printBill = (name, bill) => {
            return `Hi ${name} please pay: ${bill}`;
        }
    
        console.log(printBill('Rajesh',1000)) //Hi Rajesh please pay: 1000