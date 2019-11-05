
var c = document.getElementById("objects").childElementCount;
console.log(c);
var count=1;
function carouselShiftLeft(){
    document.querySelector("#object-"+count).classList.add("fadeout");
    document.querySelector("#object-"+count).classList.remove("fadein");
    if(count==1)
    count=c;
    else
    count--;
    document.querySelector("#object-"+count).classList.add("fadein");
    document.querySelector("#object-"+count).classList.remove("fadeout");
    console.log(count);
}
function carouselShiftRight(){
    document.querySelector("#object-"+count).classList.add("fadeout");
    document.querySelector("#object-"+count).classList.remove("fadein");
    if(count==c)
    count=1;
    else
    count++;
    document.querySelector("#object-"+count).classList.add("fadein");
    document.querySelector("#object-"+count).classList.remove("fadeout");
    console.log(count);
}
var clickID;
function displayDropDown(element)
{
    if(element.id=="header-get-involved"||element.id=="footer-get-involved"||element.id=="talk-to-us-get-involved")
    {
        document.querySelector(".get-involved").classList.remove("fadeout");
        document.querySelector(".get-involved").classList.add("fadein");
    }
    if(element.id=="get-involved-close")
    {
        document.querySelector(".get-involved").classList.remove("fadein");
        document.querySelector(".get-involved").classList.add("fadeout");
    }
    if(element.id=="header-talk-to-us")
    {
        document.querySelector(".talk-to-us").classList.remove("fadeout");
        document.querySelector(".talk-to-us").classList.add("fadein");
        document.querySelector(".main-stories-row").classList.add("shift-down");
        document.querySelector(".main-stories-row").classList.remove("main-stories-row");
    }
    if(element.id=="header-initiatives-button")
    {
        clickID="header-initiatives";
        console.log(clickID);
        if(document.querySelector(".header-navbar-structure-list-dropdown-1").classList.contains("fadein"))
        {
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.add("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.add("fadeout");
        }
        else
        {
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.remove("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.add("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.remove("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.add("fadein");
        }    
        var specifiedElement = document.getElementById(clickID);
        document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) 
        {
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-1").classList.add("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-1").classList.add("fadeout");
        }
      });    
    }       
    if(element.id=="header-about-us-button")
    {
        
        clickID="header-about-us";
        console.log(clickID);
        if(document.querySelector(".header-navbar-structure-list-dropdown-2").classList.contains("fadein"))
        {
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.add("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.add("fadeout");
        }
        else
        {
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.remove("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.add("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.remove("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.add("fadein");
        }    
        var specifiedElement = document.getElementById(clickID);
        document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) 
        {
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-2").classList.add("fadeout");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.remove("fadein");
            document.querySelector(".header-navbar-structure-list-dropdown-triangle-2").classList.add("fadeout");
        }
      });    
        
    }   
    if(element.id=="talk-to-us-initiatives-button")
    {
        clickID="talk-to-us-initiatives";
        console.log(clickID);
        if(document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.contains("fadein"))
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.add("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.add("fadeout");
        }
        else
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.remove("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.add("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.remove("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.add("fadein");
        }    
        var specifiedElement = document.getElementById(clickID);
        document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) 
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-1").classList.add("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-1").classList.add("fadeout");
        }
      });    
    }       
    if(element.id=="talk-to-us-about-us-button")
    {
        
        clickID="talk-to-us-about-us";
        console.log(clickID);
        if(document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.contains("fadein"))
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.add("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.add("fadeout");
        }
        else
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.remove("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.add("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.remove("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.add("fadein");
        }    
        var specifiedElement = document.getElementById(clickID);
        document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) 
        {
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-2").classList.add("fadeout");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.remove("fadein");
            document.querySelector(".talk-to-us-navbar-structure-list-dropdown-triangle-2").classList.add("fadeout");
        }
      });    
        
    }   
    
}
