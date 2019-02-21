//initialize values
function getTotal(){
  
}
getTotal();

//update form on input and change
var form = $('#quote-form');
form.oninput = getTotal();
form.onchange = getTotal();

//sliders
//this function matches slider and slider outputs based on the index -
//when the sliders are moved
$('[type=range]').on( 'input' , function(){
  //set val to slider index
  var val = $('[type=range]').index(this);
  //and output the value of the matched slider
  $('.slider-output')[val].innerHTML = this.value;

  // console.log(this.value);
  // console.log($('[type=range]').index(this));
  // console.log($(this).index());
});

//change slider counter based on slider value
function sliderValue(){
  $('.slider-output').innerHTML = number($('[type=range]').value);
}




//set dollar value based on slider value
var sliderDollarValue;
function sliderDollarValue(){
  switch (number($('[type=range]').value)) {
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
}

//buttons


//checkboxes
