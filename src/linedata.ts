import { TextEditor } from "vscode";

export class LineInfo {
    constructor(public Text: string,public LineNum:number, public Editor:TextEditor) { 
    }
}

export class ReplacementInfo{
    constructor(public Start:number, public End:number, public Operator:string,public Text:string) { 
    }
}