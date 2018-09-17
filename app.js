'use strict';

//Add toggle to checkboxes
$('#checkbox1, #checkbox2').on('click', function(){
  if($(this).hasClass('icons-check')){
    $(this).removeClass('icons-check').addClass('icons-checked');
  }else{
    $(this).removeClass('icons-checked').addClass('icons-check');
  }
});

//Add toggle to radio buttons
$('#radio1, #radio2').on('click', function(){
  if($(this).hasClass('icons-radio')){
    $(this).removeClass('icons-radio').addClass('icons-radio-selected');
  }else{
    $(this).removeClass('icons-radio-selected').addClass('icons-radio');
  }
});