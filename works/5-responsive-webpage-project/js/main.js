
function validate(){
    var myname=$("#name").val();
    var myemail=$("#email").val();
    var mymob=$("#phone").val();
    var mymsg=$("#message").val();

    if((myname=="") || (myname.length < 3)){
        alert("first name should be atleast 3 characters")
    }
    if(mymob==""){
        alert("mobile no should not be empty")
    }
    if(myemail==""){
        alert("email should not be empty")
    }
    if(mymsg==""){
        alert("message should not be empty")
    }
}
$("button").click(validate);
