
const main_container = document.querySelector(".topmain") ;
const forestLink = document.getElementById("Forestlink") ;
var arrlist=[] ;




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
            
            var  bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], image:str[6]} ;
           
            myhtml = myhtml + makeCard(bird);
            arrlist.push(bird) ;
            inum++ ;
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );


}

function focusbird (index) {
    console.log("hello : "+index);
}

function makeCard (birdObj){
    var newfcn = birdObj.indval ;
    var str = "<div class='main-tile'>" ;
    str = str+"<div class='main-tile-col'><h2 class='main-tile-name'>" ;
    str = str+""+birdObj.name+"</h2>" ;
    str = str+"<h4>CommonName : "+birdObj.commonName+"</h4></div>" ;
    str = str+"<div class='main-tile-col' ><div><img class='main-tile-img' src="+birdObj.image+" ></div>" ;
    str = str+`<div class='detailbutton' onclick=focusbird(${newfcn}) >Details</div></div></div>`;
    return str ;


}

function makeFocus (indval){
    let myhtml = '<div class="main-focus-head">' ;
    myhtml = myhtml + '<div class="main-focus-imgdiv">' ;
    myhtml = myhtml + `<h2>${arrlist[indval].name}</h2></div></div>` ;
    main_container.innerHTML = myhtml ;
        


}