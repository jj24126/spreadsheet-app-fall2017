let selectedCell = null;

/**
 * Select the cell by e.g., displaying the appropriate style (red border?)
 * @param {!HTMLInputElement} cell the cell to select
 */

let selectCell = cell => {
  cell.classList.add("selected");
};

/**
 * Select the event's target cell by e.g., displaying the appropriate style (red border?) 
 * when the left mouse button is pressed
 * @param {!Event} the event with the target cell to potentially select
 */

let selectWhenLeftClicked = event => {
  if(mouseButtonPressed(event, 1)) {
    selectCell(event.target);
    event.preventDefault();
  }
};

/**
 * Make the custom context menu appear at the position given
 * @param {number} x The x-coordinate of the top left corner of the context menu
 * @param {number} y The y-coordinate of the top left corner of the context menu
 */

let showContextMenu = (x, y) => {
  document.getElementById("context-menu").classList.add("context-menu-display");
  document.getElementById("context-menu").classList.remove("hidden");

  if(typeof x === "number" && typeof y === "number") {
    document.getElementById("context-menu").style.left = x + "px";
    document.getElementById("context-menu").style.top = y + "px";
  }
};

/**
 * Hides the custom context menu
 */

let hideContextMenu = () => {
  document.getElementById("context-menu").classList.remove("context-menu-display");
  document.getElementById("context-menu").classList.add("hidden");
};

/**
 * Perform the supplied action on all input cells
 * @param {Function} action the function to call on each input cell
 */

let actOnAllCells = action => {
  Array.prototype.forEach.call(document.querySelectorAll(".input-cell"), action);
};

/**
 * Deselects all input cells by e.g., removing styling such as the red border
 */

let deselectAllCells = () => {
  actOnAllCells(cell => {
    cell.classList.remove("selected");
  });
};

/**
 * Blurs all input cells
 */

let blurAllCells = () => {
  actOnAllCells(cell => {
    cell.blur();
  });
};

/**
 * Cross-browser compatible way of detecting the index of the mouse button that was pressed
 * See browser support: http://eloquentjavascript.net/14_event.html#p_fndkFYbayW
 *                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
 *                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which
 * @param {!Event} event
 * @param {number} index
 * @return {boolean} True exactly when index is the index of the mouse button pressed
 */

let mouseButtonPressed = (event, index) => {
  // See browser support: http://eloquentjavascript.net/14_event.html#p_fndkFYbayW
  //                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
  //                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which

  var buttonClickedIndex = event.buttons !== null ? event.buttons : event.which;

  return buttonClickedIndex === index;
};

/** 
 * @todo FOR ASSIGNMENT 2, ADD YOUR OWN FUNCTION DEFINITIONS AS DIRECTED IN THE ASSIGNMENT
 * @todo THEN USING THESE FUNCTIONS, REPLACE THE 0 IN EACH FUNCTION DEFINITION BELOW WITH THE APPROPRIATE OUTPUT
 * @todo BE SURE TO DOCUMENT EACH FUNCTION IN JSDOC FORMAT (USE BELOW AS REFERENCE AND SEE: http://usejsdoc.org/)
 */
/**
Function convertToLarger takes two inputs, 
and returns the total number of whole units in the number with that conversion factor.
@param {number}(x,y) number and positive integer conversion factor
@return {number} total number of whole units with that conversion factor
*/
let convertToLarger =(x,y)=>Math.trunc(x/y)

/**
Function msToTotalSeconds converts the given number of milliseconds to seconds.
@param {number} x, the amount of milliseconds to convert to seconds
@return {number} the total number of seconds from milliseconds
*/
let msToTotalSeconds=(x)=> convertToLarger(x,1000)

/**
Function msToTotalMinutes converts the given number of milliseconds to minutes.
@param {number} x, the number of milliseconds to convert to minutes.
@return {number} the number of minutes from the milliseconds.
*/
let msToTotalMinutes=(x)=> convertToLarger(msToTotalSeconds(x),60)

/**
Function msToTotalHours converts the given number of milliseconds to the total number of hours.
@param {number} x, the number of milliseconds to convert to hours.
@return {number} the number of hours from the given milliseconds.
*/
let msToTotalHours = (x)=> convertToLarger(msToTotalMinutes(x),60)

/**
Function remainingAfterConvert takes two inputs and returns the 
total number of whole remaining smaller units after the number with that conversion factor has been removed.
@param {number} (x,y) the two inputs used to find the whole remaining smaller units.
@return {number} number of whole remaining smaller units.
*/
let remainingAfterConvert=(x,y)=>(x%y)

/**
Function getSecondFromMs takes the given number of milliseconds from midnight and 
returns the second (0 to 60) for the displayed time.
@param {number} x, the number of milliseconds.
@return {number} returns the second from milliseconds(0 to 60).
*/
let getSecondFromMs=(x)=> remainingAfterConvert(msToTotalSeconds(x),60)

/**
Function getMinuteFromMs takes the given number of milliseconds 
from midnight and returns the minute (0 to 60) for the displayed time.
@param {number} x, the number of milliseconds.
@return {number} the minute from milliseconds (0 to 60).
*/
let getMinuteFromMs=(x)=> remainingAfterConvert(msToTotalMinutes(x),60)

/**
Function getHourFromMs takes the given number of milliseconds
from midnight and returns the hour (0 to 24) for the displayed time.
@param {number} x, the number of milliseconds.
@return {number} the hour from the milliseconds (0 to 24).
*/
let getHourFromMs=(x)=>remainingAfterConvert(msToTotalHours(x),24)

/**Part B*/

/**
Function convertToSmaller takes two inputs,and returns the total number
of fractional units in the number with that conversion factor.
@param {number} (x,y) the two numbers used to return number of fractional units.
@return {number} number of fractional units in the number with conversion factor.
*/
let convertToSmaller=(x,y)=>x*y

/**
Function daysToTotalHours converts the given number of days to an equivalent number of hours.
@param {number} x, the days to convert to hours.
@return {number} the number of hours from given number of days.
*/
let daysToTotalHours=(x)=>convertToSmaller(x,24)

/**
Function daysToTotalMinutes converts the given number of days to an equivalent number of minutes.
@param {number} x, the number of days to convert to minutes.
@return {number} the total minutes from given number of days.
*/
let daysToTotalMinutes=(x)=> convertToSmaller(daysToTotalHours(x),60)

/** 
Function daysToTotalSeconds converts the given number of days to an equivalent number of seconds.
@param {number} x, the number of days to convert to seconds.
@return {number} the number of seconds from days.
*/
let daysToTotalSeconds=(x)=> convertToSmaller(daysToTotalMinutes(x),60)

/**
Function remainingAfterConvert takes two inputs, and returns the 
total number of whole remaining smaller units after the number with that conversion factor has been removed.
@param {number} (x,y), the two inputs used to return number of whole reminaing smaller units.
@return {number} total number of whole remaining smaller units after number with conversion factor has been removed.
*/
let remainingAfterConvert=(x,y)=>Math.trunc(x%y)

/** 
Function getHourFromDays takes the given number of days
in decimal from midnight and returns the hour (0 to 24) for the displayed time.
@param {decimal} x, the given number days.
@return {number} the hour from days (0 to 24).
*/
let getHourFromDays=(x)=> remainingAfterConvert(daysToTotalHours(x),24)

/**
Function getMinuteFromDays takes the given number of days in decimal form
from midnight and returns the minute (0 to 60) for the displayed time.
@param {decimal} x, the given number of days.
@return {number} the minute form days (0 to 60).
*/
let getMinuteFromDays=(x)=> remainingAfterConvert(daysToTotalMinutes(x),60)

/**
Function getSecondFromDays takes the given number of days
in decimal form from midnight and returns the second (0 to 60) for the displayed time.
@param {decimal} x, the given number of days.
@return {number} the second from days (0 to 60).
*/
let getSecondFromDays=(x)=> remainingAfterConvert(daysToTotalSeconds(x),60)



/**
 * Given a number of milliseconds from midnight, returns the second (0 to 60) for the displayed time
 * @param {number} num the number of milliseconds to convert to seconds
 * @return {number} second for the displayed time (0 to 60)
 */

//let getSecondFromMs   = num => 0;

//let getMinuteFromMs   = num => 0;
//let getHourFromMs     = num => 0;

//let getSecondFromDays = num => 0;
//let getMinuteFromDays = num => 0;
//let getHourFromDays   = num => 0;

/* END REPLACEMENT FOR ASSIGNMENT 2 */

/**
 * Given a number of milliseconds after midnight, returns the hour, minute, and second as 
 * a text string in the form h:m:s where h is the hour from 0 to 24, m is the minute from 0 to 60
 * and s is the second also from 0 to 60
 * @param {number} num the number of milliseconds to convert
 * @return {string} h:m:s time
 */

let getTimeStrFromMs   = num => getHourFromMs(num) + ":" + getMinuteFromMs(num) + ":" + getSecondFromMs(num);

/**
 * Given a fractional number of days after midnight, returns the hour, minute, and second as 
 * a text string in the form h:m:s where h is the hour from 0 to 24, m is the minute from 0 to 60
 * and s is the second also from 0 to 60
 * @param {number} num the number of days, expressed as a decimal, from midnight
 * @return {string} h:m:s time
 */

let getTimeStrFromDays = num => getHourFromDays(num) + ":" + getMinuteFromDays(num) + ":" + getSecondFromDays(num);

/**
 * Given a format type (currently currency, time-ms, time-days, date, and other) and a numerical value for
 * the first four formats or currently any value for other, returns the value in the given format
 * @param {string} format the format of the value to return (currently currency, time-ms, time-days, date, and other)
 * @return {string} h:m:s time
 */

let formatCellValue = (format, value) => {
  if(format === "currency") {
    return "$" + value;
  } 
  else if(format === "time-ms") {
    return getTimeStrFromMs(value || 0);
  }
  else if(format === "time-days") {
    return getTimeStrFromDays(value || 0);
  }
  else if(format === "date") {
    return new Date(parseInt(value || 0));
  }
  else {
    return value;
  }
};

/**
 * Given a spreadsheet cell, returns its data-value attribute formatted according to its data-format attribute;
 * data values are determined by entered input while format is currently determined only by selected format from context menu
 * @param {!HTMLInputElement} cell
 * @return cell's data value formatted according to its data-format attribute
 */

let evalCell = cell => {
  let rawValue = cell.getAttribute("data-value"); // unformatted user input

  return formatCellValue(cell.getAttribute("data-format"), rawValue);
};

/**
 * Set data-value attributes of all input cells to empty string;
 * Add event listeners for all input cells
 */

Array.prototype.forEach.call(document.querySelectorAll(".input-cell"), ele => { 
  ele.setAttribute("data-value", "");
  
  /**
   * Add an event listener to select cell when it's being dragged over 
   */

  ele.addEventListener("mouseover", selectWhenLeftClicked);

  /**
   * Add an event listener to potentially change cell's value to possible new entered value
   * after it's been deselected 
   */

  ele.addEventListener("blur", event => {
    displayValue = evalCell(event.target);

    if(displayValue != event.target.value) {
      // cell value changed
      event.target.setAttribute("data-value", event.target.value);
    }
  });

  /**
   * Add an event listener to deselect all selected cells and hide the context menu
   * if showing when a cell is clicked (selected)
   */

  ele.addEventListener("click", event => {
    deselectAllCells();
    hideContextMenu();
  });

  /**
   * Add an event listener to hide the context menu
   * if showing when a cell is in focus
   */

  ele.addEventListener("focus", event => {
    hideContextMenu();
  });

  /**
   * When the context menu would ordinarily appear due to e.g., right mouse click, surpress the normal
   * context menu, and display and the custom one and set its top left corner to be the clicked location
   */

  ele.addEventListener("contextmenu", event => {
    event.preventDefault();
    selectedCell = event.target;
    showContextMenu(event.pageX, event.pageY);
  });

  /**
   * When the left button is being dragged to select other cells,
   * blur current cell where text was being entered if any (removes blinking cursor)
   */

  ele.addEventListener("mousemove", event => {
    if(mouseButtonPressed(event, 1)) {
      if(document.activeElement !== event.target) {
        setTimeout(blurAllCells, 100);
      }
      selectCell(event.target);
    }
  });
});

/**
* When the user clicks on any format option in the context menu, hide the menu
* and set the selected cell's data format to be the clicked option;
* then update that cell's display value so that it appears in the new format
*/ 

Array.prototype.forEach.call(document.querySelectorAll(".format"), ele => {
  ele.addEventListener("click", event => {
    hideContextMenu();

    if(selectedCell) {
      selectedCell.setAttribute("data-format", event.target.getAttribute("data-type"));
    }

    selectedCell.value = evalCell(selectedCell);
  });
});
