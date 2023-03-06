function darkMode (){
    var element = document.body('dark');
    element.className = "dark";
}

function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light";
    content.innerText = "Dark Mode is OFF";
  }
  