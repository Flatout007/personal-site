// set up text to print, each item in array is new line
var aText = new Array(
"$ There are only 10 types of people in the world:", 
"Those who understand binary, and those who don't"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
/*endtypewriter*/

/*my progress bar function*/
$(function(){
    var loader = $('#loader');
    var bar = $('#bar');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (165)
    }, time);
  
});

  /*my progress bar function2*/
$(function(){
    var loader = $('#loader2');
    var bar = $('#bar2');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (150)
    }, time);
  
});


 /*my progress bar function3*/
$(function(){
    var loader = $('#loader3');
    var bar = $('#bar3');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});



/*my progress bar function4*/
$(function(){
    var loader = $('#loader4');
    var bar = $('#bar4');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});


/*my progress bar function5*/
$(function(){
    var loader = $('#loader5');
    var bar = $('#bar5');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});

/*my progress bar function6*/
$(function(){
    var loader = $('#loader6');
    var bar = $('#bar6');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});

/*my progress bar function7*/
$(function(){
    var loader = $('#loader7');
    var bar = $('#bar7');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});

/*my progress bar function8*/
$(function(){
    var loader = $('#loader8');
    var bar = $('#bar8');
    var max_width = loader.width();
    var time = 3000; // Time of the animation (3 sec.)
    
    // Sets the bar width to 0
    bar.width(0);
    
    bar.animate({
        width: (180)
    }, time);
  
});
        /*Antonter typing effect*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };




