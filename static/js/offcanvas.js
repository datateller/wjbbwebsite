$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

function addImage()
{
//  var o=document.getElementById("id_photo");
//  var photo1=document.createElement("input");
//  photo1.type=file;
  document.getElementById("id_photo1").style="visibility:visible";
}
