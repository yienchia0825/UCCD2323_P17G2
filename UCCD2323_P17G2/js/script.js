$(document).ready(function () {

    $("#loadQuote").click(function () {

        $("#quoteText").text("Loading...");

        $.ajax({

            url: "https://dummyjson.com/quotes/random",

            method: "GET",

            success: function (data) {

                $("#quoteText").html(
                    '"' + data.quote + 
                    '"<br><small>— ' + 
                    data.author + 
                    '</small>'
                );

            },

            error: function () {

                $("#quoteText").text(
                    "Unable to load quote. Please try again."
                );

            }

        });

    });

});