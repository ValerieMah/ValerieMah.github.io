
function loadPageAfterDelay(loadTime, url){

  /* Switch picture and start the png animation Java Script.*/

  document.getElementById("load-button").style.display = 'none';
  /* This line is what happens when the load button has been clicked. Its display becomes none instead of inline-block.*/

  document.getElementById("load-throbber").style.display = 'flex';

  /* This line is what happens when the load button has been clicked. The display can be seen and is no-longer hidden. Then from
  there, my animation just starts and everything continues to load and automatically redirect users to the hosono.html page.*/

  
  setTimeout(() => {
    window.location.href = url;
  }, loadTime);
  
}