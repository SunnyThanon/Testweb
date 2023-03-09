function register() {
    document.getElementById("LoginForm").style.transform = "translatex(0px)";
    document.getElementById("RegForm").style.transform = "translatex(0px)";
    document.getElementById("Indicator").style.transform = "translatex(100px)";
}
function login() {
    document.getElementById("RegForm").style.transform = "translatex(300px)";
    document.getElementById("LoginForm").style.transform = "translatex(300px)";
    document.getElementById("Indicator").style.transform = "translatex(0px)";
    document.getElementById("loader")

    
}