var dropdown_var = document.getElementById("player_drop_down_container");
var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();

// function handle_dropdown(){
//   dropdown_var.innerHTML='';
//   var no_of_participants= document.getElementById("select_drop").value;
//   for(var i=1;i<=no_of_participants;i++){
//       var txt = document.createElement('input');
//       txt.setAttribute('type','text');
//       txt.setAttribute('class','participants_name');
//       dropdown_var.appendChild(txt);
//       var brk = document.createElement('br');
//       dropdown_var.appendChild(brk);

//   }
// };
function handle_dropdown_league(){
  dropdown_var.innerHTML='';
  var no_of_participants= document.getElementById("select_drop").value;
  
  if(no_of_participants%2==0&& no_of_participants<16){
    for(var j=1;j<=no_of_participants/2;j++){
      var div1 = document.createElement('div');
      div1.setAttribute('class','set_a1'+j);
      dropdown_var.appendChild(div1);
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
        var brk = document.createElement('br');
        dropdown_var.appendChild(brk);
    }
    for(var j=no_of_participants/2;j>=0;j--){
      var div1 = document.createElement('div');
      div1.setAttribute('class','set_a2'+j);
      dropdown_var.appendChild(div1);
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
        var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
    }
  }
  //----------------------------------------------------------------//
  if(no_of_participants%2==0 && no_of_participants>=16){
    for(var j=1;j<=no_of_participants/4;j++){
      
      var div1 = document.createElement('div');
      div1.setAttribute('class','set_1'+j);
      dropdown_var.appendChild(div1);
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            txt.setAttribute('class','participants_name');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
        var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
    }
    for(var j=no_of_participants/4;j>=0;j--){
      var div1 = document.createElement('div');
      div1.setAttribute('class','set_2'+j);
      dropdown_var.appendChild(div1);
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            txt.setAttribute('class','participants_name');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
        var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
    }
    for(var j=1;j<=no_of_participants/4;j++){
      var div1 = document.createElement('div');
      div1.setAttribute('class','set_3'+j);
      dropdown_var.appendChild(div1);
      for(var i=1;i<=j;i++){
          var txt = document.createElement('input');
          txt.setAttribute('type','text');
          txt.setAttribute('class','participants_name');
          dropdown_var.appendChild(txt);
          var brk = document.createElement('br');
          dropdown_var.appendChild(brk);
      }
      var brk = document.createElement('br');
          dropdown_var.appendChild(brk);
  }
  for(var j=no_of_participants/4;j>=0;j--){
    var div1 = document.createElement('div');
    div1.setAttribute('class','set_4'+j);
    dropdown_var.appendChild(div1);
      for(var i=1;i<=j;i++){
          var txt = document.createElement('input');
          txt.setAttribute('type','text');
          txt.setAttribute('class','participants_name');
          dropdown_var.appendChild(txt);
          var brk = document.createElement('br');
          dropdown_var.appendChild(brk);
      }
      var brk = document.createElement('br');
          dropdown_var.appendChild(brk);
  }
  }
};
//----------------------------------------------------------------------------//


