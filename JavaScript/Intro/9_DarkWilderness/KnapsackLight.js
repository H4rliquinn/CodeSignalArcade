function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1+weight2<=maxW){
        return value1+value2;
    } else {
        retVal=0;
        if (weight1<=maxW){
            retVal=value1;
        }
        if (weight2<=maxW && value2>retVal){
                retVal=value2;
        }
        return retVal;
    }
}