// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import {LineInfo} from '../linedata';
import * as conv from '../conventions';

// Defines a Mocha test suite to group tests of similar kind together
suite("Coding convetions Tests",()=>{

    test("Test Spaces around equals to operator",()=>{
        let lineText="x=y";
        let lineInfo=new LineInfo(lineText,0);
    
        let r=conv.getConventions(lineInfo);
        assert.equal(r[0].Operator," = ",`The resulting text should be x = y, but was returned as ${r[0].Operator}`);
    });

});