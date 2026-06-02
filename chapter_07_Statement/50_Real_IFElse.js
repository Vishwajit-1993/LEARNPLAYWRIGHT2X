//Role=Admin,Viewer,Editor

let isLoggedIn = false;
let userRole = "Admin";

if (isLoggedIn) {
  if (userRole === "Admin") {
    console.log("You are an admin");
  } else if (userRole === "Viewer") {
    console.log("You are a viewer");
  } else if (userRole === "Editor") {
    console.log("You are an editor");
  } else {
    console.log("You are a guest");
  }
} else {
  console.log("You are not logged in");
}
