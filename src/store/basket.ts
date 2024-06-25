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
  
    this.ArrayWithAllOrderPositionStore = [...this.ArrayWithAllOrderPositionStore, obj];
  };



}

export { BasketStore };