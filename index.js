
let num=0
let i=0;
do {
  num +=  i;
  i++;
  console.log(num); // 0,1,3
}
while (i < 3); 


/*Variabili*/
$('.btn_var').click( (e)=> { 
    $('#variabili').toggle()
    $('.cards_container').hide()
    $('.introduction').hide()
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')

    
});

$(".chiudiVariabili").click((e)=>{
    $('#variabili').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn('slow')
    $('.main_container').css('margin-top','80px')




})
/*Valori primitivi*/


$('.primitivi').click( (e)=> { 
    $('#primitivi').toggle()
    $('.cards_container').hide()
    $('.introduction').hide();
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')


    
});
$(".chiudiPrimitivi").click((e)=>{
    $('#primitivi').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn('slow')
    $('.main_container').css('margin-top','80px')


})


/* Valori di confronto */

$('.operatori').click( (e)=> { 
    $('#valoriDiConfronto').toggle()
    $('.cards_container').hide()
    $('.introduction').hide();
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')



    
});
$(".chiudiOperatori").click((e)=>{
    $('#valoriDiConfronto').toggle()
    $('.cards_container').show()
    $('.introduction').show();
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


})

/*Commenti*/

$('.commenti').click((e)=>{
    $('#commenti').toggle()
    $('.cards_container').hide()
    $('.introduction').hide();
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')



})

$('.chiudiCommenti').click((e)=>{
    $('#commenti').toggle()
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


});

/* Array */
$('.array').click((e)=>{
    $('#array').toggle()
    $('.cards_container').hide()
    $('.introduction').hide()
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')


})

$('.chiudiArray').click((e)=>{
    $('#array').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


});


/* Oggetti */


$('.oggetti').click((e)=>{
    $('#oggetti').toggle()
    $('.cards_container').hide()
    $('.introduction').hide()
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')


})

$('.chiudiOggetti').click((e)=>{
    $('#oggetti').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


});

/* Funzioni */
$('.funzioni').click((e)=>{
    $('#funzioni').toggle()
    $('.cards_container').hide()
    $('.introduction').hide()
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')


})

$('.chiudiFunzioni').click((e)=>{
    $('#funzioni').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


});

/*Cicli */

$('.cicli').click((e)=>{
    $('#cicli').toggle()
    $('.cards_container').hide()
    $('.introduction').hide()
    $('.navbar').fadeOut("slow")
    $('.main_container').css('margin-top','0')


})

$('.chiudiCicli').click((e)=>{
    $('#cicli').toggle();
    $('.cards_container').show()
    $('.introduction').show()
    $('.navbar').fadeIn("slow")
    $('.main_container').css('margin-top','80px')


});




