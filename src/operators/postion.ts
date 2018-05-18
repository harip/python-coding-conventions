import {ReplacementInfo, LineInfo} from '../models/linedata';
import * as opr from '../operators/operatorslist';

// Find all occurences of an operator in text
const getAllOccurences=(operator:string,line:string):number[]=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        operatorLocations.push(idx);
        idx = line.indexOf(operator, idx + operator.length);
    }
    return operatorLocations;
};

// If the line is searched for ==, === will also be counted, this function avoids that
const getReplacementInfo=(idx:number,op:string,replacements:ReplacementInfo[])=>{
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
const addSpaces=(r:ReplacementInfo):string=>{
    // Get map
    let repl= opr.exportAllOperators().get(r.Operator);
    let replSpace= repl.Space===opr.ApplySpaces.Both 
        ? opr.ApplySpaces.Left | opr.ApplySpaces.Right
        : repl.Space;

    let orgText=r.Operator;    
    if ((replSpace & opr.ApplySpaces.Left)===opr.ApplySpaces.Left){
        let befText=r.Text.substr(r.Start-2,1);
        orgText = (befText !== " ") ? ` ${orgText}` : orgText;
    }

    if ((replSpace & opr.ApplySpaces.Right)===opr.ApplySpaces.Right){
        let aftText=r.Text.substr(r.End,1);
        orgText = (aftText !== " ") ? `${orgText} ` : orgText;
    }

    if (orgText===r.Operator){
        return "";
    }
    return orgText;
};

export const applyOperatorConventions=(lineInfo:LineInfo):ReplacementInfo[]=>{
    let replacements: ReplacementInfo[]=[];
    let operators=opr.exportAllOperators();
    operators.forEach( (v,op)=>{
        // Find all occurences of the operator and return index positions
        var allIdx=getAllOccurences(op,lineInfo.Text);
        // Evaluate each index position
        allIdx.forEach(idx=>{
            let opPos=getReplacementInfo(idx,op,replacements);
            if (!opPos){
                return;
            }
            replacements.push(new ReplacementInfo(opPos.Start,opPos.End,op,lineInfo.Text,lineInfo.LineNum));
        });
    });
    // Now check for spaces and apply them
    replacements.forEach(r=>{
        r.Operator=addSpaces(r);
    });   
    return replacements;
};

