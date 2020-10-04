$(document).ready(function(){
  $(document.body).css("margin","0");
    $("*").css("box-sizing","border-box");
    $("*").css("margin","0");
    //$(".brand-name").css({padding:"2px",marginTop:"2px"});
    $( "header" ).css({left: "0" , right: "0", position: "absolute  ",border:"1px solid #ffffff",padding:"0px,20px"});
    $( ".container" ).css({ maxWidth:"1140px" ,margin:"auto"});
    $(".home").css("height","50vw");
    $(".home").css("background-image", "url('images/me.jpeg')");
     $(".home").css("background-size", "cover");
     $(".home").css("background-position", "100% 20%");
    
     $( ".row" ).css({display:"flex", flexwrap:"wrap"});
    $(".row").css("justify-content","space-between");
     $(".row").css("align-items","center");
    $(".navlist > li").css({display:"inline-block", marginLeft:"10vw"});
    $(".navlist").css({padding:"0px",marginLeft:"0px"});
    $(".navlist > li >a").css({fontSize:"1vw", textDecoration:"none", lineHeight:"45px", color:"#ffffff",fontWeight:"600",position:"relative",display:"block"});
    $(".brand-name > a").css({color:"#ffffff",textDecoration:"none",fontWeight:"600",textTransform:"uppercase",fontSize:"2vw"});
    $(".block").css({marginLeft:"0.2%",marginTop:"25%",borderLeft:"5px solid #ffffff",padding:"10px"});
    $(".full-screen").css({minHeight:"100vh"});
    $(".home-content").css({display:"flex",maxWidth:"100%",flex:"0 0 100%",flexwrap:"wrap",paddingLeft:"40px"});
    $(".block>h6").css({fontWeight:"600",fontSize:"3vw",margin:"0",padding:"0"});
    $(".block>h1").css({fontWeight:"600",fontSize:"5vw",margin:"0 0 10px",padding:"0",lineHeight:"1.2"});
    $(".block>h3").css({fontWeight:"600",margin:"0 0 20px",fontSize:"3vw",padding:"0"});
    $(".cv-btn>a").css({border:"3px solid #ffffff",borderRadius:"6px",padding:"6px",display:"inline-block",transition:"all .5s ease",color:"#000000",fontWeight:"600",textDecoration:"none",fontSize:"1vw"});
      $(".cv-btn").css({marginLeft:"6px"});
    
    $(".cv-btn>a").hover(function(){$(this).css({backgroundColor:"#ffffff"});
    }, function(){
    $(this).css({backgroundColor:"transparent"});
  });
   
    
    $('head').append("<style>.navbar ul li a:hover::before{content:'';height:3px;background-color:#ffffff;width:100%;position:absolute;left:0px;top:115%;}</style><style>.navbar ul li a.active::before{content:'';height:3px;background-color:#ffffff;width:100%;position:absolute;left:0px;top:115%;}</style>");
    
    $(".contact").css({padding:"100px 15px",backgroundColor:"#D0D0D0",alignItems:"center"});
    
    
    $(".section-title").css({left:"40%",position:"relative",   borderBottom:" 6px solid transparent",borderImage:" linear-gradient(to right, red , yellow)",borderImageSlice: "1"});
    
    $(".contact-form").css({backgroundColor:"#ffffff",maxWidth:"100%",flex:"0 0 100%", maxWidth:"100%",padding:"30px", border:"1px solid #000000",borderRadius:"4px",marginTop:"10px"});
    
     	$(".contact-form>.text").css({maxWidth:"100%",flex:"0 0 100%"});
    
    $(".contact-form>.text>h2").css({paddingBottom:"10px",fontWeight:"700"});
    $(".contact-form>.text>p").css({paddingLeft:"10px",paddingBottom:"10px",fontWeight:"400",color:"#838383"});
    
     $(".col-6").css({maxWidth:"calc(50%-20px)",flex:"0 0 calc(50%-20px)"});
    
     $(".col-12").css({maxWidth:"calc(50%-20px)",flex:"0 0 calc(50%-20px)"});
    
    $(".form-control").css({height:"45px",width:"100%",marginBottom:"15px",border:"1px solid #ced4da",fontSize:"12px",fontWeight:"400"});
    
    $(".col-12 > textarea").css({height:"120px"});
    
    $(".button>a").css({border:"3px solid #ced4da",borderRadius:"6px",padding:"6px",display:"inline-block",transition:"all .5s ease",color:"#000000",fontWeight:"600",textDecoration:"none"});
      $(".button").css({marginLeft:"15px"});
    
    $(".button>a").hover(function(){$(this).css({backgroundColor:"#000000",color:"#ffffff"});
    }, function(){
    $(this).css({backgroundColor:"transparent",color:"#000000"});
  });
    
    $(".Skills").css({backgroundColor:"#e8edf4",minHeight:"92vh",alignItems:"center"})
     $(".skills").css({backgroundColor:"#CCCCCC",color:"white",
                      paddingTop:"10px",paddingBottom:"10px",textAlign:"right"})
     
    $(".section2-title").css({left:"29%",position:"relative",   borderBottom:" 6px solid transparent",borderImage:" linear-gradient(to right, white , #e3daed)",borderImageSlice: "1",paddingTop:"20px",paddingBottom:"20px"});
    $(".section2-title>h1").css({fontSize:"3vw"});
    
   $(".rows").css({position:"relative",paddingTop:"40px",minWidth:"100%"});
    
    $(".skillH").css({paddingLeft:"12px", fontWeight:"600",color:"black"});

$(".continer").css({position:"relative",maxWidth:"100%",backgroundColor:"#D0D0D0",border:"1px solid",borderRadius:"20px"});

    $(".html").css({width:"90%",backgroundColor:"#e3daed",border:"1px solid",borderRadius:"20px"});
    
  $(".css").css({width:"80%",backgroundColor:"#e3daed",border:"1px solid",borderRadius:"20px"});
     $(".hh").css({marginBottom:"3%"});

$(".js").css({width:"65%",backgroundColor:"#e3daed",border:"1px solid",borderRadius:"20px"});
    $(".jq").css({width:"80%",backgroundColor:"#e3daed",border:"1px solid",borderRadius:"20px"});

 $(".php").css({width:"75%",backgroundColor:"#e3daed",border:"1px solid",borderRadius:"20px"});

    $(".about-me").css({height:"80vh",backgroundColor:"#f6f6f6"});
   
    
  
    $(".section3-title").css({left:"10%",position:"relative",   borderBottom:" 6px solid transparent",borderImage:" linear-gradient(to right, #B1BD9A , #ECFEFC)",borderImageSlice: "1",paddingTop:"10px"});
    $(".section3-title>h1").css({fontSize:"3vw"});
 
    
    $(".subtitle").css({left:"10%",paddingTop:"6px",color:"grey",position:"relative"});
     $(".subtitle>h6").css({fontSize:"1.5vw"});
    
     $(".picss").css({width:"100%",maxWidth:"400px",height:"auto",position:"relative",border:"1px solid",borderRadius:"100px"});
    $( ".picss" ).hover(
  function() {
    $( this ).animate({borderRadius:"50px"},300);
  }, function() {
    $( this ).animate({borderRadius:"100px"},300);
  }
);
    
    $(".pic").css({border:"1px",paddingTop:"20px",paddingLeft:"20px",marginTop:"2%"});
    
    $( ".rowm" ).css({display:"flex"});
    
    $( ".headings").css({marginLeft:"2%",marginTop:"3%"});
    $( ".headings>a.akiclass").css({color:"black",fontSize:"2vw",fontWeight:"600",borderBottom:"2px solid",paddingBottom:"10px"});
    
     $( ".headings>a.akiclass").css({color:"black",fontSize:"1.6vw",fontWeight:"600",borderBottom:"2px solid",paddingBottom:"5px"});
    
    $( ".headings>a.smalltext").css({fontSize:"1.1vw",paddingBottom:"6px",color:"#CECECE",borderBottomColor:"#000"});
    $( ".headings>a.gpa").css({fontSize:"12px",fontWeight:"500",marginBottom:"700px"});
    
     $( ".headings").css({paddingLeft:"20px",display:"block"});
    
    $( ".headings>p").css({paddingTop:"1.5vw",display:"block",fontSize:"1.5vw",fontWeight:"500"});
    
    
    
    $( ".navlist > li >a" ).click(function() {
  $(".active").removeClass("active" );
   $(this).addClass("active" );     
});
   
    
    $( ".continer" ).mouseenter(function() {
        $(this).children().animate({width:'0%'});
        var a=$(this).find("a").html();
        $(this).children().animate({width: a});
});


    
    
    
   /* var a= $(this).children("a").val();
        $(this).children().animate({width: a+"%"});*/
    
});


   
   
