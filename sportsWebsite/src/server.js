function handle_dropdown(){
    dropdown_var.innerHTML='';
    var no_of_participants= document.getElementById("select_drop").value;
    for(var j=1;j<no_of_participants;j++){
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            txt.setAttribute('class','participants_name');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
    }
    for(var j=no_of_participants;j>=0;j--){
        for(var i=1;i<=j;i++){
            var txt = document.createElement('input');
            txt.setAttribute('type','text');
            txt.setAttribute('class','participants_name');
            dropdown_var.appendChild(txt);
            var brk = document.createElement('br');
            dropdown_var.appendChild(brk);
        }
    }
  };
  