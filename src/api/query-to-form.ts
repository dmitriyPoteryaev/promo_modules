
const  postInfoFromForm =  async () => {

     try {
     
        // Clear caart firstChild
        
        const res_clear = await fetch("https://akytec.de/en/request4quote/quote/send/", {
          "headers": {
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
          },
      
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": "update_cart_action=empty_cart&update_cart_action=empty_cart&isrfq=1",
          "method": "POST",
          "mode": "no-cors",
          "credentials": "include",
        });


        console.log(res_clear);

        // formData.append('product', '107');
        // formData.append('r4q_hidecart', '1');
        // formData.append('options[74]', "oP");
        // formData.append('r4q_hidecart', '1');
        // formData.append('qty', '1');
        // const formData: any  = {

        //   product: '107',
        //   'options[74]': "Options: Mx210-210: 11",
        //   r4q_hidecart: '1',
        //   qty: '1',
        // };


        const formData  = new FormData();
        formData.append('product', '107');
        formData.append('r4q_hidecart', '1');
        formData.append('options[74]', "Options: Mx210-210: 11");
        formData.append('r4q_hidecart', '1');
        formData.append('qty', '1');
        
        
        const res_add = await fetch("https://akytec.de/en/request4quote/quote/add/", {
          "headers": {
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
          },
      
          "body": formData,
          "referrerPolicy": "strict-origin-when-cross-origin",
          "method": "POST",
          "mode": "no-cors",
          "credentials": "include",
        });
        console.log(res_add);
     
        // checkout form 

        const checkoutFormData = new FormData();
        checkoutFormData.append('options', "Options: Mx210-210: 11");
        checkoutFormData.append("r4q[details][firstname]", 'Dima');
        checkoutFormData.append('r4q[details][lastname]', "Poteryaev");
        checkoutFormData.append('r4q[details][email]', 'Dima@gmail.com');
        checkoutFormData.append('r4q[details][telephone]', '666');
        checkoutFormData.append('r4q[details][remark]', "my remark");
        checkoutFormData.append("r4q[billing][is_required]", '0');
        checkoutFormData.append("r4q[shipping][is_required]", '1');
        checkoutFormData.append('r4q[shipping][company]', "My company");
        checkoutFormData.append('r4q[shipping][city]', 'My city');
        checkoutFormData.append('r4q[shipping][postcode]', 'My postcode');
        checkoutFormData.append('r4q[shipping][country]', 'DE');
        checkoutFormData.append('r4q[shipping][region]', '');

        const res_checkout = await fetch("https://akytec.de/en/request4quote/quote/send/", {
          "headers": {
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
          },
      
          "body": checkoutFormData,
          "referrerPolicy": "strict-origin-when-cross-origin",
          "method": "POST",
          "mode": "no-cors",
          "credentials": "include",
        });
        console.log(res_checkout);
        if (res_checkout.status==200){

          console.log("All was went susscesfully");        
            
        }
        else {
          
          console.log("All wasn't went susscesfully");
          throw Error("Что пошло не так! Перезагрузите страницу");
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
    