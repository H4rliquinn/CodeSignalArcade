function adjacentElementsProduct(inputArray) {
    let current_max=Number.NEGATIVE_INFINITY;
    let last_value=null;
    for (x in inputArray){
        if (last_value !=null){
            let current_total=last_value*inputArray[x];
            if (current_total>current_max){
                current_max=current_total;
            }
        }
        last_value=inputArray[x];
    }
    return current_max;
}

adjacentElementsProduct([1,2,3]);