const backLink = document.getElementById ("Backlink") ;



function backyardbirds() {
    let infile = "data/backyard.txt" ;
    let inum = 0 ;

    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
            
    }
    backLink.classList.add("active") ;
    let myhtml ="<div class='main-tile-head'><h2>Backyard Birds</h2></div><div class='main-tile-container'>" ;
    $ajaxUtils.sendGetRequest (infile, function(responseText){
        lines = responseText.split('\n') ;
        arrlist=[] ;
        for (iline of lines) {

            str = iline.split(';') ;
            if (str.length > 7){
            var  bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], description:str[10],
                endemic: str[3], habitat: str[5], concern: str[9], image:str[6], image1:str[7], image2:str[8] , description:str[10],
                mylink:str[11],  myaudio:(str[12])} ;
            }
            else continue ;
            console.log(bird.scientific_name) ;
            arrlist.push (bird) ;
            myhtml = myhtml + makeCard(bird);
            inum++ ;
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );
}