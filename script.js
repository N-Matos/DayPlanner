// call all of the stored values on page load
$(".9").val(window.localStorage.getItem("9"));
$(".10").val(window.localStorage.getItem("10"));
$(".11").val(window.localStorage.getItem("11"));
$(".12").val(window.localStorage.getItem("12"));
$(".13").val(window.localStorage.getItem("13"));
$(".14").val(window.localStorage.getItem("14"));
$(".15").val(window.localStorage.getItem("15"));
$(".16").val(window.localStorage.getItem("16"));
$(".17").val(window.localStorage.getItem("17"));

// moment code to tell what time it is
const time = moment().format("HH")
// defining colors in an array
const color = ["#d3d3d3","#ff6961", "#77dd77"]

// set p tag to say today's date
$(".dateP").text(moment().format("dddd, MMMM Do"))

// loop to use function on each textarea
$("textarea").each(function(){
    // pull integers from strings
    const timeSlot = parseInt($(this).attr("id"))
    const timeInt = parseInt(time)

    // console.log("timeSlot: " + timeSlot)
    // console.log("timeInt: " + timeInt)
// if/else to compare integers and set colors based on results
    if (timeInt > timeSlot) {
       $(this).css("background-color", color[0])
    }else if (timeInt === timeSlot) {
        $(this).css("background-color", color[1])
    }else if (timeInt < timeSlot) {
        $(this).css("background-color", color[2])
    }
});

// on button click execute save function
$(".btn").on("click", function(button){
    // this tells us which hour we are in
    const hourToSave = button.currentTarget.classList[0];

    if (hourToSave === "save-9") {
      
        // grab text from textbox
        const text9 = $(".9").val();
        // create item in local storage cal
        window.localStorage.setItem("9", text9);

    }else if (hourToSave === "save-10") {
      
        // grab text from textbox
        const text10 = $(".10").val();
        // create item in local storage cal
        window.localStorage.setItem("10", text10)
    }else if (hourToSave === "save-11") {
      
        // grab text from textbox
        const text11 = $(".11").val();
        // create item in local storage cal
        window.localStorage.setItem("11", text11)
    }else if (hourToSave === "save-12") {
      
        // grab text from textbox
        const text12 = $(".12").val();
        // create item in local storage cal
        window.localStorage.setItem("12", text12)
    }else if (hourToSave === "save-1") {
      
        // grab text from textbox
        const text1 = $(".13").val();
        // create item in local storage cal
        window.localStorage.setItem("13", text1)
    }else if (hourToSave === "save-2") {
      
        // grab text from textbox
        const text2 = $(".14").val();
        // create item in local storage cal
        window.localStorage.setItem("14", text2)
    }else if (hourToSave === "save-3") {
      
        // grab text from textbox
        const text3 = $(".15").val();
        // create item in local storage cal
        window.localStorage.setItem("15", text3)
    }else if (hourToSave === "save-4") {
      
        // grab text from textbox
        const text4 = $(".16").val();
        // create item in local storage cal
        window.localStorage.setItem("16", text4)
    }else if (hourToSave === "save-5") {
      
        // grab text from textbox
        const text5 = $(".17").val();
        // create item in local storage cal
        window.localStorage.setItem("17", text5)
    }
});


