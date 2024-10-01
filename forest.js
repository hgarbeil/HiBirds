
const main_container = document.querySelector(".topmain") ;
const forestLink = document.getElementById("Forestlink") ;
let infile = 'data/forest.txt' ;
var arrlist=[] ;




function forestbirds () {
    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
        
    }
    forestLink.classList.add("active") ;
    console.log("we are in here");
    main_container.innerHTML = "What did we do?" ;
    let myhtml ="<div class='main-tile-head'><h2>Forest Birds</h2></div><div class='main-tile-container'>" ;
    $ajaxUtils.sendGetRequest (infile, function(responseText){
        lines = responseText.split('\n') ;
        for (iline of lines) {
            str = iline.split(';') ;
            
            let bird={name:str[0],  commonName:str[1], scientific_name:str[2], image:str[6]} ;
            console.log(bird.scientific_name) ;
            myhtml = myhtml + makeCard(bird);
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );


}

function makeCard (birdObj){
    console.log(birdObj.image) ;
    var str = "<div class='main-tile'><div>" ;
    str = str+"<h2 class='main-tile-name'>" ;
    str = str+""+birdObj.name+"</h2>" ;
    str = str+"<h4>CommonName : "+birdObj.commonName+"</h4></div>" ;
    str = str+"<div class='main-tile-img' ><img src="+birdObj.image+" ></div></div>" ;
    return str ;


}