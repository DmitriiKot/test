var myImage = document.querySelector("img");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/2.JPG") {
      myImage.setAttribute("src", "images/1.JPG");
    } else {
      myImage.setAttribute("src", "images/2.JPG");
    }
  };
  var myButton = document.querySelector("button");
  var myHeading = document.querySelector("h1");
  function setUserName(){
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent="Знакомтесь - " +myName;
  }
  if (!localStorage.getItem("name")){
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Знакомтесь -  " +storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };