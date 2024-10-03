
const main_container = document.querySelector(".topmain") ;
const forestLink = document.getElementById("Forestlink") ;




function forestbirds () {
    let infile='data/forest.txt';
    arrlist=[] ;
    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
        
    }
    forestLink.classList.add("active") ;
    console.log("we are in here");
    main_container.innerHTML = "What did we do?" ;
    arrlist=[] ;
    let myhtml ="<div class='main-tile-head'><h2>Forest Birds</h2></div><div class='main-tile-container'>" ;
    $ajaxUtils.sendGetRequest (infile, function(responseText){
        lines = responseText.split('\n') ;
        let inum = 0 ;
        for (iline of lines) {
            str = iline.split(';') ;
            console.log(str.length) ;
            if (str.length > 7){
                bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], 
                endemic: str[3], habitat: str[5], image:str[6], image1:str[7], image2:str[8]} ;
            }
            else 
                bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], 
                    endemic: str[3], habitat: str[5], image:str[6]} ;
           
            myhtml = myhtml + makeCard(bird);
            arrlist.push(bird) ;
            inum++ ;
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );


}
