'use strict';

import * as vscode from "vscode";
import { TextEditor } from "vscode";

const operators=["="];
const getAllOccurences=(operator:string,line:string)=>{
    let operatorLocations=[];
    let idx=line.indexOf(operator);
    while (idx!==-1){
        operatorLocations.push(idx);
    }
    return idx;
};

const fillWhiteSpace=( editor:TextEditor, line_num:number,opIndex:number,operator:string )=>{
    let op=operator;

    // Add empty space before the operator if it is missing
    let range=new vscode.Range(0,opIndex,0,opIndex+1);
    let bef=editor.document.getText(range);   
    op=bef !== " " ? ` ${op}` : op;

    // Add empty space after the operator if it is missing        
    range=new vscode.Range(0,opIndex+1,0,opIndex+2);
    let aft=editor.document.getText(range);
    op= aft !== " " ? `${op} ` : op;

    if (op!==operator){
        return op;        
    }
    return null;
};

export let operatorWhiteSpace=(editor:TextEditor, line:string)=>{

    let doc=editor.document;


    editor.edit(e=>{
        
        // Iterate each operator
        operators.forEach((op)=>{
            //Get all indexes of the operator in that line
            let allOccurences=getAllOccurences(op,line);

            allOccurences.array.forEach(element => {
                
            });
        });
    });
}
