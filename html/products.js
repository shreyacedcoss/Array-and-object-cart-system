var cart = []
var products = [
    {id:101,name:"Basket Ball",image:'<img src="images/football.png">',price:150,quantity:0}, 
    {id:102,name:"Football",image:'<img src="images/tennis.png">',price:120,quantity:0},
    {id:103,name:"Soccer",image:'<img src="images/basketball.png">',price:110,quantity:0},
    {id:104,name:"Table Tennis",image:'<img src="images/table-tennis.png">',price:130,quantity:0},
    {id:105,name:"Tennis",image:'<img src="images/soccer.png">',price:100,quantity:0}
];
let ctr=0 //the index of the cart is updated as whenever the id from the products array matches with the value whose button is pressed


    $(".add-to-cart").click(function(e){
        var div_val= e.target.getAttribute("value")
        //  console.log(div_val);
    
         for(let i=0;i<products.length;i++){
            if(div_val==products[i].id){
                // cart[ctr++]= products[i];
                cart[i]=products[i];
                products.quantity=+1

            }
            else if(products [i].id==div_val){
                cart[ctr++]= products[i];
                // products.quantity=+1
                
    
            }
        
         }
        //  console.log(cart);
        display();
   
    })
    function display(){
        var table="<table border=1px  'solid black'><tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Delete</th></tr>"
        cart.forEach(element => {
            table+="<tr><td>"+
                    element.id+
                    "</td><td>"+
                    element.name+
                    "</td><td>"+
                    element.image+
                    "</td><td>"+
                    element.price+
                    '</td><td><a  href="#" onclick ="incprod(\''+element.id+'\')">+</a>'+
                    element.quantity+
                     ' <a  href="#" onclick ="decprod(\''+element.id+'\')">-</a>'+  
                     "</td><td>"+
                     ' <a  href="#" onclick ="deleteprod(\''+element.id+'\')">delete</a>'+
                    "</td></tr>"
                    
            
        });
        table+= "</table>"
        document.getElementById("list").innerHTML= table
       
        
    }

    function incprod(val) {
      
        products.forEach((ele)=>{
            if(val == ele.id){
                ele.quantity++;
            }
        })
       
        display();
      }
      function decprod(val) {
      
        products.forEach((ele)=>{
            if(val == ele.id){
                if(ele.quantity>0)
                ele.quantity--;
            }
        })
       
        display();
      }
      function deleteprod(val) {
        for (let i = 0; i < cart.length; i++) {
          if (val == cart[i].id) {
            console.log(cart[i].id);
            cart.splice(i, 1);
          }
        }
        display();
      }
      function EmptyCart(){
       {
        alert("ARE YOU SURE")
            // cart.splice(i, 1);
            cart.splice(0, cart.length)
        }
        display();
      }






