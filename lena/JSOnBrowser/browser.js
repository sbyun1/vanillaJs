//1. Searching for Elements

    //document.getElementById
    //document.getElementsByClassName :: array
    //document.getElementsByTagName   :: array
        //const title = document.getElementsByTagName("h1");

    //document.querySelector :: allows you to search element using css notation
                            //returns only one element

    //if theres same elements -> only shows the first one
    const h1 = document.querySelector(".hello h1");
    console.log(h1);

    //by using css selector
    const cssH1 = document.querySelector(".hello h1:first-child");
    console.log(cssH1);

    //querySelectorAll :: selecting all :: array 
    const h1All = document.querySelectorAll(".hello h1");
    console.log(h1All);

    h1.innerText = "Hello"; 
    console.dir(h1); //shows whats inside the element

    h1.style.color = "blue"; //using js to apply style

//2. Events
    //2-1: addEventListener()
    const eventH1 = document.querySelector("div.hello:first-child h1");
    
    function handleClick(){
        console.log("H1 was clicked!");
        eventH1.style.color = "red";
    }

    function mouseEnter(){
        eventH1.innerText = "Mouse is here!";
    }

    function mouseLeave(){
        eventH1.innerText = "Mouse is gone!"
    }

    function handleWindowResize(){
        document.body.style.backgroundColor = "tomato";
        //.body is possible cuz its an important, big element 
    }

    function handleWindowCopy(){
        alert("copied!");
    }

    function handleWindowOffline(){
        alert("SOS! no WIFI");
    }

    function handleWindowOnline(){
        alert("ALL GOOD~")
    }

    eventH1.addEventListener("click", handleClick);
    eventH1.addEventListener("mouseenter", mouseEnter);
    eventH1.addEventListener("mouseleave",mouseLeave);
        //listens for event..need to specify which event to listen 
            //-> add function to second argument of eventListener
            // when the event happens, the function will be executed

        //use MDN (Mozilla Developer Network) to find which events can be listen for..
        console.dir(eventH1);
        //if you see "on~~" it is an eventListener

    //2-2: oneventname
    eventH1.onclick =  handleClick;
    eventH1.onmouseenter = mouseEnter;
    eventH1.onmouseleave = mouseLeave;

    //if you use addEventListener :: later on could use remove.eventListener

    //2-3: Window event
    window.addEventListener("resize", handleWindowResize);  
    window.addEventListener("copy", handleWindowCopy); 
    window.addEventListener("offline", handleWindowOffline);
    window.addEventListener("online", handleWindowOnline);

    console.log("------------")

//3. CSS

    //3-1 : CSS in JS

    //if the color is blue, change to tomato,
    //if the color is not blue, change to blue.

    // const CSSH1 = document.querySelector("div.hello:nth-child(2) h1");

    // function handleClick_CSSH1(){
    //     const currentColor = CSSH1.style.color;
    //     let newColor;

    //     if(currentColor === "blue"){
    //         newColor = "tomato";
    //     }
    //     else{
    //         newColor = "blue";
    //     }
    //     CSSH1.style.color = newColor;
    // }

    // CSSH1.addEventListener("click", handleClick_CSSH1);

    //3-2: CSS using style sheet
        //normally changing css using JS is not the best practice 

    // const CSSH1 = document.querySelector("div.hello:nth-child(2) h1");
        
    // function handleClick_CSSH1(){
    //     const clickedClass = "clicked" 

    //     if(CSSH1.className === clickedClass){
    //         CSSH1.className = "";
    //     }
    //     else{
    //         CSSH1.className = clickedClass;
    //     }
    // }
    // CSSH1.addEventListener("click", handleClick_CSSH1);

    //in this case, CSSH1 already has class assigned -> it will be replaced.
    //replacing is not the best practice:
        //You want to add/remove without replacing the original class 
    
    //3-3: "classList" :: allows to work with list of classes.
        //lets use .add()/remove()

    const CSSH1 = document.querySelector("div.hello:nth-child(2) h1");
    
    function handleClick_CSSH1(){
        
        // we could use toggle() :: basically add() + remove() made into a function
        CSSH1.classList.toggle("clicked");
        
        //const clickedClass = "clicked" 
        // if(CSSH1.classList.contains(clickedClass)){
        //     CSSH1.classList.remove(clickedClass);
        // }
        // else{
        //     CSSH1.classList.add(clickedClass);
        // }
    }
    CSSH1.addEventListener("click", handleClick_CSSH1);
