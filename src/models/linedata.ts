export class LineInfo {
    constructor(public Text: string,public LineNum:number) { 
    }
}

export class ReplacementInfo{
    constructor(public Start:number=0, public End:number=0, public Operator:string="",public Text:string="",public lineNum:number=0) { 
    }
}