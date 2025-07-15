let adminusername = "admin";
let adminpassword = "admin123";

let userUsername = "user";
let userpassword = "user123";

let username = prompt("Enter username : ");
let password = prompt("Enter password : ");

if((username === adminusername && password === adminpassword) || (username === userUsername && password === userpassword)){
    console.log("Login successfully....");

    setTimeout(() =>{
        if (username === adminusername) {
        console.log("Welcome Admin.");
        }else{
            console.log("Welcome User.");
        }
    }, 2000);

}else{
    console.log("Invalid username or password!");
}