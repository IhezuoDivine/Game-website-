   document.addEventListener("DOMContentLoaded", function () {

    const signinform = document.getElementById("signinform");
    const emailsignin = document.getElementById("emailsignin");
    const passwordsignin = document.getElementById("passwordsignin");
    const errormessage = document.getElementById("errormessage");
    const signinbtn = document.getElementById("signinbtn");


    const signupform = document.getElementById("signupform");
    const emailsignup = document.getElementById("emailsignup");
    const passwordsignup = document.getElementById("passwordsignup");
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const signupbtn = document.getElementById("signupbtn");
    const errormessageup = document.getElementById("errormessage1");

    function showError(element, message) {
        element.textContent = message;
        element.style.color = "red";

        setTimeout(() => {
            element.textContent = "";
        }, 2000);
    }

    function isValidEmail(email) {
        return email.includes("@") && (email.endsWith(".com") || email.endsWith(".net"));
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }

    signinbtn.addEventListener("click", function (event) {
        event.preventDefault(); 

        const email = emailsignin.value.trim();
        const password = passwordsignin.value.trim();

        if (!email || !password) {
            showError(errormessage, "Please fill all fields!");
        } 
        else if (!isValidEmail(email)) {
            showError(errormessage, "Enter a valid email!");
        } 
        else if (!isValidPassword(password)) {
            showError(errormessage, "Password must be at least 8 characters long!");
        } 
        else {
            errormessage.textContent = "Login Successful";
            errormessage.style.color = "green";
            window.location.href = "Game.html";
        }   
    });

    signupbtn.addEventListener("click", function (event){
        event.preventDefault();

        const email = emailsignup.value.trim();
        const password = passwordsignup.value.trim();
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();

        if (!email || !password || !firstname || !lastname){
            showError (errormessageup,"please fill all field!");
        }
        else if (!isValidEmail(email)){
            showError(errormessageup, "Enter a valid email!");
        }
        else if (!isValidPassword(password)){
            showError(errormessageup, "Enter a valid password!");
        }
        else {
            errormessageup.textContent = "signup successful";
            errormessageup.style.color = "green";
            window.location.href = "Game.html";
        }
    });

  });

    document.getElementById("searchBox").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll("#searchResults li");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.classList.toggle("hide", !text.includes(filter));
   });
  });
