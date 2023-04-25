$( document ).ready(function() {  

  function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');



  }

  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;

          case 39: // right
          moveToSelected('next');
          break;

          default: return;
      }
      e.preventDefault();
  });

  $('#carousel div').click(function() {
    moveToSelected($(this));
  });

  $('#prev').click(function() {
    moveToSelected('prev');
  });

  $('#next').click(function() {
    moveToSelected('next');
  });



jQuery('#carousel div').click(function(){

   var id = jQuery(this).attr('data-slide');
    //console.log(id);
    jQuery('.dot').removeClass('dark');
    jQuery('#'+id).addClass('dark');
});


  
  $('.dot').click(function(){
    $('.dot').removeClass('dark');
    $(this).addClass('dark');
    var id = $(this).attr('id');
    var ele = $('#carousel div[data-slide="'+id+'"]');
    moveToSelected(ele);

  });

/*
  $('.dot').click(function(){
    if(!$(this).hasClass('dark')){
    //quitamos todos los .dot que tengan la clase active
      $('.dot').removeClass('dark');
    //añadimos la clase active a la clickeada
      $(this).addClass('dark');
    }
  });*/
    
  
/*
  if ( $(ele).hasClass( "selected" ) ) {
    $('.dot').addClass('dark');
  }

      if ( $(element).hasClass("selected") && id == dotid ) {
      $('.dot').addClass('dark');
      alert('hola!');
    }

*/

});