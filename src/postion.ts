import * as opr from './operators'; 

export const getAllOccurences=(operator:string,line:string)=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        // Get the next element
        let nextElem=line.substr(idx,1);
        let isMultiOperator=opr.doubleOperators.findIndex((e)=>{
            return e===nextElem;
        })

        if (isMultiOperator!==-1){
            // Its like ==
            // Skip this
            operatorLocations.push(idx);
            idx = line.indexOf(operator, idx + 2);
        }   
        else{
            operatorLocations.push(idx);
            idx = line.indexOf(operator, idx + 1);
        } 
    }
    return operatorLocations;
};