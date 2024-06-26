import { observable, makeObservable, action } from "mobx"

class BasketStore {

    
  ArrayWithAllOrderPositionStore: any = [];

  constructor() {
    makeObservable(this, {
      ArrayWithAllOrderPositionStore: observable,
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
  };


  increment =  (obj: any) => {

    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.map((orderedModification: any) => {
         
      if(orderedModification.certain_name === obj.certain_name){

        return {...orderedModification, counter: ++orderedModification.counter}

      } else {

        return orderedModification
      }
     

    });

  }

  decrement =  (obj: any) => {
    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.map((orderedModification: any) => {
         
      if(orderedModification.certain_name === obj.certain_name){


        return {...orderedModification, counter: --orderedModification.counter};
        
      } else {

        return orderedModification
      }
     

    });
    
  }

  deletePosition =  (obj: any) => {

    this.ArrayWithAllOrderPositionStore = this.ArrayWithAllOrderPositionStore.filter((orderedModification: any) => {
         
      if(orderedModification.certain_name !== obj.certain_name){


        return orderedModification
        
      } else {

        return
      }
     

    });
    
  }


}

export { BasketStore };