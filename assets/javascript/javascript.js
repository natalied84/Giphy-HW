var reactions = ["confused", "shocked", "neat", "shrug", "table flip", "rage quit", "excited", "sad", "crying", "facepalm"];
var reactionTracker = [];
var reactionClickArray = [];

function doABarrelRoll() {
    var a = "-webkit-",
        b = 'transform:rotate(1turn);',
        c = 'transition:4s;';
    document.head.innerHTML += '<style>body{' + a + b + a + c + b + c;
};

function renderButtons() {

    for (var i = 0; i < reactions.length; i++) {

        $("header").append("<button class='btn btn-info react-btn' id='" + reactions[i] + "'>" + reactions[i] + "</button>");
        reactionTracker.push(reactions[i]);

    };
    reactions = [];
}

$("header").on("click", ".react-btn", function () {

    var offset = 0;
    var reactionCounter = -1;
    reactionClickArray.push($(this).attr("id"));

    for (var i = 0; i < reactionClickArray.length; i++) {
        
        if ($(this).attr("id") === reactionClickArray[i]) {
            reactionCounter++;
        };
    };

    offset += (reactionCounter * 10);
    var searchTerm = $(this).attr("id");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=UU8fjeOg71QTR3pqQBPam5po75K6tgIJ&q=" + searchTerm + "&limit=10&offset=" + offset + "&rating=PG&lang=en"
    
    if ($(this).attr("id") === "do a barrel roll") {
        doABarrelRoll();
        setTimeout(function () {
            $("style").remove();
        }, 4100);
    };

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        var result = response.data;

        for (var i = 0; i < result.length; i++) {

            var gifDiv = $("<div class='gifs'>");
            var stillGifUrl = result[i].images.fixed_height_still.url;
            var animateGifUrl = result[i].images.fixed_height.url;
            var gifIndex = result[i].title.indexOf("GIF")
            var ratingP = $("<p>").text("Rated: " + result[i].rating);
            var titleP =  $("<p>").text("Title: " + result[i].title.substring(0, gifIndex - 1));
            var gif = $("<img class='gifImg' src='" + stillGifUrl + "'>");
            gif.attr("data-state", "still");
            gif.attr("data-animate", animateGifUrl);
            gif.attr("data-still", stillGifUrl);
            $(gifDiv).append(titleP, gif, ratingP);
            $("#gifs-holder").prepend(gifDiv);
        };
    });
});

renderButtons();

$(".container-fluid").on("click", ".gifImg", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    };
});

$(".btn-sm").on("click", function (event) {
    event.preventDefault();

    var addReaction = $(".reaction-search").val().trim().toLowerCase();

    if (reactionTracker.indexOf(addReaction) === -1) {
        reactions.push(addReaction);
        renderButtons();
    };
    $(".reaction-search").val("");
})