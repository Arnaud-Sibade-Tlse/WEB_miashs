window.onload = function() {
  console.log("test");
  document.getElementByClassName("col-sm-4 thumbnail").addEventListener("click", function(){
    let id = this.id;
    console.log(id);
  }
}
