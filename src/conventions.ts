'use strict';

import { TextEditor } from "vscode";

export function operatorWhiteSpace(editor:TextEditor, line:string){
    editor.edit(e=>{
        // let eqOperatorIndex=line.indexOf("=");      
        // e.insert(eqOperatorIndex)
    });
}