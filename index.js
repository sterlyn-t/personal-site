var modal = document.getElementById("BTNXModal");

var btn = document.getElementById("modalButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  console.log("works");
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.trigger == modal){
    modal.style.display = "none";
  }
}
