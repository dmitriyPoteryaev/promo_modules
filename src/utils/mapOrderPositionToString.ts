
export const mapOrderPositionToString = (ArrayWithAllOrderPositionStore) => {

    let newString =  "Options: ";

    ArrayWithAllOrderPositionStore.forEach((element) => {
    
        newString = newString + element.certain_name + ": " + element.counter + " \n";
    
    });

    return newString

}

