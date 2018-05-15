import {ReplacementInfo} from './linedata';

export const getAllOccurences=(operator:string,line:string):number[]=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        operatorLocations.push(idx);
        idx = line.indexOf(operator, idx + operator.length);
    }
    return operatorLocations;
};

export const getReplacementInfo=(idx:number,op:string,replacements:ReplacementInfo[])=>{
    let start=idx+1;
    let end=idx+op.length;

    let existingIndex= replacements.findIndex( r=>{
        return start>=r.Start && end<=r.End;
    });
    if (existingIndex!==-1){
        return;
    }
    return {
        Start:start,
        End:end
    };
};