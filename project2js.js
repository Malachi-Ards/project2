        // Function to call the API search
        function apiSearch() {
            $.ajax({
                type: 'GET',
                dataType: "jsonp",
                url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAAtOJoMWp5-oA3FgJa3Skv9IE8dBdNAS4&cx=338497c2632274066&q=" + $("#query").val(),
                success: function(result) {
                    console.log('data: ', result);
                    var searchOutput = '';
                    var len = result.items.length;
                    for (var i = 0; i < len; i++) {
                        searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
                    }


                    $("#searchResults").html(searchOutput);
                }
            });
        }


                // Function to call the Feeling Lucky
                function apiSearchLucky(query) {
                    $.ajax({
                        type: 'GET',
                        dataType: "jsonp",
                        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAAtOJoMWp5-oA3FgJa3Skv9IE8dBdNAS4&cx=338497c2632274066&q=" + query,
                        success: function(result) {
                            console.log('data: ', result);
                            if (result.items && result.items.length > 0) {
                                var firstResult = result.items[0];
                                window.open(firstResult.link, "_blank"); // Open the first result in a new tab
                            } else {
                                alert("No results found for the given query");
                            }
                        },
                        error: function() {
                            alert("Error occurred while fetching results");
                        }
                    });
                }


        // Adding event listener to the search button
        $(document).ready(function() {
            $("#searchButton").click(function(event) {
                event.preventDefault(); // Prevent form submission
                apiSearch(); // Call the API search function
            });
        });


         // Adding event listener to the search button
    $(document).ready(function() {
        $("#searchButton").click(function(event) {
            event.preventDefault(); // Prevent form submission
            apiSearch(); // Call the API search function
        });


        // Function to change background color
        $("#changeColorButton").click(function() {
            // Change background color to a random color
            $("body").css("background-color", getRandomColor());
        });


        // Function to generate a random color
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        // Toggle fade effect for elements (1), (3), and (4)
        $("#toggleFadeButton").click(function() {
            $("#searchForm, #searchResults").fadeToggle(); // Toggle fade for search form and results
        });


        // Attach event listener to the "I'm feeling lucky" button
        $("#luckyButton").click(function() {
            var query = $("#query").val();
            apiSearchLucky(query);
        });
    });