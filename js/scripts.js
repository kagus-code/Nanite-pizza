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











//user logic 
$(document).ready(function(){
  $("#myBtn").click(function(){
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
      alert('Your pizza will have NO topping');

    }
    var totalPrice = new pizza(size, toppingSize, crust); 
    alert(totalPrice.price());
    
  });

/*
   var selectedRadio = $('input[name="inlineRadioOptions"]:checked').val();
    if (selectedRadio==="delivery"){
       $("#myModal").modal();
    }
    else {
      alert(" your order will be processed shortly")
    };


    
  });
  $("#checkout").click(function(){
    var deliveryAddress = $("input#inputAddress").val();
    var quantity = $("input#qty").val();
    alert(' your order of '+ quantity +' Pizzas'+ ' will be delivered to '+ deliveryAddress);

  });


*/


});