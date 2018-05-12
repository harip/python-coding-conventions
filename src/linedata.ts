import { TextEditor } from "vscode";

export class LineInfo {
    Text: string = "";
    LineNum: number = 0;
    Editor!: TextEditor;

    constructor(public text: string,public lineNum:number, public editor:TextEditor) { 
        this.Text=text;
        this.LineNum=lineNum;
        this.Editor=editor;
    }
}

export class ReplacementInfo{
    Postion:number=0;
    Replacement:string="";
    LineNum: number = 0;

    constructor(public position:number, public replacement:string,public lineNum:number) { 
        this.Postion=position;
        this.Replacement=replacement;
        this.LineNum=lineNum;
    }
}