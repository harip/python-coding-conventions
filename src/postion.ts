import {ReplacementInfo} from './linedata';
import * as opr from './operators';

// Find all occurences of an operator in text
export const getAllOccurences=(operator:string,line:string):number[]=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        operatorLocations.push(idx);
        idx = line.indexOf(operator, idx + operator.length);
    }
    return operatorLocations;
};

// If the line is searched for ==, === will also be counted, this function avoids that
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

// Function that determines where to add space
export const addSpaces=(r:ReplacementInfo,lineText:string):string=>{
    // Get map
    let repl= opr.exportAllOperators().get(r.Operator);
    let replSpace= repl.Space===opr.ApplySpaces.Both 
        ? opr.ApplySpaces.Left | opr.ApplySpaces.Right
        : repl.Space;

    let orgText=r.Operator;    
    if (replSpace===opr.ApplySpaces.Left){
        let befText=r.Text.substr(r.Start-1,1);
        orgText = (befText !== " ") ? ` ${orgText}` : orgText;
    }

    if (replSpace===opr.ApplySpaces.Right){
        let aftText=r.Text.substr(r.Start+1,r.End+1);
        orgText = (aftText !== " ") ? `${orgText} ` : orgText;
    }

    if (orgText===r.Operator){
        return "";
    }
    return orgText;
};