// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

//  I will first make sure javascript doesn't run until the HTML is finished loading

$(document).ready(function () {
  // using moment.js
  //console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  // addtext();

  // const m = moment();

  // creating my array to add into html
  var timeBlocks = [
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",
  ];

  // created a for loop to iterate through my timeblock array and add all my timeblocks to the webpage
  for (var i = 0; i < timeBlocks.length; i++) {
    // Declare variables for the elements you want to add in your container html
    var addRow = $("<div>");
    var addColumn = $("<div>");
    var addTextArea = $("<textarea>");
    var addSaveButton = $("<button>");
    var addSaveHover = $("<i>");

    // add classes to each element on html page
    addRow.addClass("row");
    addColumn.addClass("time-block hour col-2 description");
    addTextArea.addClass("textarea col-8");
    // this below took me a while to figure out. I wanted to parseInt but didn't
    addTextArea.attr("id", timeBlocks.indexOf(timeBlocks[i]));
    addSaveButton.addClass("saveBtn col-2");
    addSaveHover.addClass("far fa-save");

    // add text to your column div
    addColumn.text(timeBlocks[i]);

    // append your new Elements with their attached classes to html page

    $("#blocks").append(addRow);
    addRow.append(addColumn);
    addRow.append(addTextArea);
    addRow.append(addSaveButton);
    addSaveButton.append(addSaveHover);
  }
});

// using moment.js display current time
//console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

// create an array to add into html

// create a for loop to iterate through my timeblock array and add all my timeblocks to the webpage

// Declare variables for the elements you want to add in your container html

// add classes to each element on html page

// append your new Elements with their attached classes to html page

// I will write my functions below

//  Save to local storage once a button is clicked

// create a function to make sure your text in time block is saved and displayed on the webpage.
