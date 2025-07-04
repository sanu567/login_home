const user =[{email:"sanu@gmail.com",password:"12345"},{email:"ketan@gmail.com",password:"98745"}];

function login (){
    const enteremail = document.getElementById("email").value;
    const enterpassword = document.getElementById("password").value;
    const errormsg = document.getElementById("errormesg");

    const userfind = user.find(user => user.email === enteremail && user.password === enterpassword);

    if(userfind){
        window.location.href="/home.html";
    }
    else{
        errormsg.textContent = "incorrect email or password";
    }
}