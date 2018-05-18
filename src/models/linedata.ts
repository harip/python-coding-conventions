export class LineInfo {
    constructor(public Text: string,public LineNum:number) { 
    }
}

export class ReplacementInfo{
    constructor(public Start:number, public End:number, public Operator:string,public Text:string,public lineNum:number=0) { 
    }
}