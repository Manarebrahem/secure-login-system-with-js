var signupname = document.getElementById("signupname");
var signupemail = document.getElementById("signupemail");
var signuppass = document.getElementById("signuppass");
var logemail = document.getElementById("logemail");
var logpass = document.getElementById("logpass");

if (localStorage.getItem('users') == null) {
    var signuparr = [];
}
else {
    var signuparr = JSON.parse(localStorage.getItem('users'))
}
console.log(signuparr)
function signup() {
    var uparray = {
        name: signupname.value,
        email: signupemail.value,
        password: signuppass.value,
    }

    if (signupname.value == "" || signupemail.value == "" || signuppass.value == "") {
        document.getElementById("word").innerHTML = '<span class="p-2 text-danger">All Inputs is Required</span>';
    }

    else if (check() == true) {
        document.getElementById('word').innerHTML = 'email is existed'

    }
    else {
        signuparr.push(uparray);
        localStorage.setItem('users', JSON.stringify(signuparr))
        document.getElementById('word').innerHTML = 'success';

    }
}
function login() {
    var password = logpass.value
    var email = logemail.value
    if (password == "" || email == "") {
        document.getElementById('word').innerHTML = "All Inputs is Required"
    } else {
        for (var i = 0; i < signuparr.length; i++) {
            if (signuparr[i].email.toLowerCase() == email.toLowerCase() && signuparr[i].password.toLowerCase() == password.toLowerCase()) {
                localStorage.setItem('Usersname', signuparr[i].name)

                document.getElementById('logs').href = 'log.html';

            }
            else {
                document.getElementById('word').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
        }
    }
}
var username = localStorage.getItem('Usersname')
document.getElementById('uname').innerHTML = `Welcome ${username}`;


function check() {
    if (signuparr != null) {
        for (var i = 0; i < signuparr.length; i++) {
            if (signuparr[i].email == signupemail.value) {
                console.log('true')
                return true;

            }
            else {
                console.log('false')
                return false;
            }
        }
    }
}
