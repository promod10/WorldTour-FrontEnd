let feedbackform = document.getElementById("feedbackform");

var fdk_email = document.getElementById("email_fdk");
var fdk_msg = document.getElementById("message_fdk");

if (localStorage.signupformdata === undefined) {
    localStorage.setItem('feedbackformdata', JSON.stringify([]));
}
let feedback_formdata = JSON.parse(localStorage.getItem('feedbackformdata'));
function check() {
    let toCheck;
    if (fdk_email.value == "" || fdk_msg.value == "") {
        console.log("Field is empty");
        toCheck = false;
    } else {
        toCheck = true;
    }
    return toCheck;
}
feedbackform.addEventListener('submit', e => {
    e.preventDefault();
    if (check()) {
        let fdkdata = {
            'fdk_email': fdk_email.value,
            'fdk_msg': fdk_msg.value,
        };
        feedback_formdata.push(fdkdata);
        localStorage.setItem('feedbackformdata', JSON.stringify(feedback_formdata));
        e.target.reset();
    } else {
        alert("Please fill all fields!");
    }
})
