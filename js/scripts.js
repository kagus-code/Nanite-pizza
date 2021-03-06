//business logic 
function pizza (size,topping,crust){
  this.size = size;
  this.topping = topping;
  this.crust =crust;
};
//100 is the constant delivery fee 
pizza.prototype.price = function(){
  var total = this.size + this.topping + this.crust + 100 ;
  return total;
};
function resetFields() {
  document.getElementById('size').value=''; 
  document.getElementById('topping').value=''; 
  document.getElementById('crust').value='';
  document.getElementById('inputAddress').value='';
  document.getElementById('qty').value='';
  $('input[name="inlineRadioOptions"]').prop('checked', false);
}
function reloadPage(){
  location.reload(true);
}
//user logic 
$(document).ready(function(){
  $("#myBtn").click(function(event){
    event.preventDefault()
    var selectedRadio = $('input[name="inlineRadioOptions"]:checked').val();
    if (selectedRadio==="delivery"){
       $("#myModal").modal(); 
    }
    else if (selectedRadio==='pick-up'){
      alert("Proceed to the counter to pay and pick up your order" );
    } 
  });
    $("#checkout").submit(function (e){
      e.preventDefault();
      $('#myModal').modal('toggle'); 
       var sizeValue= parseInt( $("#size").val());
       var toppingText = $("#topping").val();
       var crustValue= parseInt($("#crust").val());
       var sizeText;
       var crustText;
 if (sizeValue===450 ){
   sizeText = 'small';
 }else if (sizeValue===550){
   sizeText = 'medium';
 }else if (sizeValue===1000){
   sizeText = 'large';
 }
  if (crustValue===100){
   crustText = 'crispy';
 } else if (crustValue===150){
   crustText = 'stuffed'
 } else if (crustValue===250){
  crustText = 'gluten-free'
} else if (crustValue===200){
  crustText = 'flat-bread'
}
    var size = parseInt( $("#size").val());
    var crust = parseInt($("#crust").val());
    var topping = $("#topping").val();
    var toppingSize; 
    if (size===450 && topping =='Pepperoni'){
      toppingSize = 100;
    }  else if (size===550 && topping =='Pepperoni'){
      toppingSize = 150;
    }else if (size===1000 && topping == 'Pepperoni'){
      toppingSize = 200;
    }else if (size===450 && topping =='Beef'){
      toppingSize = 200;
    }else if (size===550 && topping =='Beef'){
      toppingSize = 250;
    }else if (size===1000 && topping == 'Beef'){
      toppingSize = 300;
    }else if (size===450 && topping =='Onion'){
      toppingSize = 50;
    }else if (size===550 && topping =='Onion'){
      toppingSize = 100;
    }else if (size===1000 && topping=== 'Onion'){
      toppingSize = 150;
    }else if (size===450 && topping == 'Bacon'){
      toppingSize = 70;
    }else if (size===550 && topping == 'Bacon'){
      toppingSize = 120;
    }
    else if (size===550 && topping == 'Bacon'){
      toppingSize = 250;
    }
    else {
      toppingSize = 0;
      alert('Please select Valid option');

    }
    var totalPrice = new pizza(size, toppingSize, crust); 
    var totalPickup= totalPrice.price();
    var totalPricePickup = totalPickup - 100;
    var deliveryAddress = $("input#inputAddress").val();
    var quantity = parseInt( $("input#qty").val());
    var totalPriceDelivery = totalPickup * quantity
      alert(' your order of '+ quantity +' Pizzas'+ ' will be delivered to '+ deliveryAddress + " and you will pay a total of Ksh  " + totalPriceDelivery);
      $("ul#new-order").append("<li><span class='contact'>" +sizeText+ "," + toppingText +","+crustText+ " ----X " + quantity + 
        "----------"   +  'Ksh.' +totalPriceDelivery + "</span></li>");        
        $(".tblcls").append("<tr><td>"+totalPriceDelivery+"</td></tr>"); 
        var result = [];
  $('table tr').each(function(){
  	$('td', this).each(function(index, val){
    	if(!result[index]) result[index] = 0;
      result[index] += parseInt($(val).text());
    });
  });
  $('table').append('<tr></tr>');
  $(result).each(function(){
  	document.getElementById("total").innerHTML ="Total amount is Ksh "+ result;
  });
  resetFields();  
    }); 
});