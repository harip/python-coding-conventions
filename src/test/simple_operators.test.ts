// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import {LineInfo} from '../models/linedata';
import * as conv from '../conventions';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension tests",()=>{
    test("Test Spaces around equals to operator",()=>{
        let lineText="x=y";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator," = ",`The resulting text should be x = y, but was returned as ${r[0].Operator}`);
    });

    test("Test Spaces around greater than to operator",()=>{
        let lineText="x>y";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator," > ",`The resulting text should be  > , but was returned as ${r[0].Operator}`);
    });

    test("Test Spaces around greater than and less than operator",()=>{
        let lineText="x>y<z";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator," < ",`The resulting text should be  > , but was returned as ${r[0].Operator}`);
        assert.equal(r[1].Operator," > ",`The resulting text should be  < , but was returned as ${r[1].Operator}`);       
    });

    test("Test Spaces around triple equals to operator",()=>{
        let lineText="if (x===y):";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator," === ",`The resulting text should be === , but was returned as ${r[0].Operator}`);
    });

    test("Test Spaces around comma",()=>{
        let lineText="x,y";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator,", ",`The resulting text should be , , but was returned as ${r[0].Operator}`);
    });
});