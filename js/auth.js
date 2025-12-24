// header-auth.js
window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = localStorage.getItem("user");
  const userIconLink = document.getElementById("user-icon-link");

  console.log(" Checking login status:", { isLoggedIn, hasUser: !!user });

  if (userIconLink) {
    if (isLoggedIn === "true" && user) {
      // User is logged in - link to account page
      userIconLink.href = "/account_info.html";
      console.log(" User logged in - link set to account page");
    } else {
      // User is not logged in - link to sign in page
      userIconLink.href = "/signInAndsignup/SignIn2.html";
      console.log(" User not logged in - link set to sign in page");
    }
  } else {
    console.error(" user-icon-link not found!");
  }
});