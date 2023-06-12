function validate() {
  var Email = document.getElementById("email");
  var Message = document.getElementById("message");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email.value.match(validRegex) && Message.value!="") {
    Message.classList.add("success");
    Email.classList.add("success");
        alert("Message sent successfully");
        window.location.reload();
        return true;
    
  }
   if( Message.value==""){
    Message.classList.add("error");
  }
  if(!Email.value.match(validRegex)){
    
    Email.classList.add("error");
    return false;
  }
}
