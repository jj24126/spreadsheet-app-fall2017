/**function len takes a string and returns it's length
@param {string},(text) the string to find the length for.
@return {number} the length of the inputted string.
*/
let len=(text)=> text.length;

/** function concatenate takes two strings as inputs and returns a string where they are joined together.
@param {string}, (text1, text2) the two strings to be joined together.
@return {string} the string with the first 2 string joined together.
*/
let concatenate=(text1, text2)=> (text1)+(text2);

/** function left takes a string and a whole number and returns that number of characters from the beginning of the string.
@param {string} {number}, (text, numChars) the string and the whole number of characters to be returned from the beginning of the string.
@return {string}, the first whole number of characters returned from the string.
*/
let left=(text, numChars)=> text.substring(0,(numChars));

/** function right takes a string and a whole number and returns that number of character from the end of the string.
@param {string} {number},(text, numChars) the string and the whole number of characters to return form the end of the string.
@return {string}, the whole number of character from the end of the string
*/
let right=(text, numChars)=>text.substring(text.length-(numChars), text.length);

/** function find takes a string to be found within another string, string and a positive integer as inputs and returns the position
 of the beginning of the first occurrence of the string to be found within the second string, starting at the positive integer number character.
 @param {string} {number}, (findText, withinText, startNum) the text to be found in the main string, the main string, and the number character to start searching.
 @return {number}, the number at which the first occurence of the text to be found, is found at in the main string.
 */
 let find=(findText, withinText, startNum)=> (withinText.indexOf(findText, startNum-1))+1;

 /** function search takes a string to be found in another string and a positive integer as inputs and returns the position of the beginning of the first
  occurrence of string to be found within the second string, starting at the positive number character.  
  @param {string} {number}, (findText, withinText, startNum) the text to be found in the main string, the main string, and the number character to start searching.
  @return {number}, the number at which the first occurence of the text to be found, is found at in the main string.
  */
  let search=(findText, withinText, startNum)=>(withinText.indexOf(findText.toLowerCase(), startNum-1))+1

  /** function mid takes a string, a positive integer to start at, and a whole 
  number to return that many charcters as inputs and returns the substring of characters of text, starting at the integer, that's the whole number of characters long.
  @param {string} {number}, (text, startNum, numChars) the string, the position to start, and the number of characters to return.
  @return {string}, the string starting at startNum with numChars # of characters from the (text) string.
  */
  let mid=(text, startNum, numChars)=> text.substring(startNum-1, startNum+numChars-1)

  /** function replace takes a string, a positive integer, a positive integer, and a string as inputs and outputs the old string with the
   new string starting at the number character entered replacing the amount of charcters entered.
   @param {string} {number}, (oldText, newText, startNum, numChars) the starting text, the text that replaces part of the old text, the
    starting position, and the amount of characters to be replaced.
   @return {string} the resulting string from the inputs.
   */
   let replace=(oldText, newText, startNum, numChars)=> left(oldText,startNum-1)+(newText)+oldText.substring(oldText.indexOf(mid(oldText,startNum,numChars))+mid(oldText,startNum,numChars).length,oldText.length)


  /** function getBeforeText takes a string and part of that string as inputs and returns the string up to the inputted part.
  @param {string}, (s, sub) the string and the part of the string 
  @return {string}, the string up to the inputted part.
  */
  let getBeforeText = (s, sub) =>s.substring(0,s.indexOf(sub));

  /** function getAfterText takes a string and part of that string as inputs and returns the string after the inputted part.
  @param {string}, (s, sub) the string and the part of the string 
  @return {string}, the string after the inputted part.
  */
  let getAfterText = (s, sub) =>s.substring(s.indexOf(sub)+sub.length,s.length);

  /** function getBetweenTexts takes a string and two parts of that string as inputs and returns the string between the inputted parts.
  @param {string}, (s, afterSub, beforeSub) the string and the part of the string 
  @return {string}, the string between the inputted parts.
  */
  let getBetweenTexts = (s, afterSub, beforeSub) =>beforeSubstring(afterSubstring(s,afterSub),beforeSub);

  /** function substituteOnce takes a string, part of that string, and a new string as inputs and replaces the old part with the new string.
  @param {string}, (text, oldText, newText) the main string, part of the main string to be replaced, and the new string to replace the old part.
  @return {string}, the main string with the old part replaced with the new string.
  */
  let substituteOnce = (text, oldText, newText)=>getBeforeText(text,oldText)+(newText);

  /** function substitute takes a string, part of that string, a new string, and a number as inputs and replaces the old part with
   the new string at the number occurence inputted.
   @param {string}{number}, (text, oldText, newText, instanceNum) the main string, the old part of the main string, the new string, and the number occurence
   @return {string}, the main string with the old part replaced with the new string at the number occurence inputted.
  */
  let substitute=(text, oldText, newText, instanceNum)=>____;
  
  /** function getFunctionName takes a string input for an Excel spreadsheet function, and returns its name.
  @param {string}, the string containing the function
  @return {string}, the name of the funciton.
  */
  let getFunctionName=(text)=>getBeforeText(text,"(");

  /** function removeArgs takes a string containing arguments seperated by commas, and a number as inputs and returns
   the string with the inputted number of arguments removed.
   @param {string} {number}, (args, num) the string containing the arguments, and the number of arguments to remove from the string.
   @return {string}, the string of arguments with the inputted number of arguments removed.
  */
  let removeArgs=(args, num)=>{
  let nextList=args=>getAfterText(args,",")
  if(num===1) return getAfterText(args,",")
  else return nextList(removeArgs(args, num-1))
};

  /** function getArgNum takes a string of arguments seperated by commas, and returns the number argument inputted.
  @param {string}{number}, (args, num) the string of arguments and the number argument to get.
  @return {string}, the string with the argument.
  */
  let getArgNum=(args, num)=>getBeforeText(removeArgs(args, num-1),",")

  /** function getFinalArg takes a string and returns the last argument.
  @param {string}, (args) the string of arguments
  @return {string} the last argument.
  */
  let getFinalArg=(args)=>let getFinalArg=(args)=> right(args,args.indexOf(",")-1)

  /**function removeEnds takes a string as an input then removes its first and last character.
  @param {string}, the string to remove the first and last character.
  @return {string}, the string with the first, last character removed.
  */
  let removeEnds=(text)=>(text.substring(1,text.length)).substring(0,text.substring(1,text.length).length-1);










