var sec1 = document.getElementById("page1");
var sec2 = document.getElementById("page2")
var sec3 = document.getElementById("page3")    
var sec4 = document.getElementById("page4")    
var sec5 = document.getElementById("page5")    
var sec6 = document.getElementById("page6")    


function display(){    
    sec1.style.visibility =  "visible";
    document.body.appendChild(sec1); 
    sec2.remove() 
    sec3.remove() 
    sec4.remove() 
    sec5.remove() 
    sec6.remove() 
    document.body.appendChild(sec2);
    sec2.style.visibility = "hidden";  
    // sec1.style.scale = "1";
}

function display1(){
    sec2.style.visibility = "visible";
        document.body.appendChild(sec2);
        sec1.remove();
        sec3.remove();
        sec4.remove();
        sec5.remove();
        sec6.remove();
        document.body.appendChild(sec1);
        sec1.style.visibility = "hidden";
        sec2.style.visibility = "visible";
}

function display2(){
        sec3.style.visibility = "visible";
        document.body.appendChild(sec3);
        sec1.remove();
        sec2.remove();
        sec4.remove();
        sec5.remove();
        sec6.remove();
        document.body.appendChild(sec1);
        sec1.style.visibility = "hidden";
        sec3.style.visibility = "visible";
}
function display3(){
    sec4.style.visibility = "visible";
        document.body.appendChild(sec4);
        sec1.remove();
        sec2.remove();
        sec3.remove();
        sec5.remove();
        sec6.remove();
        document.body.appendChild(sec1);
        sec1.style.visibility = "hidden";
        sec3.style.visibility = "visible"; 
}

function display4(){
    sec5.style.visibility = "visible";
        document.body.appendChild(sec5);
        sec1.remove();
        sec2.remove();
        sec3.remove();
        sec4.remove();
        sec6.remove();
        document.body.appendChild(sec1);
        sec1.style.visibility = "hidden";
        sec3.style.visibility = "visible";
}

function display5(){
    sec6.style.visibility = "visible";
        document.body.appendChild(sec6);
        sec1.remove();
        sec2.remove();
        sec3.remove();
        sec4.remove();
        sec5.remove();
        document.body.appendChild(sec1);
        sec1.style.visibility = "hidden";
        sec3.style.visibility = "visible";
}

