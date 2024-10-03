
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
    str = str+`<div class='detailbutton' onclick=makeFocus(${newfcn}) >Details</div></div></div>`
    
    return str ;


}

function makeFocus (indval){
    let mybird = arrlist[indval] ;
    let myhtml = `<div class="main-focus-head"><h2>${mybird.name}</h2></div>` ;
    myhtml = myhtml + '<div class="main-focus-top">' ;
    myhtml = myhtml + '<div class="main-focus-left" >' ;
    myhtml = myhtml + `Common Name :  ${mybird.commonName}` ;
    myhtml = myhtml + "<ul class='detail-list'>" ;
    myhtml = myhtml + `<li class="detail-li">Scientific Name : ${mybird.scientific_name}</li>` ;
    myhtml = myhtml + `<li class="detail-li">Type : ${mybird.endemic}</li>` ;
    myhtml = myhtml + `<li class="detail-li">Occurrence : ${mybird.habitat}</li>` ;
    myhtml = myhtml + "</ul></div>" ;
    myhtml = myhtml + `<div class="main-focus-right"><div class="main-focus-tnails">
        <img src=${mybird.image}><img src=${mybird.image1}><img src=${mybird.image2}></div>
        <div class="main-focus-big"><img src=${mybird.image} alt="mybird"><div></div>` ;

    
    
    myhtml = myhtml + "</div>" ;
    console.log (myhtml) ;
    main_container.innerHTML = myhtml ;
        


}