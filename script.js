//select all elements with the same class
const elements = document.querySelectorAll('.centering');
//loop through each element
elements.forEach(element => {
  // Check if the inner text includes the word "here"
  if (element.innerText.toLowerCase().includes("here")) {
     // If it includes "here", set blue background and white text
    element.style.backgroundColor = "blue"
    element.style.color = "white"
    //Otherwise, set black background and white text
  } else {
    element.style.backgroundColor ="black"
    element.style.color = "white"
  }
})