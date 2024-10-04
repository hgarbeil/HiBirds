const linkarr =["Homelink", "Backlink", "Forestlink"];
let arrlist = [] ;

// This loads the image on the bird focus page 
function loadFull (imNum, indval) {
    
    let loadimage ;
    let birdObj = arrlist[indval] ;
    switch (imNum){
        case 0 : 
            loadimage = birdObj.image ;
            break ;
        case 1 :
            loadimage = birdObj.image1 ;
            break ;
        case 2 :
            loadimage = birdObj.image2 ;
            break ;
    }

    
    let myimg = document.getElementById("bigBird") ;
    myimg.src = loadimage ;
            
    
}

// this loads the card on the bird type page, eg forest bird card, seabird card, etc
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


// this creates the bird focus page
function makeFocus (indval){
    let mybird = arrlist[indval] ;
    let myhtml = `<div class="main-focus-head"><h2>${mybird.name}</h2></div>` ;
    myhtml = myhtml + '<div class="main-focus-top">' ;
    myhtml = myhtml + '<div class="main-focus-left" >' ;
    myhtml = myhtml + "<ul class='detail-list'>" ;
    myhtml = myhtml + `<li class="detail-li">Alternate Name : <b>${mybird.commonName}</b></li>` ;
    myhtml = myhtml + `<li class="detail-li">Scientific Name : <em>${mybird.scientific_name}</em></li>` ;
    myhtml = myhtml + `<li class="detail-li">Description : ${mybird.description}</li>` ;
    myhtml = myhtml + `<li class="detail-li">Type : ${mybird.endemic}</li>` ;
    myhtml = myhtml + `<li class="detail-li">Occurrence : ${mybird.habitat}</li>` ;
    myhtml = myhtml + `<li class="detail-li">Status : ${mybird.concern}</li>`;
    myhtml = myhtml + "</ul></div>" ;
    myhtml = myhtml + `<div class="main-focus-right"><div class="main-focus-tnails">
        <img src=${mybird.image} onclick="loadFull(0, ${indval})"><img src=${mybird.image1} onclick="loadFull(1,${indval})"><img src=${mybird.image2} onclick="loadFull(2, ${indval})"></div>
        <div class="main-focus-big" ><img src=${mybird.image} alt="mybird" id="bigBird"><div></div>` ;

    
    
    myhtml = myhtml + "</div>" ;
    main_container.innerHTML = myhtml ;
        


}

