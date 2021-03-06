$(document).ready(function(){
  $("#myBtn").click(function(){
    var selectedRadio = $('input[name="inlineRadioOptions"]:checked').val();
    if (selectedRadio==="delivery"){
    $("#myModal").modal();
  }
  });
});