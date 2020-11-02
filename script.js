var myIndex = 0;
// TEXT SLIDE #######
var text =  document.getElementById("prikaziProzor");
var bigger = false;

function textProzor() {
  setTimeout(textProzor(), 3000);
  text.style.display = "block";
}


// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } 
  else { 
    x.className = x.className.replace(" w3-show", "");
  }
} 

var i = 0;
function move() {
  if (i == 0) {
      i = 1;
     var elem = document.getElementById("myBar");
     var width = 10;
     var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
          clearInterval(id);
          i = 0;
      } 
      else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Get the Sidebar
var mySidebar = document.getElementById("navDemo");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");


// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";    

  } 
  else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}