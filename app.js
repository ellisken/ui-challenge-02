//Add toggle to checkboxes
$('#checkbox1, #checkbox2').on('click', function(){
  if($(this).hasClass('icons-check')){
    $(this).removeClass('icons-check').addClass('icons-checked');
  }else{
    $(this).removeClass('icons-checked').addClass('icons-check');
  }
});