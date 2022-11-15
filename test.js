function setError(id, allerror) {
    ele = document.getElementById(id);
    ele.innerHTML = allerror;
}

function validate() {
    var flag = true;
    let fName = document.getElementById('fName');
    let lName = document.getElementById('lName');
    let email = document.getElementById('email');
    let number = document.getElementById('number');
    let password = document.getElementById('password');
    let cPassword = document.getElementById('cPassword');
    let radio1 = document.getElementById("rd1");
    let radio2 = document.getElementById("rd2");
    let radio3 = document.getElementById("rd3");

    //Firstname validation
    if (fName.value == "") {
        // document.getElementById('nameError').innerHTML = "Name cannot be empty!";
        setError('firstnameError', "Firstname cannot be empty!");
        flag = false;
    }
    else if (fName.value.length > 10) {
        setError('firstnameError', "Firstname should not exceed 10 character");
        flag = false;
    }
    else {
        setError('firstnameError', "");
        flag = true;
    }

    //Lastname validation
    if (lName.value == "") {
        // document.getElementById('nameError').innerHTML = "Name cannot be empty!";
        setError('lastnameError', "Lastname cannot be empty!");
        flag = false;
    }
    else if (lName.value.length > 10) {
        setError('lastnameError', "Lastname should not exceed 10 character");
        flag = false;
    }
    else {
        setError('lastnameError', "");
        flag = true;
    }

    //Email validation
    if (email.value == "") {
        // document.getElementById('nameError').innerHTML = "Name cannot be empty!";
        setError('emailError', "Email cannot be empty!");
        flag = false;
    }
    else if (email.value.search('.com') == -1) {
        setError('emailError', "Must contain @ and (.com)");
        flag = false;
    }
    else {
        setError('emailError', "");
        flag = true;
    }

    //Phonenumber validation
    if (number.value == "") {
        // document.getElementById('nameError').innerHTML = "Name cannot be empty!";
        setError('numberError', "Phone number cannot be empty!");
        flag = false;
    }
    else if (number.value.length != 10) {
        setError('numberError', "Invalid input");
        flag = false;
    }
    else {
        setError('numberError', "");
        flag = true;
    }

    //Password validation
    if (password.value == "") {
        setError('passwordError', "Password cannot be empty!");
        flag = false;
    }
    else if (password.value.length < 8) {
        setError('passwordError', "Minimum 8 character is required");
        flag = false;
    }
    else {
        setError('passwordError', "");
        flag = true;
    }

    //Confirm Password validation
    if (cPassword.value == "") {
        setError('cPassError', "Coudn't match please enter agian!");
        flag = false;
    }
    else if (cPassword.value != password.value) {
        setError('cPassError', "Coudn't match please enter agian!");
        flag = false;
    }
    else {
        setError('cPassError', "");
        flag = true;
    }

    //radio button validation
    if (radio1.checked == true || radio2.checked == true || radio3.checked == true) {
        setError('genderError', "");
        flag = true;
    }
    else {
        setError('genderError', "Plese select gender!");
        flag = false;
    }

    if(flag){
        alert('Registared successfully!');
    }
    return flag;
}

