// javascript for log in 😊😊
function signin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "") {
    alert("Please Enter Your Email");
  } else if (password == "") {
    alert("Please Enter Your Password");
  } else {
    alert("You are logged in");
  }
}

// javascript for signup 😊😊

function signup() {
  // Prevent the default form submission behavior

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (firstname == "") {
    alert("Please enter your full name.");
  } else if (lastname == "") {
    alert("Please enter your last name.");
  } else if (email == "") {
    alert("Please enter your email.");
  } else if (password == "") {
    alert("Please enter your password.");
  } else {
    alert("You are registered!");
  }
}

// for Dashboard javascript code:👍👍👍
// Note: this is console base javascript code for dashboard mean it only display appropriate message for clicking menus .
//Get all the menu items by their class name
const menuItems = document.getElementsByClassName("nav-link");

// Add event listeners to each menu item
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function (event) {
    // Prevent the default navigation behavior
    event.preventDefault();

    // Get the clicked menu item's text
    const menuItemText = this.textContent;

    // Call a function based on the clicked menu item
    handleMenuItemClick(menuItemText);
  });
}

// Function to handle the menu item click
function handleMenuItemClick(menuItemText) {
  // Perform actions based on the clicked menu item
  switch (menuItemText) {
    case "menus":
      // Handle Home menu item click
      console.log("menus clicked");
      break;
    case "PROFILE":
      // Handle Profile menu item click
      console.log("Profile clicked");
      break;
    case "UI COMPONENTS":
      // Handle UI Components menu item click
      console.log("UI Components clicked");
      break;
    case "WIDGETS":
      // Handle Widgets menu item click
      console.log("Widgets clicked");
      break;
    case "SETTINGS":
      // Handle Settings menu item click
      console.log("Settings clicked");
      break;
    case "LOGOUT":
      // Handle Logout menu item click
      console.log("Logout clicked");
      break;
    default:
      console.log("Unknown menu item clicked");
      break;
  }
}
