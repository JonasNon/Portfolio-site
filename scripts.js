

const mainContainer = document.getElementById("main-container")
const colorHolder = document.getElementById("color-holder")
const header = document.getElementById("header")
const topColorHolder = document.getElementById("top-color-holder")


let toggleA = false
let currentTop = 0
let topCloud

const testFunc = (clicked) => {
  if (toggleA) {
    toggleA = false
    clicked.classList.remove("rgb")
  } else {
    toggleA = true
    clicked.classList.add("rgb")
  }
  // clicked.style.animation = "bob-rgb-color"
  // console.log(document.body.scrollHeight)
}



const cloudClick = (cloud) => {
  // cloud.style.visibility = "hidden !important";
  topCloud = cloud
  header.style.height = "400px";
  cloud.classList.remove("visibility");
}

const cloudUnClick = () => {
  topCloud.style.visibility = "visible !important";
  header.style.height = "200px";
  topCloud.classList.add("visibility");

}

const redirect = (link) => {
  if (link == "eins") {
    window.open("https://jonasnon.github.io/CycleColorBorder/", "_blank");
  }
  if (link == "zwei") {
    window.open("https://jonasnon.github.io/hair-salon/", "_blank");
  }
  if (link == "drei") {
    window.open("https://jonasnon.github.io/DUMMY-data-todo/", "_blank");
  }
  if (link == "vier") {
    window.open("https://jonasnon.github.io/Calculator-Homemade/", "_blank");
  }
  if (link == "funf") {
    window.open("https://jonasnon.github.io/TicTacToe-101-JONAS/", "_blank");
  }
  if (link == "sechs") {
    window.open("https://jonasnon.github.io/Colorful-Recreation/", "_blank");
  }
  console.log(link)
}

// const startBottom = () => {

//   for (i = 0; i < document.body.scrollHeight; i++) {
//     // console.log(currentTop)

//     let newDiv = document.createElement("div");
//     // newDiv.style.visibility = "hidden";
//     colorHolder.appendChild(newDiv)
//     newDiv.classList.add("background")
//     newDiv.style.width = "100%";
//     newDiv.style.height = "1px";
//     newDiv.style.position = "absolute";
//     newDiv.style.zIndex = "-5"
//     newDiv.style.top = currentTop
//     if (currentTop == 0) {
//       newDiv.style.backgroundColor = "rgb(0, 0, 0)"
//       oldDiv = newDiv
//     }
//     currentTop += 1
//     let pagePos = Math.floor((currentTop/document.body.scrollHeight)*100)
//     // console.log(pagePos)
//     RGB = oldDiv.style.backgroundColor
//     RGB = RGB.match(/\d+/g) 
//     B = Number(RGB[2])
//     let colorLevelB = Math.floor(((100-pagePos)*255)/100)
//     let colorLevelG = Math.floor(((100-pagePos)*130)/100)
//     // console.log(colorLevelB)
//     // colorLevelG = 0
//     newDiv.style.backgroundColor = "rgb(0, " + colorLevelG + ", " + colorLevelB + ")"



//   }
// }
// startBottom()



// const startTop = () => {
//   currentTop = 0
//   console.log(currentTop)

//   for (i = 0; i < parseInt(header.offsetHeight); i++) {
//     console.log(currentTop)

//     let newDiv = document.createElement("div");
//     // newDiv.style.visibility = "hidden";
//     header.appendChild(newDiv)
//     newDiv.classList.add("background")
//     newDiv.style.width = "100%";
//     newDiv.style.height = "1px";
//     newDiv.style.position = "absolute";
//     newDiv.style.zIndex = "0"
//     newDiv.style.top = currentTop
//     if (currentTop == 0) {
//       newDiv.style.backgroundColor = "rgb(255, 255, 255)"
//       oldDiv = newDiv
//     }
//     currentTop += 1
//     let pagePos = Math.floor((currentTop/header.offsetHeight)*100)
//     // console.log(pagePos)
//     RGB = oldDiv.style.backgroundColor
//     RGB = RGB.match(/\d+/g) 
//     let colorLevelG = Math.floor(((pagePos)*255)/100)
//     let colorLevelB = Number(RGB[2])
//     let colorLevelR = Math.floor(((pagePos)*290)/100)
//     // let colorLevelG = Math.floor(((100-pagePos)*130)/100)
//     // console.log(colorLevelB)
//     newDiv.style.backgroundColor = "rgb(" + colorLevelR + ", " + colorLevelG + ", " + colorLevelB + ")"




//   }
// }
// startTop()