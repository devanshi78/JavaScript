let adminusername = "admin";
let adminpassword = "admin123";

let userUsername = "user";
let userpassword = "user123";

let username = "user";
let password = "user123";

if((username === adminusername && password === adminpassword) || (username === userUsername && password === userpassword)){
    console.log("Login successfully....");

    // Delay using a loop
    for (let i = 1; i <= 100000000; i++) {
        // just waiting
    }

    if (username === adminusername) {
    console.log("Welcome Admin.");
    }else{
        console.log("Welcome User.");
    }

}else{
    console.log("Invalid username or password!");
}