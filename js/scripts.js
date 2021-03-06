$(document).ready(function(){
  $("#myBtn").click(function(){
    var selectedRadio = $('input[name="inlineRadioOptions"]:checked').val();
    if (selectedRadio==="delivery"){
    $("#myModal").modal();
  }
  });
  $("#checkout").click(function(){
    var deliveryAddress = $("input#inputAddress").val();
    alert(' your order will be delivered to ' + deliveryAddress);

  });





});