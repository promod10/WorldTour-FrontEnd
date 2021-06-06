/* LOGIN and SIGN UP animation and link section START */
/* --------------------- START ---------------------- */
var linkloginform = document.querySelector('#login_form');
var linksignupform = document.querySelector('#signup_form');
var loginlabel = document.querySelector('#login-label');
var signuplabel = document.querySelector('#signup-label');
var loginlink = document.querySelector('.loginlink');
var signuplink = document.querySelector('.signuplink');

signuplabel.addEventListener('click', function () {
    signupactive();
});
loginlabel.addEventListener('click', function () {
    loginactive();
});
loginlink.addEventListener('click', function () {
    loginactive();
});
signuplink.addEventListener('click', function () {
    signupactive();
});

function loginactive() {
    linkloginform.style.display = "block";
    linksignupform.style.display = "none";
    loginlabel.classList.add('active');
    signuplabel.classList.remove('active');
}
function signupactive() {
    linksignupform.style.display = "block";
    linkloginform.style.display = "none";
    signuplabel.classList.add('active');
    loginlabel.classList.remove('active');
}
/* LOGIN and SIGN UP animation and link section */
/* ---------------- END ----------------------- */

/* Signup and Login DATA STORE and ACCESS with LOGIN SYSTEM */
/* --------------------- START ---------------------------- */
let dataloginform = document.getElementById("login_form");
let datasignupform = document.getElementById("signup_form");

/* Signup field initialization */
var rgt_firstname = document.getElementById("register-fname");
var rgt_lastname = document.getElementById("register-lname");
var rgt_email = document.getElementById("register-email");
var rgt_pass = document.getElementById("register-pass");
var rgt_cpass = document.getElementById("register-cpass");
var rgt_phn = document.getElementById("register-phone");

/* Signin field initialization */
var lgnusername = document.getElementById("login-user");
var lgnpass = document.getElementById("login-pass");

if (localStorage.signupformdata === undefined) {
    localStorage.setItem('signupformdata', JSON.stringify([]));
}
let signup_formdata = JSON.parse(localStorage.getItem('signupformdata'));
function check() {
    let toCheck;
    if (rgt_firstname.value == "" || rgt_lastname.value == "" || rgt_email.value == "" || rgt_pass.value == "" || rgt_cpass.value == "" || rgt_phn.value == "") {
        console.log("Field is empty");
        toCheck = false;
    } else {
        toCheck = true;
    }
    return toCheck;
}
datasignupform.addEventListener('submit', e => {
    e.preventDefault();
    if (check()) {
        let sgndata = {
            'rgt_firstname': rgt_firstname.value,
            'rgt_lastname': rgt_lastname.value,
            'rgt_email': rgt_email.value,
            'rgt_pass': rgt_pass.value,
            'rgt_cpass': rgt_cpass.value,
            'rgt_phn': rgt_phn.value
        };
        signup_formdata.push(sgndata);
        localStorage.setItem('signupformdata', JSON.stringify(signup_formdata));
        e.target.reset();
    } else {
        alert("Please fill all fields!");
    }
})

dataloginform.addEventListener('submit', lgn => {
    lgn.preventDefault();
    lgnusername.value;
    lgnpass.value;
    // if (lgnusername == "signup_formdata.rgt_email" && lgnpass == "signup_formdata.rgt_pass") {
    if (lgnusername == "a@gmail.com" && lgnpass == "pass") {
        alert("Login successfully");
        window.location = "index.html";
    } else {
        alert('Username and Password are not matched! or Fields are empty!');
    }

})


// function datastore() {
//     localStorage.setItem('register-fname', rgt_firstname.value);
//     localStorage.setItem('register-lname', rgt_lasttname.value);
//     localStorage.setItem('register-email', rgt_email.value);
//     localStorage.setItem('register-pass', rgt_pass.value);
//     localStorage.setItem('register-cpass', rgt_cpass.value);
//     localStorage.setItem('register-phone', rgt_phn.value);
// }
// datasignupform.addEventListener('submit', e => {
    // if (rgt_firstname.value == "" || rgt_lasttname.value === "" || rgt_email.value == " " || rgt_pass.value == "" || rgt_cpass.value == "" || rgt_phn.value == "") {
    //     console.log("Field is empty");
    //     alert("Field is empty");
    // } else {
    // datastore();
    // console.log("Register Successfully!");
    // alert("Register Successfully!");
    // }

// })
// function check() { /* stored data from signup form */
//     var strfirstname = localStorage.getItem('rgt_firstname');
//     var strlastname = localStorage.getItem('rgt_lastname');
//     var stremail = localStorage.getItem('rgt_email');
//     var strpass = localStorage.getItem('rgt_pass');
//     var strcpass = localStorage.getItem('rgt_cpass');
//     var strphn = localStorage.getItem('rgt_phn');

//     /* Equalize entered data from login form with sign form data i.e email and password */
//     if ((lgnusername.value == stremail) && (lgnpass.value == strpass && strcpass)) {
//         alert('You are loged in Successfully !');
//     } else {
//         alert('Username and Password are not matched! or Fields are empty!');
//     }
// }
/* Signup and Login DATA STORE and ACCESS with LOGIN SYSTEM */
/* --------------------- END ---------------------------- */
