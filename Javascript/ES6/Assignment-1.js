/** Question 1
    Refactor the following function into a one-liner:
        const printName = (name) => {
                return “Hi” + name;
        }

*/

const printName = name => `Hi ${name}`; 
console.log(printName('Rajesh')); //Hi Rajesh
