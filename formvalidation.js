function validate() {

    if (firstNameValidation() &&
        emailValidation() &&
        confirmEmailValidation() &&
        genderValidation() &&
        contactValidation()) {
        return true;
    }
    else {
        return false;
    }
}

function firstNameValidation() {
    if (document.kip.fname.value == "") {
        document.getElementById("firstName").innerHTML = "First Name  must not be Empty";
        document.getElementById("firstName").style.color = "red"
        document.kip.fname.focus();
        return false;
    }
    else {
        document.getElementById("firstName").innerHTML = "";
        return true;
    }
}


function emailValidation() {
    var email = document.kip.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        document.getElementById("emailid").innerHTML = "Please enter email in a valid format";
        document.getElementById("emailid").style.color = "red";
        document.kip.email.focus();
        return false;
    }
    else {
        document.getElementById("emailid").innerHTML = "";
        return true;
    }
}

function confirmEmailValidation() {
    if (document.kip.confirmemail.value != document.kip.email.value) {
        document.getElementById("conemail").innerHTML = "Fields are not matched!";
        document.getElementById("conemail").style.color = "red";
        document.kip.confirmemail.focus();
        return false;
    }
    else {
        document.getElementById("conemail").innerHTML = "";
        return true;
    }
}

function genderValidation() {
    if ((kip.gen[0].checked == false) && (kip.gen[1].checked == false)) {

        document.getElementById("gender").innerHTML = "please select one Gender";
        document.getElementById("gender").style.color = "red";
        return false;
    }
    else {
        document.getElementById("gender").innerHTML = "";
        return true;
    }
}

function contactValidation() {
    if (isNaN(document.kip.contact.value) || document.kip.contact.value.length != 10) {
        document.getElementById("phonenumber").innerHTML = "Enter your valid 10 digit mobile number";
        document.getElementById("phonenumber").style.color = "red";
        return false;
    }
    else {
        document.getElementById("phonenumber").innerHTML = "";
        return true;
    }
}


function getAjaxData() {
    $.ajax({
        url: 'https://reqres.in/api/users/10',
        dataType: 'json',
        async: false,
        type: "GET",
        success: function (data) {
            var row = $('<tr><td>' + data.data.id + '</td><td>' + data.data.first_name + '</td><td>' + data.data.last_name + '</td><td>' + data.data.avatar + '</td></tr>');
            $('#myTable').append(row);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

getAjaxData();

