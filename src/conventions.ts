'use strict';

import * as oc from './operatorconventions';
import {LineInfo} from './linedata';

export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions
    const operators=["=","+"];
    let operatorsReplacements=oc.operatorWhiteSpace(lineInfo,operators);

    return operatorsReplacements;
};