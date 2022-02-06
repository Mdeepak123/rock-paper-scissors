var state = "";
const container = document.getElementById('.container');
var boxThere = false; 
var color = "#ff0080";

let mouseDown = false;

function sliderActions(){
    const x = document.getElementById("myRange").value;
    const dimensions = document.querySelector('.text');
    let update = () => dimensions.innerHTML = `${x}x${x}`;
    update();
    console.log(x);
    return x;
}


function getFinalVal(){
    const x = document.getElementById("myRange").value;
    
    if(boxThere){
        clearBoxes();
        console.log(boxThere);
    }
    makeGrid(x);
}

function myFunction(){
    var x = document.getElementById("myColor");
    var currentVal = x.value;
    changeState('color');
    color = currentVal;
    console.log(color);
}

function  changeState(newState){
    state = newState;
    return state;
}

function clearBoxes(){
    $('.container').children().remove();
    console.log("removed");
}

function changeColor(e){
    if (e.type === 'mouseover') return
    if (state === 'color') {
        e.target.style.backgroundColor = color;
    } 
    
    else if (state === 'erase') {
        e.target.style.backgroundColor = 'whitesmoke'
    }
}

function makeGrid(size){
    for(i = 0; i<size; i++){
        for(x = 0; x<size; x++){
            const box = document.createElement('div');
            
            var num = x+x;
            box.id = 'box'+num.toString();
            
            boxSide = 500/size;
            stringSide = boxSide.toString() +"px"
            
            box.style.width = stringSide;
            box.style.height = stringSide;
            box.style.backgroundColor = "whitesmoke";
            box.addEventListener("mouseover", changeColor);
            box.addEventListener('mousedown', changeColor);
            box.addEventListener('click', changeColor);
            $(box).hover(this.changeColor);
            //box.style.margin=".5px";
            
            $('.container').append(box);
            console.log("Box created");
        }
    }

    boxThere = true;
}

$(document).ready(function(){
    console.log(myFunction());
    const colorButton = document.querySelector('.tryButton');
    if(boxThere){
        colorButton.click( function (){
            console.log(color);
        });

        document.body.onmousedown = () => (mouseDown = true);
        document.body.onmouseup = () => (mouseDown = false);
    }
});

/*            const box = document.querySelector('.container > div');
            box.on('click', function(){
                changeColor(color)
            });*/