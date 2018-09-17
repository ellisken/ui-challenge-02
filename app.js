'use strict';

//Add input check to text input w/validation error
$('#text-input-error').on('blur', function(){
  if(!$(this).val()){
    $(this).siblings('span').show();
    $(this).css('border-color', 'red');
  }else{
    $(this).siblings('span').hide();
    $(this).css('border-color', 'black');
  }
});

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
    $(this).siblings('input').removeClass('icons-radio-selected').addClass('icons-radio');
  }else{
    $(this).removeClass('icons-radio-selected').addClass('icons-radio');
    $(this).siblings('input').removeClass('icons-radio').addClass('icons-radio-selected');
  }
});