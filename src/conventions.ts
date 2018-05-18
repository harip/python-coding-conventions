'use strict';

import {ReplacementInfo, LineInfo} from './models/linedata';
import * as oprConv from './operators/postion';
import * as bcConv from './comments/blockcomments';
import * as funcConv from './naming/functions'
 
export const getConventions=(lineInfo:LineInfo):ReplacementInfo[]=>{   
    let replacements: ReplacementInfo[]=[];

    // // Apply comments conventions
    // let bcReplacements=bcConv.applyBlockCommentConvention(lineInfo);
    // let isComment=bcReplacements.IsComment;
    // if (isComment && bcReplacements.ReplacementInfo){
    //     replacements.push(bcReplacements.ReplacementInfo);
    // }

    // // No further processing required since it is a comment
    // if (isComment){
    //     return replacements;
    // }

    // // Apply operator conventions   
    // let oprReplacements=oprConv.applyOperatorConventions(lineInfo);
    // replacements=replacements.concat(oprReplacements);

    // Apply function name conventions
    let funcReplacements=funcConv.applyFunctionNaming(lineInfo);
    replacements.push(funcReplacements);
    
    return replacements;
};