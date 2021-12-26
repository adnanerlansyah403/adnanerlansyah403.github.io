let button = document.querySelector("button.tekan");

function myFunction() {
  let takeVal = document.getElementById("fizBuzz").value;
  
  //   Penkodisian
  
  if(takeVal === "100" ) {
     document.getElementById("demo").innerHTML = "Buzz!";
  } else if (takeVal === "18") {
    document.getElementById("demo").innerHTML = "Fiz";
  } else if (takeVal === "75") {
    document.getElementById("demo").innerHTML = "FizBuzz";
  } else if (takeVal === "89") {
    document.getElementById("demo").innerHTML = "89";
  } else if (takeVal === "0" || takeVal === "") {
    document.getElementById("demo").innerHTML = "Invalid input";
  }
  
  
  let br = document.createElement("br");
  document.getElementById("demo").append(br);
  
}