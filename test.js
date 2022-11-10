function setError(id, error){
    ele = document.getElementById(id).value;
    ele.getElementsByClassName('error')[0].innerHTML = error;
}

function validate(){
    // var fname = document.forms['myForm']['fname'].value;
    var returnal = true;
    var fname = document.getElementById("name").value;
    // console.log(fname);
    if(fname.length < 5){
        setError("fname", "*The name is too short");
        returnal = false;
    }
    return returnal;
}
