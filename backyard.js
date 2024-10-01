const backLink = document.getElementById ("Backlink") ;



function backyardbirds() {
    let infile = "data/backyard.txt" ;

    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
            
    }
    backLink.classList.add("active") ;
    main_container.innerHTML = "What did we do?" ;
    let myhtml ="<div class='main-tile-head'><h2>Backyard Birds</h2></div><div class='main-tile-container'>" ;
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