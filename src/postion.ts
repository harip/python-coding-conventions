export const getAllOccurences=(operator:string,line:string)=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        operatorLocations.push(idx);
    }
    return operatorLocations;
};