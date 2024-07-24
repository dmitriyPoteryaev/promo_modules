import { basketStore } from "../store/index";

const postInfoFromForm = async (data) => {

  try {

    // Clear caart firstChild

    const res_clear = await fetch("https://akytec.de/en/request4quote/quote/send/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,uk;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      "referrer": "https://promo-modules.akytec.de/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "update_cart_action=empty_cart&update_cart_action=empty_cart&isrfq=1",
      "method": "POST",
      "mode": "no-cors",
      "credentials": "include",
    });


    const formData = new FormData();
    formData.append('product', '107');
    formData.append('r4q_hidecart', '1');
    formData.append('options[74]', basketStore.MapOrderPositionToString);
    formData.append('r4q_hidecart', '1');
    formData.append('qty', '1');


    const res_add = await fetch("https://akytec.de/en/request4quote/quote/add/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,uk;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },

      "referrer": "https://promo-modules.akytec.de/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": formData,
      "method": "POST",
      "mode": "no-cors",
      "credentials": "include"
    });
    console.log(res_add);

    // add product to cart

    const {adress, city, company, country, email, firstName, lastName, quoteComments, telephone, zip, isGetInfo, isGetNews} = data;

console.log('Ты здесь', data, company);

let numericValueisGetInfo = isGetInfo ? 1 : 0;

let numericValueiisGetNews = isGetNews ? 1 : 0;

    const checkoutFormData = new FormData();
    checkoutFormData.append('options', basketStore.MapOrderPositionToString);
    checkoutFormData.append("r4q[details][firstname]", firstName);
    checkoutFormData.append('r4q[details][lastname]', lastName);
    checkoutFormData.append('r4q[details][email]', email);
    checkoutFormData.append('r4q[details][telephone]', telephone);
    checkoutFormData.append('r4q[details][remark]', quoteComments);
    checkoutFormData.append("r4q[billing][is_required]", `${numericValueisGetInfo}`);
    checkoutFormData.append("r4q[shipping][is_required]", `${numericValueiisGetNews}`);
    checkoutFormData.append('r4q[shipping][company]', company);
    checkoutFormData.append('r4q[shipping][address]', adress);
    checkoutFormData.append('r4q[shipping][city]', city);
    checkoutFormData.append('r4q[shipping][postcode]', zip);
    checkoutFormData.append('r4q[shipping][country]', country);


    const res_checkout = await fetch("https://akytec.de/en/request4quote/quote/send/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,uk;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },

      "referrer": "https://promo-modules.akytec.de/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": checkoutFormData,
      "method": "POST",
      "mode": "no-cors",
      "credentials": "include"
    });
    console.log(res_checkout);
    


    const res_crm = await fetch("https://akytec.de/de/request4quote/quote/success/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,uk;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },

      "referrer": "https://promo-modules.akytec.de/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": checkoutFormData,
      "method": "POST",
      "mode": "no-cors",
      "credentials": "include"
    });
    console.log("res_crm", res_crm);
    
    if (res_checkout.status == 200) {

      console.log("All was went susscesfully");


    }
    else {

      console.log("All wasn't went susscesfully");
      throw Error("Что пошло не так! Перезагрузите страницу");

    }
  //   console.log(res_checkout.text());


   }

  catch (err: any) {

    console.log(err.message);

  }

};

export const formAPI = {
  postInfoFromForm,
};