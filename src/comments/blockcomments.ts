import {ReplacementInfo, LineInfo} from '../linedata';

const applyBlockCommentConvention=(lineInfo:LineInfo)=>{
    if (!line.startsWith("#")){
        return {IsComment:false,ReplacementInfo:null};
    }

    if (line.substr(0,2)==="# "){
        return {IsComment:true,ReplacementInfo:null};
    }

    const rInfo=new ReplacementInfo(0,opPos.End,op,lineInfo.Text,lineInfo.LineNum));
}