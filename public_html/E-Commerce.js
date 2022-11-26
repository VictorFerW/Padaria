    
    
    
    

  


  function buy(){
    var productsFirebase=[];
    for(let index = 0; index < products.length; index++){
        if(products[index].cart){
            var product ={


                name: products[index].name,
                price: products[index].price,
                quantity: products[index].quantity,
                total: products[index].total,

            }
            productsFirebase.push(product);

        }
    }

    firebase().database().ref('cart').push({

        total:total(),
        products: productsFirebase

    });
    Swal.fire({
        type: 'success',
        title: 'Success',
        text:'Operation Completed'
    });

    clean();


  }

  var products =[
    {
        id:1,
        Image:'./paodeqeuijo.jpg',
        name:'pao',
        price:3,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:2,
        Image:'./paodeqeuijo.jpg',
        name:'rosca',
        price:9,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:3,
        Image:'./paodeqeuijo.jpg',
        name:'paozinho',
        price:6,
        cart:false,
        quantity:1,
        total:0
    },


  ];


  function total() {
    let total=0;
    for (let index = 0; index < products.length; index++){

        if(products[index].cart){
            total+= products[index].total;
        }

    }
    return total
  }

  var con=0;
  var con2=0;

  function clean(){
    for (let index = 0; index < products.length; index++){
             products[index].cart=false;          
             products[index].quantity=1,
             products[index].total=0,
             con2=[];
             updateCart();

    }
  }


  function add(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id != id || products[index].cart==true){


        }else{

            products[index].cart=true;
            
            document.getElementById('tableProducts').innerHTML+=`
            
            <tr>
            
            <th scope="row">${con+1}</th>
            <td><button class="btn-btn-danger" onclick="remove(${products[index].id})">X</button>
            <td><img style="width: 5rem;" src="${products[index].Image}"></td>
            <td>${products[index].name}</td>
            <td>
            <button class="btn-btn-primary" onclick="reduceAmount(${products[index].id})">
            -</button>
            </td>
            </tr>
            <imput syle="with: 2rem;" id="${products[index].id}" value="${products[index].quantity}" disabled>
            <button class="btn-btn-primary" onclick="addAmount(${products[index].id})">
            +</button>
            </td>
            </tr>
   
            
            `
            con++;
            products[index].total=products[index].price*products[index].quantity


        }
    }

    document.getElementById('total').innerHTML+=`
    
    
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
        <h4>Total: </h4>
    </td>
    <td>
        ${total()}.00
    </td>
    <tr>
    </tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <button onclick="buy()" class="btn-btn-success">Buy</button>
    </td>

    </tr>
    
    
    
    
    
    `


  }








//Render

(()=>{
    for (let index = 0; index < products.length; index++) {
        document.getElementById('row1').innerHTML+=`
        
            <div class="card m-2" style="with:10rem;">
            <img src="${products[index].Image}" class="card-img-top">
            <div class="card-body"> 
            <h5 class="card-title">${products[index].name}  </h5>
            </div>
            <button class="btn-btn-primary" onclick="add('${products[index].id}') ">Add</button>

            
            </div>
        
        
        `;
        
    }
})();






