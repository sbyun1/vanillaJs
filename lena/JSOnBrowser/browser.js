//1. Searching for Elements

    //document.getElementById
    //document.getElementsByClassName :: array
    //document.getElementsByTagName   :: array
        //const title = document.getElementsByTagName("h1");

    //document.querySelector :: allows you to search element using css notation
                            //returns only one element

    //if theres same elements -> only shows the first one
    const title = document.querySelector(".hello h1");
    console.log(title);

    //by using css selector
    const cssTitle = document.querySelector(".hello h1:first-child");
    console.log(cssTitle);

    //querySelectorAll :: selecting all :: array 
    const titleAll = document.querySelectorAll(".hello h1");
    console.log(titleAll);


