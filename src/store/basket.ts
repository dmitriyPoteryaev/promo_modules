import { observable, makeObservable, action } from "mobx";
import {mapOrderPositionToString} from "../utils/mapOrderPositionToString";

class BasketStore {

    
  ArrayWithAllOrderPositionStore: any = [];

  MapOrderPositionToString: string = '';

  constructor() {
    makeObservable(this, {
      ArrayWithAllOrderPositionStore: observable,
      MapOrderPositionToString: observable,
      ChangeArrayWithAllOrderPosition: action,
    });
  }

  ChangeArrayWithAllOrderPosition = (obj: any) => {

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


}

export { BasketStore };