import {ReplacementInfo, LineInfo} from '../models/linedata';

export const applyBlockCommentConvention=(lineInfo:LineInfo):any=>{
    if (!lineInfo.Text.startsWith("#")){
        return {IsComment:false,ReplacementInfo:null};
    }

    if (lineInfo.Text.substr(0,2)==="# "){
        return {IsComment:true,ReplacementInfo:null};
    }

    const rInfo=new ReplacementInfo(1,1,"# ",lineInfo.Text,lineInfo.LineNum);
    return {IsComment:true,ReplacementInfo:rInfo};
};