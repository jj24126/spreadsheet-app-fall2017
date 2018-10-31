describe("String functions", function() {
  it("returns the length of a string correctly", function() {
    expect(len("")).toBe(0);
    expect(len("abc")).toBe(3);
    expect(len("Foo 123!")).toBe(8);
  });
  it("title for next test", function() {
    expect(2+2).toBe(4);
  });
  it("title for next next test", function() {
    expect(2+2).not.toBe(3);
  });
  it("takes two strings and joins them together", function() {
    expect(concatenate("co","der")).toBe("coder");
  });
  it("returns that many numbers from the beginning of the string", function(){
    expect(left("coder", 4)).toBe("code");
  });
  it("returns that many numbers from the end of the string", function() {
    expect(right("bobofrog",5)).toBe("ofrog");
  });
  it("returns the first occurence of the string to be found in the main string", function(){
    expect(find("o","bobofrog",7)).toBe(7);
  });
  it("returns the first occurence of the string to be found in the main string", function(){
    expect(search("B","bobofrog",2)).toBe(3);
  });
  it("returns the characters from the text starting at the number inputted up to how many characters user inputted", function(){
    expect(mid("bobofrog",4,3)).toBe("ofr");
  });
  it("replaces part of the old text with the new text starting at the number inputted", function(){
    expect(replace("bobofrogs", "s", 5, 3)).toBe("bobosgs");
  });
  it("gets the part of the text up to the inputted part", function(){
    expect(getBeforeText("bobofrog","frog")).toBe("bobo");
  });
  it("gets the part of the text after the inputted part", function(){
    expect(getAfterText("bobofrog","bobo")).toBe("frog");
  });
  it("gets the part of the string in between the inputted parts", function(){
    expect(getBetweenText("bobofrog","b","g")).toBe("obofro");
  });
  it("returns the old string with the new string", function(){
    expect(substituteOnce("bobofrogbobofrog","frog","toad")).toBe("bobotoad");
  });
  it("returns the name of the function inputted as a string", function(){
    expect(getFunctionName("left(coder, 4)")).toBe("left");
  });
  it("returns the arguments string with the inputted number of arguments removed", function(){
    expect(removeArgs("\"foo\",12345,\"bar\",\"molloy\",\"A2\"",1)).toBe("12345,"bar","molloy","A2"");
  });
  it("returns the number argument inputted", function(){
    expect(getArgNum("\"foo\",12345,\"bar\",\"molloy\",\"A2\"",2)).toBe("12345");
  });
  it("returns the last argument", function(){
    expect(getFinalArg("\"foo\",12345,\"bar\",\"molloy\",\"A2\"")).toBe(""A2"");
  });
  it("returns string with first/last character removed", function(){
    expect(removeEnds("bobo")).toBe("ob");
  });
});
