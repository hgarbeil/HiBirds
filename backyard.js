const backLink = document.getElementById ("Backlink") ;



function backyardbirds() {
    let infile = "data/backyard.txt" ;
    let inum = 0 ;

    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
            
    }
    backLink.classList.add("active") ;
    main_container.innerHTML = "What did we do?" ;
    let myhtml ="<div class='main-tile-head'><h2>Backyard Birds</h2></div><div class='main-tile-container'>" ;
    $ajaxUtils.sendGetRequest (infile, function(responseText){
        lines = responseText.split('\n') ;
        arrlist=[] ;
        for (iline of lines) {

            str = iline.split(';') ;
            var  bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], 
                endemic: str[3], habitat: str[5], image:str[6]} ;
            console.log(bird.scientific_name) ;
            arrlist.push (bird) ;
            myhtml = myhtml + makeCard(bird);
            inum++ ;
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );
}