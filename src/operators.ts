enum ApplySpaces {
    None=0,
    Both,
    Left,
    Right
}

// Order is important
export const exportAllOperators=()=>{
    //A Map object iterates its elements in insertion order
    var m = new Map();
    m.set("===",{Space:ApplySpaces.Both});
    m.set("!==",{Space:ApplySpaces.Both});
    m.set("==", {Space:ApplySpaces.Both});
    m.set(">=", {Space:ApplySpaces.Both});
    m.set("<=", {Space:ApplySpaces.Both});
    m.set("++", {Space:ApplySpaces.Both});
    m.set("--", {Space:ApplySpaces.Both});
    m.set("!=", {Space:ApplySpaces.Both});
    m.set(",",  {Space:ApplySpaces.Right});
    m.set("=",  {Space:ApplySpaces.Both});
    m.set("+",  {Space:ApplySpaces.Both});
    m.set("<",  {Space:ApplySpaces.Both});
    m.set(">",  {Space:ApplySpaces.Both});
    return m;
};