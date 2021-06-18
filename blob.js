* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#47484e;
}


p{
    color:white;
}


label {

    color:white;
}


.rounders1 {
  display:none;
}

.rounders2 {
  display:none;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

:root {
  --size: 400px;
}

body {
    --playState: "paused";
}



.container {
    width:  800px;
    height: 800px;
    margin: 200px auto;
    
}
/*
.box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 500px;
    left:  500px;
}
.side {
    position: absolute; 
    width: 200px;
    height: 200px;
    
    background-color: none;
}
.side--front {
   
    transform: rotateY(0) translateZ(100px);
    background-color: none;
}
.side--left {
    transform: rotateY(-90deg) translateZ(100px);
    background-color: #128ec9;
}
.side--top {
    transform: rotateX(90deg) translateZ(100px);
    background-color: #0b5d85;
}

button {
    left: -200px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    width: 100%;
    font-family: Impact, sans-serif;
    font-size: 40px;
    transition: .5s;
    transform-origin: left;
    text-align: left;
    padding-left: 20px;
}
button:hover {
    padding-left: 100px;
}
*/




.button {
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  .button1 {
    background-color: white;
    color: black;
    border: 2px solid #81c1d8;
  }
  
  .button1:hover {
    background-color: #81c1d8;
    color: white;
  }
  
  .button2 {
    background-color: white;
    color: black;
    border: 2px solid #008CBA;
  }
  
  .button2:hover {
    background-color: #008CBA;
    color: white;
  }
  

/*
.question
{
    visibility: hidden;
    color: white;
    font-size: 100px;
    position: absolute;
    left: -450px;
    top: -40px;
    background-color:transparent;
}
*/

.controls{
  position: absolute;
  left: 1200px;
  top: 150px;
  width: 300px;
}

.shapecontainer {
    width: 600px;
    height: 600px;
    position: absolute;
    top:-300px;
    right: 800px;
}



.shape {
    width: var(--size);
    height: var(--size);
    position: absolute;
    /*to keep in centered position during size change*/
    right: calc(var(--size)*-0.5);
    bottom:  calc(var(--size)*-0.5);
    background-color: #6dd3de;
    z-index: 10;
    transition: 0.7s;
    animation: float 3s infinite; 
    animation-play-state: var(--playState);
    clip-path: polygon(50% 3%, 64% 5%, 74% 9%, 82% 15%, 90% 25%, 95% 35%, 98% 48%, 96% 61%, 92% 71%, 85% 81%, 76% 89%, 65% 95%, 51% 97%, 38% 95%, 28% 92%, 18% 84%, 10% 75%, 5% 63%, 3% 51%, 5% 39%, 9% 28%, 15% 20%, 23% 11%, 36% 5%);
}
button:nth-child(1):hover ~ .shape {
    clip-path: polygon(49% 3%, 57% 4%, 63% 7%, 68% 12%, 73% 18%, 79% 26%, 88% 39%, 95% 58%, 94% 66%, 90% 70%, 79% 73%, 61% 75%, 51% 75%, 38% 75%, 19% 73%, 8% 70%, 4% 66%, 3% 58%, 10% 39%, 19% 26%, 25% 18%, 30% 12%, 35% 7%, 41% 4%);
    background-color: #2c405e;
}

button:nth-child(2):hover ~ .shape {
    clip-path: polygon(49% 8%, 64% 8%,64% 8%, 77% 8%, 88% 11%, 94% 21%, 96% 33%, 96% 45%, 90% 54%, 82% 64%, 72% 72%, 63% 79%, 50% 84%, 38% 80%, 28% 74%, 20% 67%, 11% 58%, 4% 48%, 2% 36%, 4% 26%, 9% 15%, 19% 10%, 33% 8%, 33% 8%);
    background-color: #faf287;
}

button:nth-child(3):hover ~ .shape {
    clip-path: polygon(49% 3%, 62% 5%, 73% 9%, 81% 15%, 89% 24%, 94% 35%, 96% 48%, 96% 61%, 91% 72%, 85% 82%, 73% 90%, 62% 95%, 46% 95%, 34% 89%, 29% 79%, 32% 70%, 40% 60%, 39% 50%, 32% 40%, 27% 31%, 27% 19%, 30% 9%, 38% 5%,45% 3%);
    background-color:#b872f2;
    clip-path: polygon(49% 3%, 60% 7%, 73% 9%, 75% 18%, 89% 24%, 105% 40%, 96% 48%, 96% 61%, 91% 72%, 85% 82%, 73% 90%, 62% 95%, 46% 95%, 34% 89%, 29% 79%, 32% 70%, 40% 60%, 39% 50%, 32% 40%, 27% 31%, 27% 19%, 30% 9%, 38% 5%,45% 3%);
}
button:nth-child(3):hover ~.question { visibility: visible;}

button:nth-child(4):hover ~ .shape {
    clip-path: polygon(50% 3%, 64% 5%, 74% 9%, 82% 15%, 90% 25%, 95% 35%, 98% 48%, 96% 61%, 92% 71%, 85% 81%, 76% 89%, 65% 95%, 51% 97%, 38% 95%, 28% 92%, 18% 84%, 10% 75%, 5% 63%, 3% 51%, 5% 39%, 9% 28%, 15% 20%, 23% 11%, 36% 5%);
}
@keyframes float {
    0% {
        transform: translateY(0) rotateX(0);
        
    } 
    50% {
        transform: translateY(-30px) rotateX(3deg) scale(1.02);
    }
    100% {
        transform: translateY(0) rotateX(0);
        
    }
}


@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}


.slidecontainer {
    position: relative;
    width: 50%; /* Width of the outside container */
  }
  
  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 10px; /* Specified height */
    background: #f3eeee; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }
  
  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #bb5050; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  
  .slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #35f2ff; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  #smoothTriangle #SmoothTriablelable #smoothSquare #smoothSquarelable #smoothCircle #smoothCirclelable {
    display: none;
    visibility: hidden;
  }
  
