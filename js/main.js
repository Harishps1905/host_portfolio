function validate()
{
    var myemail = document.getElementById('email-1');
    
    if (myemail.value=="")
    {
        alert("no blank values allowed");
        return false;
    }else{
        true;
    }
}