// =========================================
// CINEBOOK - BOOKING PAGE
// =========================================

const bookingMoviePoster =
    document.getElementById("bookingMoviePoster");

const bookingMovieTitle =
    document.getElementById("bookingMovieTitle");

const bookingMovieLanguage =
    document.getElementById("bookingMovieLanguage");

const bookingMovieGenre =
    document.getElementById("bookingMovieGenre");

const bookingMovieRating =
    document.getElementById("bookingMovieRating");


// =========================================
// LOAD SELECTED MOVIE
// =========================================

const selectedMovie =
    localStorage.getItem("selectedMovie");


if (selectedMovie) {

    const movie =
        JSON.parse(selectedMovie);

    if (bookingMoviePoster) {
        bookingMoviePoster.src =
            movie.poster;

        bookingMoviePoster.alt =
            movie.title;
    }

    if (bookingMovieTitle) {
        bookingMovieTitle.textContent =
            movie.title;
    }

    if (bookingMovieLanguage) {
        bookingMovieLanguage.textContent =
            movie.language;
    }

    if (bookingMovieGenre) {
        bookingMovieGenre.textContent =
            movie.genre;
    }

    if (bookingMovieRating) {
        bookingMovieRating.textContent =
            `⭐ ${movie.rating}`;
    }

}


// =========================================
// DATE SELECTION
// =========================================

const dateCards =
    document.querySelectorAll(".date-card");


dateCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            dateCards.forEach(
                function (item) {
                    item.classList.remove("active");
                }
            );

            card.classList.add("active");

        }
    );

});


// =========================================
// THEATRE SELECTION
// =========================================

const theatreCards =
    document.querySelectorAll(".theatre-card");


theatreCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            theatreCards.forEach(
                function (item) {
                    item.classList.remove("active");
                }
            );

            card.classList.add("active");

        }
    );

});


// =========================================
// SHOW TIME SELECTION
// =========================================

const timeCards =
    document.querySelectorAll(".time-card");


timeCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            timeCards.forEach(
                function (item) {
                    item.classList.remove("active");
                }
            );

            card.classList.add("active");

        }
    );

});


// =========================================
// CONTINUE TO SEATS
// =========================================

const continueBooking =
    document.getElementById(
        "continueBooking"
    );


if (continueBooking) {

    continueBooking.addEventListener(
        "click",
        function () {

            const selectedDate =
                document.querySelector(
                    ".date-card.active"
                );

            const selectedTheatre =
                document.querySelector(
                    ".theatre-card.active"
                );

            const selectedTime =
                document.querySelector(
                    ".time-card.active"
                );


            if (!selectedDate ||
                !selectedTheatre ||
                !selectedTime) {

                alert(
                    "Please select date, theatre and show time."
                );

                return;
            }


            localStorage.setItem(
                "selectedDate",
                selectedDate.innerText
            );

            localStorage.setItem(
                "selectedTheatre",
                selectedTheatre.innerText
            );

            localStorage.setItem(
                "selectedTime",
                selectedTime.innerText
            );


            window.location.href =
                "seats.html";

        }
    );

}