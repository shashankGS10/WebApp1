var dropdown_var = document.getElementById("player_drop_down_container");
var brk = document.createElement('br');

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

function handle_dropdown_knockout(){
  dropdown_var.innerHTML = "";
  var no_of_participants= document.getElementById("select_drop").value;
  var counter = 0;
  console.log(no_of_participants);
  while(no_of_participants>=1)
  {
      console.log(no_of_participants);
      var row_container = document.createElement("div");
      row_container.style.display = "inline";
      row_container.style.width = "20%";
      row_container.style.position = "absolute";
      row_container.style.top = 65+(2*counter)+"%";
      if(no_of_participants===1)
      {
        row_container.style.top = 65+(2*(counter-1))+"%";    
      
      }
      row_container.style.left = (20*(counter))+"%";
      for(var i=0;i<no_of_participants;i++)
      {
        var txt = document.createElement('input');
        txt.setAttribute('type','text');
        txt.setAttribute('class','participants_name');
        row_container.appendChild(txt);
        
        row_container.appendChild(brk);
      }
      dropdown_var.appendChild(row_container);      
      counter+=1;
      console.log(counter);
      if(no_of_participants===1){
        break;
      }
      else
        no_of_participants=Math.ceil(no_of_participants/2);
  }
};
//----------------Changes under progress..---------------------------//
function handle_dropdown_league(){
  dropdown_var.innerHTML='';
  var no_of_participants= document.getElementById("select_drop").value;
  var counter = 1;
  for(var i=1;i<=no_of_participants;i++){
    var div1 = document.createElement('div');
    div1.setAttribute('class','set_a1');
    dropdown_var.appendChild(div1);
    var txt = document.createElement('input');
    txt.setAttribute('type','text');
    div1.appendChild(txt);
    div1.appendChild(brk);
  }
   
    
  no_of_participants=no_of_participants<7 ? 2 : 4;
  while(no_of_participants>=1)
  {
    console.log(no_of_participants);
    var row_container = document.createElement("div");
    row_container.style.display = "inline";
    row_container.style.width = "20%";
    row_container.style.position = "absolute";
    row_container.style.top = 65+(2*counter)+"%";
    if(no_of_participants===1)
    {
      row_container.style.top = 65+(2*(counter-1))+"%";    
    }
    row_container.style.left = (20*(counter))+"%";
    for(var i=0;i<no_of_participants;i++)
    {
      var txt = document.createElement('input');
      txt.setAttribute('type','text');
      txt.setAttribute('class','participants_name');
      row_container.appendChild(txt);
      row_container.appendChild(brk);
    }
    dropdown_var.appendChild(row_container);      
    counter+=1;
    console.log(counter);
    if(no_of_participants===1) break;
    else
      no_of_participants=Math.ceil(no_of_participants/2);
  }
}
//----------------------------------------------------------------------------//