
const  postInfoFromForm =  async () => {

     try {


  // $(".popup_rows_add #add-more").click(function(event){
    //     $($(".popup_rows .popup_row_first")[0]).clone().appendTo(".popup_rows");
        
    // });
    
    
    // $('body').on('click', '.popup_row_remove', function(event) {
        
    //     event.preventDefault();
        
    //     $(this).parents(".popup_row").remove();
    //     return false
        
    // });
    
    
    
    
    
    // $('body').on('submit', '#conf-1-form-testing', function() {
    //   event.preventDefault();
      
    //   let options = "";
      
      
        
    //   $(this).find('input[name="device"]').each(function(i){
    //     if(this.checked) {
    //         options += "device: " + this.value + "\n";
            
    //     }
    //   })
      
    //   options += "action: Resuest for testing\n";
    //   $('#checkoutModal #options').val(options);
    //   $('#exampleModal-testing').modal('hide')
    //   $('#checkoutModal').modal();
      
      
    // });
    
    
    // $('body').on('submit', '#conf-1-form', function() {
    //   event.preventDefault();
      
    //   let options = "Options: \n";
      
      
        
    //     options += "ITP11-red: " + $(this).find('input[name="ITP11-red"]').val() +"\n";
    //     options += "ITP11-green: " + $(this).find('input[name="ITP11-green"]').val() +"\n";
    
    //     options += "ITP14-red: " + $(this).find('input[name="ITP14-red"]').val() +"\n";
    //     options += "ITP14-green: " + $(this).find('input[name="ITP14-green"]').val() +"\n";
    
    //     options += "ITP15-green: " + $(this).find('input[name="ITP15"]').val() +"\n";
    
    //     options += "ITP16-red: " + $(this).find('input[name="ITP16-red"]').val() +"\n";
    //     options += "ITP16-green: " + $(this).find('input[name="ITP16-green"]').val() +"\n";
    
    //     options += "SMI2-red: " + $(this).find('input[name="SMI2-red"]').val() +"\n";
    //     options += "SMI2-green: " + $(this).find('input[name="SMI2-green"]').val() +"\n";
    //     options += "SMI2-yellow: " + $(this).find('input[name="SMI2-yellow"]').val() +"\n";
        
    
      
      
      
      
    //   $('#checkoutModal #options').val(options);
    //   $('#exampleModal').modal('hide')
    //   $('#checkoutModal').modal();
      
    // });
    
    
    
    // $( "#conf-2-form-modal, #conf-2-form" ).on( "submit", function( event ) {
    //   event.preventDefault();
    //   let options = "";
      
    //   $(this).find('input[name="device"]').each(function(i){
    //     if(this.checked) {
    //         options += "device: " + this.value + "\n";
            
    //     }
    //   })
      
    //   options += "action: Pre-order\n";
    //   $('#checkoutModal #options').val(options);
    //   $('#exampleModal').modal('hide')
    //   $('#checkoutModal').modal();
      
    // });
    
    
    
    
    
    // $( "#checkoutModal, #contact-form-inline" ).on( "submit", async function( event ) {
    //     event.preventDefault();
    //     $('#checkout-spinner').show();
     
        // Clear caart firstChild
        
        const res_clear = await fetch("https://akytec.de/en/request4quote/quote/send/", {
          "headers": {
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
          },
      
          "body": "update_cart_action=empty_cart&update_cart_action=empty_cart&isrfq=1",
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });


        console.log(res_clear);
        
        // add product to cart

        // formData.append('product', '107');
        // formData.append('r4q_hidecart', '1');
        // formData.append('options[74]', "oP");
        // formData.append('r4q_hidecart', '1');
        // formData.append('qty', '1');
        const formData: any  = {

          product: 93,
          r4q_hidecart: 1,
          'options[74]': "Options: Mx210-210: 11",
          qty: 1,
        };
        
        
        const res_add = await fetch("https://akytec.de/en/request4quote/quote/add/", {
          "headers": {
            "cache-control": "no-cache",
          },
      
          "body": formData,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        console.log(res_add);
     
        // checkout form 
        const checkoutFormData: any = {

          options: "Options: Mx210-210: 11",
          "r4q[details][firstname]":  "Dima",
          "r4q[details][lastname]":  "Poteryaev",
          "r4q[details][email]":  "Dima@gmail.com",
          "r4q[details][telephone]":  "666",
          "r4q[details][remark]":  "my remark",
          "r4q[billing][is_required]":  "1",
          "r4q[shipping][is_required]":  "0",
          "r4q[shipping][company]":  "My company",
          "r4q[shipping][adress]":  "My adress",
          "r4q[shipping][city]":  "My city",
          "r4q[shipping][postcode]":  "My postcode",
          "r4q[shipping][country]": "DE",
          "r4q[shipping][region]": "DE",

        };

        const res_checkout = await fetch("https://akytec.de/en/request4quote/quote/send/", {
          "headers": {
            "cache-control": "no-cache",
          },
      
          "body": checkoutFormData,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        console.log(res_checkout);
        // $('#checkout-spinner').hide();
        if (res_checkout.status==200){

          console.log("All was went susscesfully");        
            // $('#checkoutModal').modal('hide')
            // Swal.fire(
            //   'Success',
            //   'Your request has been sent!',
            //   'success'
            // )
            
        }
        else {
          
          console.log("All wasn't went susscesfully");
          throw Error("Что пошло не так! Перезагрузите страницу");
            // Swal.fire(
            //   'Error',
            //   'There\'s some problem with yout request! Verify form fields and try again.',
            //   'error'
            // )
        }
        console.log(res_checkout.text());
    

     }

     catch(err: any) {

    console.log(err.message);

     }

    };

    export const formAPI = {
      postInfoFromForm,
    };
    