'use strict';

import * as oc from './operatorconventions';
import {LineInfo} from './linedata';
import * as opr from './operators';

export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions    
    let operatorsReplacements=oc.operatorWhiteSpace(lineInfo,opr.operators);

    return operatorsReplacements;
};