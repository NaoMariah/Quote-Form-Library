//---------------------------------------------------------------------------
// READ ME
//---------------------------------------------------------------------------
//
// For quote forms that allow businesses to quickly give their customers an
// estimate on how much the services will cost.
//
// It includes sliders, options, and buttons whose outputs are then referenced
// to dollar values. Those values are calculated any time the form is changed
// to produce the total value.
//
// The script doesn't include any other external elements, allowing it to be
// copy-pasted to achieve instant functionality.

//---------------------------------------------------------------------------
// SELF - NOTE :
// ? How can I build this within scope to avoid it clashing with other scripts?
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// VARIABLES/CLASSES
// 1 - quoteForm
// 2 - quoteTotal
// 3 - quote-slider
// 4 - slider-output
// 5 - sliderDollarValue
// 6 - quote-total
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
//initialize values
//---------------------------------------------------------------------------

initializeSliders();
quoteTotal();

function initializeSliders(){
  //for each slider
  for (var i=0; i < $('.quote-slider').length; i++){
    //output values of sliders that have a slider-output class (matched by index)
    if ($('.slider-output')[i] > $('.quote-slider')[i]){
      $('.slider-output')[i].innerHTML = $('.quote-slider')[i].value;
    }
  }
}

function quoteTotal(){
  var total = 0;
  //sliders
  for (var i=0; i < $('.slider-output').length; i++){
    //set sliderDollarValue to ouput values
    // var value = $('.slider-output')[i].value;
    var sliderDollarValue = 0;
    //put value through switch case
    switch (Number($('.slider-output')[i].innerHTML)) {
      case 1:
        sliderDollarValue = 1;
        break;
      case 2:
        sliderDollarValue = 2;
        break;
      case 3:
        sliderDollarValue = 3;
        break;
      default:
        console.log("This is default");
    }
    //add to total
    total += sliderDollarValue;
    $('#quote-total')[0].innerHTML = total;
  }
}


//update form on input and change
// var quoteForm = $('#quote-form');
// quoteForm.oninput = quoteTotal();
// quoteForm.onchange = quoteTotal();

//---------------------------------------------------------------------------
//sliders
//---------------------------------------------------------------------------

//this function matches slider and slider outputs based on their index -
//when the sliders are moved

$('.quote-slider').on( 'input' , function() {
  //set val to slider index to match slider and output
  var val = $('.quote-slider').index(this);
  //and output the value to the slider counter
  $('.slider-output')[val].innerHTML = this.value;
  //get total
  quoteTotal();
});

// function changeSlider(){
//   console.log(this);
//   //set val to slider index to match slider and output
//   var val = $('.quote-slider').index(this);
//   //and output the value to the slider counter
//   $('.slider-output')[val].innerHTML = this.value;
//   //get total
//   quoteTotal();
// }
//
// $('.quote-slider').on("click", changeSlider());




//set slider dollar values based on slider value
// var sliderDollarValue;
// function sliderDollarValue(){
//   switch (number($('[quote-slider]').value)) {
//     case 1:
//       sliderDollarValue = 1;
//       break;
//     case 2:
//       sliderDollarValue = 2;
//       break;
//     case 3:
//       sliderDollarValue = 3;
//       break;
//     default:
//       console.log("This is default");
//   }
//   console.log(sliderDollarValue);
// }


//buttons


//checkboxes
