'use strict';

import * as oc from './operatorconventions';
import {LineInfo, ReplacementInfo} from './linedata';
import * as opr from './operators';

export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions    
    //let operatorsReplacements=oc.operatorWhiteSpace(lineInfo,opr.operators);

    opr.exportAllOperators.forEach(op=>{
        // Find index
        let idx=lineInfo.Text.search(op);

        if (idx>=0){
            var replacement=new ReplacementInfo{
                
            }
        }

    });


    return operatorsReplacements;
};