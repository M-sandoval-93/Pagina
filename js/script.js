"Documento de script javaScript"
// $(document).ready(function(){
//     $(windows).scroll(function(){
//         if( ($this).scrollTop() > 0 ){
//             $('header').addClass('.cabecera');
//         } else {
//              $('header').removeClass('.cabecera');
//         }
//     })
// })


function cambio(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 0){
        console.log("realizar cambo");
    } else {
        console.log("revetir cambio")
    }
}

window.addEventListener("scroll", cambio)
