let divWidth= $("#colorsBox").innerWidth()
let serviceOffset = $('#service').offset().top;
let statsOffset = $('#stats').offset().top;


$("#options").css('left', `-${divWidth}px`);

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

  
$(window).scroll(function(){
    let wScroll=$(window).scrollTop()
   if (wScroll > serviceOffset - 40) {
    $('#nav').css('backgroundColor','rgba(80, 67, 67, 0.4)')
    $('#nav').css('padding','10px 90px')
    // $("#btnUp").css('display','block')
    $("#btnUp").fadeIn(500)  
  
   } else {
    $('#nav').css('backgroundColor','black')
    $('#nav').css('padding','10px 20px')
    // $("#btnUp").css('display','none')
    $("#btnUp").fadeOut(500)  
   }
})

$("#btnUp").click(function(){
    $("Html,body").animate({scrollTop:0},1000)
})



$("a[href ^='#']").click(function(e){
    $(e.target).css('color','var(--main-color)')
    $(e.target).parent().siblings().children().css('color','white')
    let linkHref=$(e.target).attr('href');
    let sectionOffset=$(linkHref).offset().top;
    $("html, body").animate({scrollTop:sectionOffset},1000)
})
// $("ul li").click(function(e){
//     $(e.target).css('color','red')
//     $(e.target).parent().siblings().children().css('color','white')
// })



$('#btn-nav').click(function(){
    $("header nav ul").slideDown(2000)
    $("header nav .toggel-menu").css('display','none')
    $("header nav .close").css('display','block')
})


$("#btnClose").click(function(){
    $("header nav ul").slideUp(2000)
    $("header nav .toggel-menu").css('display','block')
    $("header nav .close").css('display','none')
})





$(document).ready(function(){
    $('#loading .lds-facebook div').fadeOut(1000,function(){
        $("#loading").fadeOut(1500,function(){
            $("#loading").remove()
            $('body').css('overflow-y','auto')
            let counterCoffee=0;
            let counterProjects=0;
            let counterMail=0;
            let counterAwards=0;
            let counterCoffeeInterval= setInterval(()=>{
              counterCoffee++;
              document.getElementById('coffeeCounter').innerHTML=counterCoffee
              if(counterCoffee ==300){
                  clearInterval(counterCoffeeInterval)
                  
              }
          
            },70)
            
            let counterProjectsInterval= setInterval(()=>{
              counterProjects++;
              document.getElementById('projectsCounter').innerHTML=counterProjects
              if(counterProjects ==100){
                  clearInterval(counterProjectsInterval)
                  
              }
          
            },90)
            let counterMailInterval= setInterval(()=>{
              counterMail++;
              document.getElementById('mailCounter').innerHTML=counterMail
              if(counterMail ==90){
                  clearInterval(counterMailInterval)
                  
              }
          
            },100)
            let counterAwardsInterval= setInterval(()=>{
              counterAwards++;
              document.getElementById('awardsCounter').innerHTML=counterAwards
              if(counterAwards ==40){
                  clearInterval(counterAwardsInterval)
                  
              }
          
            },150)
                
        })
    })
    
new WOW().init();
})




let items = $('.item-color')
items.eq(0).css('backgroundColor','#09c')
items.eq(1).css('backgroundColor','red')
items.eq(2).css('backgroundColor','orange')
items.eq(3).css('backgroundColor','teal')
items.eq(4).css('backgroundColor','#19c8fa')

items.click(function(e){
    let bgColor= $(e.target).css('backgroundColor')
    $('.colorChange').css('color',bgColor)
})


$("#options i").click(function(){

    if ($('#options').css('left') == '0px') {
        $("#options").animate({'left':`-${divWidth}`},1000)
    } else {
        $("#options").animate({'left':'0px'},1000)
    }
})




let typed = new Typed('#element', {
    strings: ['Hello,I am Ahmed  ', 'I am a web developer'],
    typeSpeed: 90,
    loop:true,
    showCursor:false,
   
  });


  



//   $(window).ready(function(){
//     let wScroll=$(window).scrollTop()
//    if (wScroll > statsOffset) {
  
//     let counterCoffee=0;
//   let counterProjects=0;
//   let counterMail=0;
//   let counterAwards=0;
//   let counterCoffeeInterval= setInterval(()=>{
//     counterCoffee++;
//     document.getElementById('coffeeCounter').innerHTML=counterCoffee
//     if(counterCoffee ==300){
//         clearInterval(counterCoffeeInterval)
        
//     }

//   },70)
  
//   let counterProjectsInterval= setInterval(()=>{
//     counterProjects++;
//     document.getElementById('projectsCounter').innerHTML=counterProjects
//     if(counterProjects ==100){
//         clearInterval(counterProjectsInterval)
        
//     }

//   },90)
//   let counterMailInterval= setInterval(()=>{
//     counterMail++;
//     document.getElementById('mailCounter').innerHTML=counterMail
//     if(counterMail ==90){
//         clearInterval(counterMailInterval)
        
//     }

//   },100)
//   let counterAwardsInterval= setInterval(()=>{
//     counterAwards++;
//     document.getElementById('awardsCounter').innerHTML=counterAwards
//     if(counterAwards ==40){
//         clearInterval(counterAwardsInterval)
        
//     }

//   },150)
//    } 
// })


//   let counterCoffee=0;
//   let counterProjects=0;
//   let counterMail=0;
//   let counterAwards=0;
//   let counterCoffeeInterval= setInterval(()=>{
//     counterCoffee++;
//     document.getElementById('coffeeCounter').innerHTML=counterCoffee
//     if(counterCoffee ==300){
//         clearInterval(counterCoffeeInterval)
        
//     }

//   },70)
  
//   let counterProjectsInterval= setInterval(()=>{
//     counterProjects++;
//     document.getElementById('projectsCounter').innerHTML=counterProjects
//     if(counterProjects ==100){
//         clearInterval(counterProjectsInterval)
        
//     }

//   },90)
//   let counterMailInterval= setInterval(()=>{
//     counterMail++;
//     document.getElementById('mailCounter').innerHTML=counterMail
//     if(counterMail ==90){
//         clearInterval(counterMailInterval)
        
//     }

//   },100)
//   let counterAwardsInterval= setInterval(()=>{
//     counterAwards++;
//     document.getElementById('awardsCounter').innerHTML=counterAwards
//     if(counterAwards ==40){
//         clearInterval(counterAwardsInterval)
        
//     }

//   },150)