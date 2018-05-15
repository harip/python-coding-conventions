export enum ApplySpaces {
    Left =1 << 0,
    Right = 1 << 1,
    Both = 1 << 2
}

// Order is important
export const exportAllOperators=():Map<string,any>=>{
    //A Map object iterates its elements in insertion order
    var m = new Map();
    m.set("===",{Space:ApplySpaces.Both});
    m.set("!==",{Space:ApplySpaces.Both});
    m.set("==", {Space:ApplySpaces.Both});
    m.set(">=", {Space:ApplySpaces.Both});
    m.set("<=", {Space:ApplySpaces.Both});
    m.set("++", {Space:ApplySpaces.Both});
    m.set("+=", {Space:ApplySpaces.Both});
    m.set("=+", {Space:ApplySpaces.Both});
    m.set("--", {Space:ApplySpaces.Both});
    m.set("!=", {Space:ApplySpaces.Both});
    m.set(",",  {Space:ApplySpaces.Right});
    m.set("=",  {Space:ApplySpaces.Both});
    m.set("+",  {Space:ApplySpaces.Both});
    m.set("<",  {Space:ApplySpaces.Both});
    m.set(">",  {Space:ApplySpaces.Both});
    return m;
};