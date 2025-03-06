let home=18;
let guest=10;
const buttonPlusOneHome= document.getElementById("plusOneHome")
const buttonPlusTwoHome=document.getElementById("plusTwoHome")
const buttonPlusThreeHome=document.getElementById("plusThreeHome")


const buttonPlusOneGuest=document.getElementById("plusOneGuest")
const buttonPlusTwoGuest=document.getElementById("plusTwoGuest")
const buttonPlusThreeGuest=document.getElementById("plusThreeGuest")

const homeResult=document.getElementById("home-result")
const guestResult=document.getElementById("guest-result")


buttonPlusOneHome.addEventListener("click",function(){
home+=1;

homeResult.textContent = home; 

})

buttonPlusTwoHome.addEventListener("click",function(){
    home+=2;
    
    homeResult.textContent = home; 
    
    })

    buttonPlusThreeHome.addEventListener("click",function(){
        home+=3;
        
        homeResult.textContent = home; 
        
        })



buttonPlusOneGuest.addEventListener("click",function(){
    guest+=1;
    
    guestResult.textContent = guest; 
    
    })

    buttonPlusTwoGuest.addEventListener("click",function(){
        guest+=2;
        
        guestResult.textContent = guest; 
        
        })

        buttonPlusThreeGuest.addEventListener("click",function(){
            guest+=3;
            
            guestResult.textContent = guest; 
            
            })