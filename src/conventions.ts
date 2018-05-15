'use strict';

// import * as oc from './operatorconventions';
import {LineInfo, ReplacementInfo} from './linedata';
import * as opr from './operators';
import * as pos from './postion';
 
export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions    
    //let operatorsReplacements=oc.operatorWhiteSpace(lineInfo,opr.operators);
    let replacements: ReplacementInfo[]=[];
    let operators=opr.exportAllOperators();
    operators.forEach(op=>{
        // Find all occurences of the operator and return index positions
        var allIdx=pos.getAllOccurences(op,lineInfo.Text);
        // Evaluate each index position
        allIdx.forEach(idx=>{
            let opPos=pos.getReplacementInfo(idx,op,replacements);
            if (!opPos){
                return;
            }
            replacements.push(new ReplacementInfo(opPos.Start,opPos.End,op,lineInfo.Text));
        });
    });

    // Now check for spaces and apply them
    replacements.forEach(r=>{
        r.Operator=pos.addSpaces(r,r.Text);
        console.log(`${r.Start} - ${r.End} - ${r.Operator} - ${r.Text}`);
    });     
};