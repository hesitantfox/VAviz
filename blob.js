var sliderSize = document.getElementById("slidersizerange");
var sliderCorners = document.getElementById("slidercornersrange");
var sliderTriangle= document.getElementById("smoothTriangle");
var sliderSquare= document.getElementById("smoothSquare");
let shapeString = "polygon(49% 8%, 64% 8%,64% 8%, 77% 8%, 88% 11%, 94% 21%, 96% 33%, 96% 45%, 90% 54%, 82% 64%, 72% 72%, 63% 79%, 50% 84%, 38% 80%, 28% 74%, 20% 67%, 11% 58%, 4% 48%, 2% 36%, 4% 26%, 9% 15%, 19% 10%, 33% 8%, 33% 8%);";

//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value
let root = document.documentElement;
// Update the current slider value
sliderSize.oninput = function() {
  //output.innerHTML = this.value;
root.style.setProperty('--size', sliderSize.value + "px");
} 
//root.style.setProperty('--size', slider.value);
//let root = document.documentElement;
sliderCorners.oninput = function() {
  if(sliderCorners.value == 0){
  document.getElementById("shapeid").style.clipPath = "polygon(50% 3%, 64% 5%, 74% 9%, 82% 15%, 90% 25%, 95% 35%, 98% 48%, 96% 61%, 92% 71%, 85% 81%, 76% 89%, 65% 95%, 51% 97%, 38% 95%, 28% 92%, 18% 84%, 10% 75%, 5% 63%, 3% 51%, 5% 39%, 9% 28%, 15% 20%, 23% 11%, 36% 5%)";}
  if(sliderCorners.value == 1){
  document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";}
  if(sliderCorners.value == 2){
  document.getElementById("shapeid").style.clipPath = "polygon(48% 0%, 41% 5%, 0% 90%, 1% 99%, 99% 99%, 100% 90%, 57% 4%)";}
  if(sliderCorners.value == 3){
  document.getElementById("shapeid").style.clipPath = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";}
  if(sliderCorners.value == 4){
  document.getElementById("shapeid").style.clipPath = "polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%)";}
  if(sliderCorners.value == 5){
  document.getElementById("shapeid").style.clipPath = "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)";}
  if(sliderCorners.value == 6){
  document.getElementById("shapeid").style.clipPath = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";}
  if(sliderCorners.value == 7){
  document.getElementById("shapeid").style.clipPath = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";}
  if(sliderCorners.value == 8){
  document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)";}
}


function changeToCircle(){
  document.getElementById("rounders1").style.display = "none";
  document.getElementById("rounders2").style.display = "none";
  document.getElementById("shapeid").style.clipPath = "polygon(50% 3%, 64% 5%, 74% 9%, 82% 15%, 90% 25%, 95% 35%, 98% 48%, 96% 61%, 92% 71%, 85% 81%, 76% 89%, 65% 95%, 51% 97%, 38% 95%, 28% 92%, 18% 84%, 10% 75%, 5% 63%, 3% 51%, 5% 39%, 9% 28%, 15% 20%, 23% 11%, 36% 5%)";
}

function changeToSquare(){
  document.getElementById("shapeid").style.clipPath = "polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%)";
  document.getElementById("smoothSquare").style.visibility = "visible";
  document.getElementById("smoothSquarelable").style.visibility = "visible";
  document.getElementById("smoothTrianglelable").style.visibility = "hidden";

  document.getElementById("smoothTriangle").style.visibility = "hidden";
  document.getElementById("rounders1").style.display = "block";
  document.getElementById("rounders2").style.display = "none";
}

function changeToTriangle(){
  document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
  document.getElementById("smoothTriangle").style.visibility = "visible";
  document.getElementById("smoothTrianglelable").style.visibility = "visible";
  document.getElementById("smoothSquare").style.visibility = "hidden";
  document.getElementById("smoothSquarelable").style.visibility = "hidden";
  document.getElementById("rounders1").style.display = "none";
  document.getElementById("rounders2").style.display = "block";
}

function changeToStar(){
  document.getElementById("rounders1").style.display = "none";
  document.getElementById("rounders2").style.display = "none";
  document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 65% 30%, 98% 35%, 75% 58%, 79% 91%, 50% 76%, 21% 91%, 26% 59%, 2% 35%, 35% 30%)";
}


sliderTriangle.oninput = function() {
  if(sliderTriangle.value == 0){
    document.getElementById("shapeid").style.clipPath = "polygon(50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%, 0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%)";}
  if(sliderTriangle.value == 1){
    document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 54% 4%, 100% 93%, 100% 99%,  93% 100%,  7% 100%,  1% 99%,  1% 93%,  46% 4%)";}
  if(sliderTriangle.value == 2){
    document.getElementById("shapeid").style.clipPath = "polygon(50% 0%, 54% 1%, 58% 4%, 96% 85%, 99% 91%, 99% 98%, 93% 100%, 86% 100%,  14% 100%, 7% 100%,  1% 98%,  1% 91%, 4% 85%,  42% 4%,  46% 1%)";}
  }

  sliderSquare.oninput = function() {
    if(sliderSquare.value == 0){
      document.getElementById("shapeid").style.clipPath = "polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%)";}
    if(sliderSquare.value == 1){
      document.getElementById("shapeid").style.clipPath = "polygon(8% 0, 93% 0, 100% 8%, 100% 93%, 93% 100%, 8% 100%, 0 93%, 0 8%)";}
    if(sliderSquare.value == 2){
      document.getElementById("shapeid").style.clipPath = "polygon(0 10%, 3% 3%, 12% 0, 89% 0, 97% 2%, 100% 10%, 100% 88%, 97% 97%, 89% 100%, 11% 100%, 3% 97%, 0 89%)";}
    }
  /** 
if(sliderCorners.value > 5){
document.getElementById("shapeid").style.clipPath = 
"polygon(49% 8%, 64% 8%,64% 8%, 77% 8%, 88% 11%, 94% 21%, 96% 33%, 96% 45%, 90% 54%, 82% 64%, 72% 72%, 63% 79%, 50% 84%, 38% 80%, 28% 74%, 20% 67%, 11% 58%, 4% 48%, 2% 36%, 4% 26%, 9% 15%, 19% 10%, 33% 8%, 33% 8%)";
} else
document.getElementById("shapeid").style.clipPath = "polygon(49% 3%, 57% 4%, 63% 7%, 68% 12%, 73% 18%, 79% 26%, 88% 39%, 95% 58%, 94% 66%, 90% 70%, 79% 73%, 61% 75%, 51% 75%, 38% 75%, 19% 73%, 8% 70%, 4% 66%, 3% 58%, 10% 39%, 19% 26%, 25% 18%, 30% 12%, 35% 7%, 41% 4%)";
}
document.getElementById("shapeid").style.clipPath = 
"polygon(49% 8%, 64% 8%,64% 8%, 77% 8%, 88% 11%, 94% 21%, 96% 33%, 96% 45%, 90% 54%, 82% 64%, 72% 72%, 63% 79%, 50% 84%, 38% 80%, 28% 74%, 20% 67%, 11% 58%, 4% 48%, 2% 36%, 4% 26%, 9% 15%, 19% 10%, 33% 8%, 33% 8%);";

//shapestring = 
//document.getElementById("shapeID").style.clipPath = polygon( )
*/
document.getElementById('checkboxHovering').onclick = function(){
  var hoverbox = document.getElementById("checkboxHovering");
  if (this.checked){
    document.body.style.setProperty("--playState", "running");
    console.log("animation running"); 
  }
  else{
    document.body.style.setProperty("--playState", "paused");
    console.log("animation paused"); 
  }
}


var theInput = document.getElementById("colorPicker");
   var theColor = theInput.value;
   theInput.addEventListener("input", function() {

    document.getElementById("shapeid").style.backgroundColor = theInput.value;

    }, false);

let saveFile = () => {
    	
  // Get the data from each element on the form.
  const name = document.getElementById('txtName');
  const age = document.getElementById('txtAge');
  const email = document.getElementById('txtEmail');
  const country = document.getElementById('selCountry');
  const msg = document.getElementById('msg');
  
  // This variable stores all the data.
  let data = 
      '\r Name: ' + name.value + ' \r\n ' + 
      'Age: ' +age.value + ' \r\n ' + 
      'Email: ' + email.value + ' \r\n ' + 
      'Country: ' + country.value + ' \r\n ' + 
      'Message: ' + msg.value;
  
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}
