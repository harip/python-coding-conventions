import {ReplacementInfo, LineInfo} from '../models/linedata';
const decamelize = require('decamelize');

export const applyFunctionNaming = (lineInfo:LineInfo):ReplacementInfo => {
    const funcSign="def";
    const funcLen=funcSign.length;
    if (!lineInfo.Text.trim().startsWith(funcSign)){
        return new ReplacementInfo();
    }

    // Get function name
    // Get data after def and before (
    let defLoc = lineInfo.Text.indexOf(funcSign);
    let funcOpening = lineInfo.Text.indexOf(":");   
    let funcName = lineInfo.Text.substring(defLoc+funcLen, funcOpening);
    let mod_funcName = decamelize(funcName);

    let fInfo = new ReplacementInfo(defLoc + funcLen +1, 
        defLoc + funcLen + funcName.length, 
        mod_funcName, 
        lineInfo.Text, 
        lineInfo.LineNum);

    return fInfo;

};