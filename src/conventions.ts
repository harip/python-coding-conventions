'use strict';

// import * as oc from './operatorconventions';
import {LineInfo, ReplacementInfo} from './linedata';
import * as opr from './operators';
import * as pos from './postion';
 
export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions    
    //let operatorsReplacements=oc.operatorWhiteSpace(lineInfo,opr.operators);
    let replacements: ReplacementInfo[]=[];
    opr.exportAllOperators.forEach(op=>{
        // Find all occurences
        var allIdx=pos.getAllOccurences(op,lineInfo.Text);
        allIdx.forEach(idx=>{
            let opPos=pos.getReplacementInfo(idx,op,replacements);
            if (!opPos){
                return;
            }
            replacements.push(new ReplacementInfo(opPos.Start,opPos.End,op,lineInfo.LineNum));
        });
    });

    replacements.forEach(r => {
        console.log(`${r.Start} - ${r.End} - ${r.Operator} - ${r.LineNum}`);
    });
};