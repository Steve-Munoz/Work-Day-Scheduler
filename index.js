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

//var words;
//var hourInfo;

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
    // this below took me a while to figure out. I'ts still not doing what I want it to do
    //It's assgining each of my timeblocks an ID with the number of the index it's currently
    //.. on in my for loop
    addTextArea.attr("data-hour", timeBlocks.indexOf(timeBlocks[i]));
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

  // call Functions
  blockColor();
  renderText();
});

// I will write my functions below

// This function below will determine what color my block will be
// Each block will be color coded to indicate if the block that I am currently in
// is in the past present or future
function blockColor() {
  //var timeTest = addTextArea.val();
  var currentTime = moment().format("h");
  console.log(currentTime);
  $(".textarea").each(function () {
    // CODE ABOVE- "this" will be targeting the element textarea which there is
    //is a class called textarea and an ID for each textarea in each timeblock
    //console.log(this);
    //With code "this" below I am targeting the textarea element to get its ID
    //and then creating an if statement to add a class to a specific ID
    // If the current time is less than then the time

    var blockTime = parseInt($(this).attr("id"));
    console.log(blockTime);

    if (currentTime > blockTime) {
      $(this).addClass("past");
    } else if (currentTime < blockTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

//  Save to local storage once a button is clicked
//  I do not know why this below is not working, I feel like the code is right
//

$(".saveBtn").on("click", function () {
  var textarea = $(".textarea");
  var words = $(this).siblings(textarea).val();
  console.log(words);
  var hourInfo = $(this).siblings(".hour").text();
  console.log(hourInfo);
  localStorage.setItem(hourInfo, JSON.stringify(words));

  blockColor();
  renderText();
});

// create a function to make sure your text in time block is saved and displayed on the webpage

function renderText() {
  var saveWords9 = JSON.parse(localStorage.getItem("9:00AM"));

  $("#0").val(saveWords9);

  var saveWords10 = JSON.parse(localStorage.getItem("10:00AM"));

  $("#1").val(saveWords10);

  var saveWords11 = JSON.parse(localStorage.getItem("11:00AM"));

  $("#2").val(saveWords11);

  var saveWords12 = JSON.parse(localStorage.getItem("12:00PM"));

  $("#3").val(saveWords12);

  var saveWords1 = JSON.parse(localStorage.getItem("1:00PM"));

  $("#4").val(saveWords1);

  var saveWords2 = JSON.parse(localStorage.getItem("2:00PM"));

  $("#5").val(saveWords2);

  $("#6").val(saveWords3);

  var saveWords4 = JSON.parse(localStorage.getItem("4:00PM"));

  $("#7").val(saveWords4);

  var saveWords5 = JSON.parse(localStorage.getItem("5:00PM"));

  $("#8").val(saveWords5);
}
