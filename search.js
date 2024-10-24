

function searchBirds() {

    let localesEl = document.getElementById('sel_locales') ;
    let vals = sel_locales.selectedOptions ;
    console.log(vals.length) ;
    // for (var i=0;  i< vals.length ; i++) {
    //     console.log(vals[i].value) ;

    // }
    for (selval of vals) {
        console.log(selval)
    }
    

}