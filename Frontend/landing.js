let user_data=JSON.parse(localStorage.getItem("user"));

if(user_data){
    document.querySelector("#signin_name").innerHTML=`Hello, ${user_data.name}`;
    
}
console.log(user_data.name);









document.querySelector(".r-btn").addEventListener("click",(event)=>{
document.querySelector(".product-slide").scrollLeft +=1100;
event.preventDefault();
})

document.querySelector(".l-btn").addEventListener("click",(event)=>{
    document.querySelector(".product-slide").scrollLeft -=1100;
    event.preventDefault();
    })
document.querySelector(".btn-2a").addEventListener("click",(event)=>{
        document.querySelector(".product-slide-2").scrollLeft +=1100;
        event.preventDefault();
        })
        
document.querySelector(".btn-2b").addEventListener("click",(event)=>{
            document.querySelector(".product-slide-2").scrollLeft -=1100;
            event.preventDefault();
            })

            document.querySelector(".btn-1a").addEventListener("click",(event)=>{
                document.querySelector(".product-slide-1").scrollLeft +=1100;
                event.preventDefault();
                })
                
 document.querySelector(".btn-1b").addEventListener("click",(event)=>{
                    document.querySelector(".product-slide-1").scrollLeft -=1100;
                    event.preventDefault();
                    }) 

 document.querySelector(".btn-3a").addEventListener("click",(event)=>{
         document.querySelector(".product-slide-3").scrollLeft +=1100;
        event.preventDefault();
       })
                        
document.querySelector(".btn-3b").addEventListener("click",(event)=>{
   document.querySelector(".product-slide-3").scrollLeft -=1100;
       event.preventDefault();
         })
         document.querySelector(".btn-4a").addEventListener("click",(event)=>{
            document.querySelector(".product-slide-4").scrollLeft +=1100;
           event.preventDefault();
          })
                           
   document.querySelector(".btn-4b").addEventListener("click",(event)=>{
      document.querySelector(".product-slide-4").scrollLeft -=1100;
          event.preventDefault();
            }) 
            document.querySelector(".btn-5a").addEventListener("click",(event)=>{
                document.querySelector(".product-slide-5").scrollLeft +=1100;
               event.preventDefault();
              })
                               
       document.querySelector(".btn-5b").addEventListener("click",(event)=>{
          document.querySelector(".product-slide-5").scrollLeft -=1100;
              event.preventDefault();
                })                       
      
 
// back to top    

const backtop= document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


// Side-bar

const sidebar= document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark")
const black= document.querySelector(".black");
const sidebtn= document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active")
    cross.classList.add("active")
    black.classList.add("active")
    document.body.classList.add("stop-scroll")
})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active")
    cross.classList.remove("active")
    black.classList.remove("active")
    document.body.classList.remove("stop-scroll")
})


//Drop down

const sign= document.querySelector(".ac")
const tri= document.querySelector(".triangle")
const signin= document.querySelector(".hdn-sign")

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active")
    document.body.classList.toggle("stop-scroll")
})