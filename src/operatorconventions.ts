'use strict';

import * as vscode from "vscode";
import {getAllOccurences} from './postion'
import {LineInfo,ReplacementInfo} from './linedata'


const operators=["="];

const fillWhiteSpace=( lineInfo:LineInfo,opIndex:number,operator:string )=>{
    // Add empty space before the operator if it is missing
    let range=new vscode.Range(lineInfo.LineNum,opIndex,lineInfo.LineNum,opIndex+1);
    let bef=lineInfo.Editor.document.getText(range);   
    let op=bef !== " " ? ` ${operator}` : operator;

    // Add empty space after the operator if it is missing        
    range=new vscode.Range(lineInfo.LineNum,opIndex+1,lineInfo.LineNum,opIndex+2);
    let aft=lineInfo.Editor.document.getText(range);
    op= aft !== " " ? `${op} ` : op;

    return op!==operator ? op : null;
};

export let operatorWhiteSpace=(lineInfo:LineInfo)=>{
    let replacements: ReplacementInfo[]=[];
    // First get the line data
    operators.forEach((op)=>{
        //Get all indexes of the operator in that line
        let allOccurences=getAllOccurences(op,lineInfo.Text);
        allOccurences.forEach(idx => {            
            let replacement=fillWhiteSpace(lineInfo,idx,op);
            if (replacement !==null){
                replacements.push(new ReplacementInfo(idx,replacement,lineInfo.LineNum));
            }
        });
    });
    return replacements;

    // editor.edit(e=>{
        
    //     // Iterate each operator
    //     operators.forEach((op)=>{
    //         //Get all indexes of the operator in that line
    //         let allOccurences=getAllOccurences(op,line);

    //         allOccurences.forEach(element => {
                
    //         });
    //     });
    // });
}
