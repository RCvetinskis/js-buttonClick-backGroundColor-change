"use strict"
// this pasiema funkcija arba svetaine/elementa.

var buttons = document.getElementsByTagName("button")
var colors = ["orange", "skyblue", "crimson"]

//  1. variantas kiekvienam button priskirti spalva  :

// buttons[0].addEventListener("click", function(){
//     document.body.style.background = colors[0]

// })
// buttons[1].addEventListener("click", function(){
//     document.body.style.background = "skyblue"

// })
// buttons[2].addEventListener("click", function(){
//     document.body.style.background = "crimson"

// })

// 2 variantas keisti spalva pagal index (this.getAttribute("index"))
for(var x of buttons){ // for loop padaro pasiklausima visiems buttons elementams
    x.addEventListener("click", function(){

            for(var x of buttons){
                x.style.background ="white"
                x.style.color ="black"
            }
            var index = this.getAttribute("index")
            document.body.style.background = colors[index]
        this.style.background = "black"
        this.style.color = "white"
        // console.log(this.innerText)
        // console.log(this.getAttribute("index"));
    })
}

