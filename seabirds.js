const seabirdLink = document.getElementById("SeabirdLink") ;

function seabirds () {
    let infile='data/seabirds.txt';
    arrlist=[] ;
    for (ilink of linkarr){
        let link = document.getElementById(ilink);
        link.classList.remove ("active") ; 
        
    }
    seabirdLink.classList.add("active") ;
    arrlist=[] ;
    let myhtml ="<div class='main-tile-head'><h2>Sea Birds</h2></div><div class='main-tile-container'>" ;
    $ajaxUtils.sendGetRequest (infile, function(responseText){
        lines = responseText.split('\n') ;
        let inum = 0 ;
        for (iline of lines) {
            str = iline.split(';') ;
            console.log(str.length) ;
            if (str.length > 7){
                bird={indval:inum, name:str[0],  commonName:str[1], scientific_name:str[2], 
                endemic: str[3], habitat: str[5], concern: str[9], image:str[6], image1:str[7], image2:str[8] ,description:str[10],
                mylink:str[11],  myaudio:("audio/"+str[12])} ;
            }
            else 
                continue ;   
             
            
           
            myhtml = myhtml + makeCard(bird);
            arrlist.push(bird) ;
            inum++ ;
        }
        myhtml= myhtml+"</div>";
        main_container.innerHTML = myhtml ;

    }, false );


}
