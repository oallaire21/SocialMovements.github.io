prompt("Do you believe men and women should get equal pay for the same work?");
prompt("Do you believe it is fair that people around the world face violence, inequality, and as far as torture and death just because of the people they love?");
prompt("Should people with disabilities have equal access to rights, oppritunities, and services, while being protected from discrimination, abuse, and neglect?");
prompt("Do you believe people should be treated equally no matter their faith or religion?");
prompt("Do you believe it is fair for people to face discrimination and predjudice just because of their skin color?");
alert("These questions are all related to problems people fight for or against in social movements");
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var drawing = false;
var color = "black";
var flag = new Image();
flag.src = "PrideFlagColoring2.png";
flag.onload = (function() {
    context.drawImage(flag, 0, 0);
});
myCanvas.addEventListener("mousemove", mouseMove); //passes event to function mouseMove
myCanvas.addEventListener("mousedown", mouseDown);
myCanvas.addEventListener("mouseup", mouseUp);


function mouseMove(event) {
    var x = event.pageX - myCanvas.offsetLeft;
    var y = event.pageY - myCanvas.offsetTop;
    if (drawing == true) {
        var size = 10;
        context.fillStyle = color;
        context.fillRect(x, y, size, size);
    }
}

function mouseDown(event) {
    drawing = true;
}

function mouseUp(event) {
    drawing = false;
}

function changeColor() {
    color = document.getElementById("color").value;
    context.fillstyle = color;
}

var slides1 = document.getElementById("slideshow1").getElementsByClassName("mySlides");
var slides2 = document.getElementById("slideshow2").getElementsByClassName("mySlides");
var slides3 = document.getElementById("slideshow3").getElementsByClassName("mySlides");
var slides4 = document.getElementById("slideshow4").getElementsByClassName("mySlides");
var slides5 = document.getElementById("slideshow5").getElementsByClassName("mySlides");

var dots1 =
    document.getElementById("dots1").getElementsByClassName("dot");
var dots2 =
    document.getElementById("dots2").getElementsByClassName("dot");
var dots3 =
    document.getElementById("dots3").getElementsByClassName("dot");
var dots4 =
    document.getElementById("dots4").getElementsByClassName("dot");
var dots5 =
    document.getElementById("dots5").getElementsByClassName("dot");

var slideIndex = 1;
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);
showSlides(slideIndex, 3);
showSlides(slideIndex, 4);
showSlides(slideIndex, 5);

function plusSlides(n, slideshowNum) {
    showSlides(slideIndex += n, slideshowNum);
}

function currentSlide(n, slideshowNum) {
    showSlides(slideIndex = n, slideshowNum);
}

function showSlides(n, slideshowNum) {
    var i;
    var slides;
    var dots;
    if (slideshowNum == 1) {
        slides = slides1;
        dots = dots1;
    } else if (slideshowNum == 2) {
        slides = slides2;
        dots = dots2;
    } else if (slideshowNum == 3) {
        slides = slides3;
        dots = dots3;
    } else if (slideshowNum == 4) {
        slides = slides4;
        dots = dots4;
    } else if (slideshowNum == 5) {
        slides = slides5;
        dots = dots5;
    }
    //console.log(slides);
    //console.log(dots);
    //console.log("n: " + n + "; slideshowNum: " + slideshowNum);
    //var slides = document.getElementsbyClassName("mySlides");
    //var dots = document.getElementsbyClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(dots[slideIndex - 1]);
    dots[slideIndex - 1].className += " active";
}