export const sortModifications = (arrayModificatons, obj) => {

    let newArray = arrayModificatons;

    if(Object.keys(obj).length === 0  ||  !Object.values(obj).some((specificKey: any) => specificKey.checked)) {

        return arrayModificatons
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
    
    return newArray

}