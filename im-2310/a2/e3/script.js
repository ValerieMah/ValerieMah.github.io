let isDark = false;
let darkCol = "#171219";
let lightCol = "#f2fbeb";

/* Light mode and Dark mode Java sript.*/

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    isDark = true;
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.getElementById("mode-button").innerHTML = "Light Mode";
  }
  
  /* This function contains an IF statement that switches between light and dark mode with a click of a button- based on the current setting.*/
  function switchModes(){
    if (isDark){
        isDark = false;
        document.documentElement.style.setProperty("--col-01", darkCol);
        document.documentElement.style.setProperty("--col-02", lightCol);
        document.getElementById("mode-button").innerHTML = "Dark Mode";
      } else {
        isDark = true;
        document.documentElement.style.setProperty("--col-01", lightCol);
        document.documentElement.style.setProperty("--col-02", darkCol);
        document.getElementById("mode-button").innerHTML = "Light Mode";
      }
    }  

