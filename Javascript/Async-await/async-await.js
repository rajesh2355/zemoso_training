/**
 * Question
 * 
 * 
     Assume we are fetching the data from a rest endpoint in the get data function.
    we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
    function getData(uId) {
        setTimeout(() => {
        console.log("Fetched the data!");
        return "skc@gmail.com";
        }, 4000);
    }

    console.log("start");
    var email = getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");

    How do you solve this problem. How can we wait for till the function execution is completed, 
    so that we can have correct email at line 10?

 */


async function getData(uId) {
    const response = await fetch(`${uId}`);
    let data = await response.json();
    console.log("Your IP is : " + data.client_ip);
    console.log(`Fetched the data! \nToday's Date : ${data.datetime.substring(0, 10)}`);
    return data.client_ip;
}

console.log("Start");
let ip_addr = getData("http://worldtimeapi.org/api/timezone/Asia/Kolkata").then(ip_addr => {
    console.log("Your IP Address is  : " + ip_addr);
    console.log("end");
});

/**
 * Output : 
    Start
    Your IP is : My Ip
    Fetched the data! 
    Today's Date : 2023-02-20
    Your IP Address is  : My Ip
    end

 */