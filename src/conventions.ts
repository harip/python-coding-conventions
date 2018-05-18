'use strict';

import {LineInfo, ReplacementInfo} from './linedata';
import * as oprConv from './operators/postion';

 
export const getConventions=(lineInfo:LineInfo):ReplacementInfo[]=>{   
    let replacements: ReplacementInfo[]=[];

    // Apply comments conventions


    // Apply operator conventions   
    // Ignore if it is a comment 
    let oprReplacements=oprConv.applyOperatorConventions(lineInfo);
    replacements=replacements.concat(oprReplacements);

    
    return replacements;
};