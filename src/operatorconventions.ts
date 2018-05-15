// 'use strict';

// import * as vscode from "vscode";
// import {getAllOccurences} from './postion';
// import {LineInfo,ReplacementInfo} from './linedata';
// import * as opr from './operators';

// const fillWhiteSpace=( lineInfo:LineInfo,opIndex:number,operator:string )=>{
//     let opLen=operator.length;
//     let preCheck={
//         start:opIndex-1,
//         end:opIndex+1
//     };
//     let postCheck={
//         start:opIndex+1,
//         end:opIndex+opLen+2
//     };

//     // Add empty space before the operator if it is missing
//     let range=new vscode.Range(lineInfo.LineNum,preCheck.start,lineInfo.LineNum,preCheck.end);
//     let bef=lineInfo.Editor.document.getText(range);
    
//     // Make sure the bef+operator is not a double operator
//     let isDoubleOperator=opr.doubleOperators.findIndex((elem)=>{
//         return elem===`${bef}${operator}`;
//     });
//     let op= (bef !== " " && isDoubleOperator===-1 )  ? ` ${operator}` : operator;

//     // Add empty space after the operator if it is missing        
//     range=new vscode.Range(lineInfo.LineNum,postCheck.start,lineInfo.LineNum,postCheck.end);
//     let aft=lineInfo.Editor.document.getText(range);
//     isDoubleOperator=opr.doubleOperators.findIndex((elem)=>{
//         return elem===`${operator}${aft}`;
//     });

//     op= (aft !== " " && isDoubleOperator===-1) ? `${op} ` : op;

//     return op!==operator ? op : null;
// };

// export let operatorWhiteSpace=(lineInfo:LineInfo,operators:string[])=>{
//     let replacements: ReplacementInfo[]=[];
//     // First get the line data
//     operators.forEach((op)=>{
//         //Get all indexes of the operator in that line
//         let allOccurences=getAllOccurences(op,lineInfo.Text);
//         allOccurences.forEach(idx => {            
//             let replacement=fillWhiteSpace(lineInfo,idx,op);
//             if (replacement !==null){
//                 replacements.push(new ReplacementInfo(idx,idx+op.length,replacement,lineInfo.LineNum));
//             }
//         });
//     });
//     return replacements;
// };
