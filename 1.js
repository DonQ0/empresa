console.log("let me down ");
console.log(this);

$(document).ready(function(){

    //progress bar 
    let containerA = document.getElementById("circleA");
     let circleA = new ProgressBar.Circle(containerA , {
color:'#64DAF9',
strokeWidth:8,
duration:1400,
from:{ color:'#AAA'},
to:{
    color:'#65DAF9'
},
step:function(state,circle){
    circle.path.setAttribute('stroke',state.color);
    let value   = Math.round(circle.value() * 60);
    circle.setText(value);

}


     });
     
     let containerB  = document.getElementById("circleB");
     let circleB = new ProgressBar.Circle(containerB , {
color:'#64DAF9',
strokeWidth:8,
duration:1600,
from:{ color:'#AAA'},
to:{
    color:'#65DAF9'
},
step:function(state,circle){
    circle.path.setAttribute('stroke',state.color);
    let value   = Math.round(circle.value() * 254);
    circle.setText(value);

}
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC , {
color:'#64DAF9',
strokeWidth:8,
duration:1800,
from:{ color:'#AAA'},
to:{
   color:'#65DAF9'
},
step:function(state,circle){
   circle.path.setAttribute('stroke',state.color);
   let value   = Math.round(circle.value() * 32);
   circle.setText(value);

}
    });
    let containerD = document.getElementById("circleD");
     let circleD = new ProgressBar.Circle(containerD , {
color:'#64DAF9',
strokeWidth:8,
duration:2000,
from:{ color:'#AAA'},
to:{
    color:'#65DAF9'
},
step:function(state,circle){
    circle.path.setAttribute('stroke',state.color);
    let value   = Math.round(circle.value() * 5254);
    circle.setText(value);
}
     });
        
     // Iniciano quando o rei chegar na seçao da página

     let dataAreaOffset  = $("#data-area").offset();
     let stop = 0;
     $(window).scroll(function(event){

let  scroll = $(window).scrollTop();
if(scroll > (dataAreaOffset.top  - 500) && stop ==0){

    circleA.animate(1.0);
    circleB.animate(1.0);
    circleC.animate(1.0);
    circleD.animate(1.0);
   
    stop = 1;
}

     }); 


     //paralaxx

     setTimeout(function(){


$("#data-area").parallax({imageSrc:'cidadeparallax.png'});
$("#apply-area").parallax({imageSrc:'pattern.png'});

     },250);
     






});
$("#dev-btn").click(function(){

    let type = $(this).attr('id');
    let boxes  = $('.project-box');

    $(".main-btn").removeClass('active');
    $(this).addClass('active')
});


var xhr = new XMLHttpRequest();
xhr.open('GET','data/test.json',true);
