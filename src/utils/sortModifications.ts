export const sortModifications = (arrayModificatons, obj, ArrayWithAllOrderPositionStore) => {

    let newArray = arrayModificatons;

    newArray =  newArray.map((modification) => {

        if(ArrayWithAllOrderPositionStore.map((orderedPosition) => orderedPosition.certain_name).some((certanName) => modification.certain_name === certanName)){

            return {...modification, isOrdered: true}
        } else {

            return modification
        }


    });

    if(Object.keys(obj).length === 0  ||  !Object.values(obj).some((specificKey: any) => specificKey.checked)) {

        return newArray
    }

    Object.keys(obj).forEach((specificKey) => {

        newArray = newArray.filter((modification) => {

            if(modification?.[specificKey] == obj[specificKey].value){

                return modification;

            } else {

                return 
            }

        })
        
    });


    return  newArray


}