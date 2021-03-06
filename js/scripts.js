//business logic 
function pizza (size,topping,crust){
  this.price = size;
  this.topping = topping;
  this.crust =crust;
}
pizza.prototype.price = function(){
  var total = this.price + this.topping + this.crust;
  return total;

}











//user logic 
$(document).ready(function(){
  $("#myBtn").click(function(){
   var selectedRadio = $('input[name="inlineRadioOptions"]:checked').val();
    if (selectedRadio==="delivery"){
       $("#myModal").modal();
    }
    else {
      alert("your order will be processed shortly")
    };
    
  });
  $("#checkout").click(function(){
    var deliveryAddress = $("input#inputAddress").val();
    var quantity = $("input#qty").val();
    alert(' your order of '+ quantity +' Pizzas'+ ' will be delivered to '+ deliveryAddress);

  });





});