import { TextEditor } from "vscode";

export class LineInfo {
    constructor(public Text: string,public LineNum:number, public Editor:TextEditor) { 
    }
}

export class ReplacementInfo{
    constructor(public Postion:number, public Replacement:string,public LineNum:number) { 
    }
}