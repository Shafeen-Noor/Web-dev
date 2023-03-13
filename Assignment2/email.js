function validate(){
    var Email = document.getElementById("Email");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email.value.match(validRegex)) {

    window.location.href = "./home.html";
    return true;

  } else {
    alert("Invalid email address!");
    return false;

  }

}