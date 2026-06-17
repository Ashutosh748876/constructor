function register(){

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        budget: document.getElementById("budget").value
    };


    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userBudget", user.budget);

    alert("Account Created Successfully");

    window.location.href="login.html";
}



function login(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;


    let user =
    JSON.parse(localStorage.getItem("user"));


    if(user &&
       user.email === email &&
       user.password === password)
    {

        localStorage.setItem("login","true");

        window.location.href="index.html";

    }
    else{

        alert("Invalid Email or Password");

    }

}