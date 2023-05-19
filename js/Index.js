var emailOrPhone=sessionStorage.getItem("E&M");
var pass=sessionStorage.getItem("pass");
var  inputTags=document.getElementsByClassName("inputTag");
 
function loginFun(){
    var userGivenId=inputTags[0].value 
    var userGivenPass=inputTags[1].value
    var formTag=document.forms
    if(userGivenId==emailOrPhone && userGivenPass==pass)
    {
        document.getElementById("loginButton").type="submit"
        formTag[0].action="./html/travelblog.html"
    }
    else
    if(userGivenId!=emailOrPhone && userGivenPass==pass)
    {
        document.getElementById("status").innerHTML="Wrong Password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.getElementById("passDiv").style.borderColor="linear-gradient(75deg,#D4145A,red)"

    }
    else{
        document.getElementById("status").innerHTML="Wrong UserId and Password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"

    }

}
function visiblepassword(){
    inputTags[1].type="text"
    document.getElementById("visibleLogo").src="../asset/image/monkeyopeneye.jpg"
    document.getElementById("visibleLogo").style.transform="rotateY(180deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"
}
function invisiblepassword(){
    inputTags[1].type="password"
    document.getElementById("visibleLogo").src="../asset/image/monkeycloseeye.jpg"
    document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"
}