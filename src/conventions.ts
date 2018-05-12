'use strict';

import * as oc from './operatorconventions';
import {LineInfo} from './linedata';

export const getConventions=(lineInfo:LineInfo)=>{
    // Apply operator conventions
    let operatorsReplacements=oc.operatorWhiteSpace(lineInfo);

    return operatorsReplacements;
};