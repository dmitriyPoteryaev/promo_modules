import { observable, makeObservable, action } from "mobx";
import {mapOrderPositionToString} from "../utils/mapOrderPositionToString";
import { formAPI } from "../api/query-to-form";

const { postInfoFromForm } = formAPI;

class BasketStore {

    
  ArrayWithAllOrderPositionStore: any = [];

  MapOrderPositionToString: string = '';

  isLoading: boolean = false;

  isOpenWindow: boolean = false;

  constructor() {
    makeObservable(this, {
      ArrayWithAllOrderPositionStore: observable,
      MapOrderPositionToString: observable,
      isLoading: observable,
      isOpenWindow: observable,
      ChangeArrayWithAllOrderPosition: action,
      queryToFormStore: action,
      closeWindow: action,
    });
  }

  queryToFormStore =  async(data) => {

    try {

      this.isLoading = true;
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
      formData.append('options[74]', this.MapOrderPositionToString);
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
      checkoutFormData.append('options', this.MapOrderPositionToString);
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
  
      console.log("Ты здесь!");
      this.isLoading = false;
      this.isOpenWindow = true;
  
    }

  }

  ChangeArrayWithAllOrderPosition = (obj: any) => {
    console.log(obj);

    if( this.ArrayWithAllOrderPositionStore.some((orderedModification: any) => obj.certain_name === orderedModification.certain_name)){

      this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.filter((orderedModification: any) => {
         
        if(orderedModification.certain_name !== obj.certain_name){


          return orderedModification
        } else {

          return
        }
       

      });
      return 
    }
  
    this.ArrayWithAllOrderPositionStore = [...this.ArrayWithAllOrderPositionStore, {...obj, counter: 1}];
    this.MapOrderPositionToString = mapOrderPositionToString(this.ArrayWithAllOrderPositionStore);
  };


  increment =  (obj: any) => {

    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.map((orderedModification: any) => {
         
      if(orderedModification.certain_name === obj.certain_name){

        return {...orderedModification, counter: ++orderedModification.counter}

      } else {

        return orderedModification
      }
     

    });

    this.MapOrderPositionToString = mapOrderPositionToString(this.ArrayWithAllOrderPositionStore);
  }

  decrement =  (obj: any) => {
    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.map((orderedModification: any) => {
         
      if(orderedModification.certain_name === obj.certain_name){


        return {...orderedModification, counter: --orderedModification.counter};
        
      } else {

        return orderedModification
      }
     

    });
    this.MapOrderPositionToString = mapOrderPositionToString(this.ArrayWithAllOrderPositionStore);

  }

  deletePosition =  (obj: any) => {

    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.filter((orderedModification: any) => {
         
      if(orderedModification.certain_name !== obj.certain_name){


        return orderedModification
        
      } else {

        return
      }
     

    });

    this.MapOrderPositionToString = mapOrderPositionToString(this.ArrayWithAllOrderPositionStore);
    
  }

  closeWindow = ( ) => {

    this.isOpenWindow = false;
  }

}

export { BasketStore };