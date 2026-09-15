// =========================================
// CINEBOOK MOVIE DETAILS
// =========================================

const movieDetails =
    document.getElementById("movieDetails");

const selectedMovie =
    localStorage.getItem("selectedMovie");


// =========================================
// LOAD MOVIE DETAILS
// =========================================

if (movieDetails && selectedMovie) {

    const movie =
        JSON.parse(selectedMovie);


    movieDetails.innerHTML = `

        <div class="details-poster">

            <img
                src="${movie.poster}"
                alt="${movie.title}"
            >

        </div>


        <div class="details-content">

            <span class="details-category">
                🎬 CINEBOOK ORIGINAL
            </span>


            <h1>
                ${movie.title}
            </h1>


            <div class="details-meta">

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

                <span>
                    ${movie.year}
                </span>

                <span>
                    ${movie.language}
                </span>

                <span>
                    ${movie.genre}
                </span>

            </div>


            <p class="details-description">
                Experience ${movie.title} on the big screen.
                Book your favourite seats and enjoy an
                unforgettable cinematic experience with CineBook.
            </p>


            <div class="details-actions">

                <button
                    type="button"
                    class="book-button"
                    id="bookMovieButton"
                >
                    🎟️ BOOK NOW
                </button>


                <a
                    href="index.html"
                    class="back-button"
                >
                    ← BACK TO MOVIES
                </a>

            </div>

        </div>

    `;


    // =========================================
    // BOOK NOW
    // =========================================

    const bookMovieButton =
        document.getElementById("bookMovieButton");


    if (bookMovieButton) {

        bookMovieButton.addEventListener(
            "click",
            function () {


                // Check whether user is logged in

                const isLoggedIn =
                    localStorage.getItem(
                        "cinebookLoggedIn"
                    ) === "true";


                // If NOT logged in

                if (!isLoggedIn) {

                    localStorage.setItem(
                        "bookingAfterLogin",
                        "true"
                    );


                    localStorage.setItem(
                        "selectedMovie",
                        JSON.stringify(movie)
                    );


                    window.location.href =
                        "login.html";


                    return;
                }


                // If already logged in

                localStorage.setItem(
                    "selectedMovie",
                    JSON.stringify(movie)
                );


                window.location.href =
                    "booking.html";

            }
        );

    }

}


// =========================================
// MOVIE NOT FOUND
// =========================================

else {

    if (movieDetails) {

        movieDetails.innerHTML = `

            <div class="no-movie">

                <h2>
                    Movie not found 🎬
                </h2>

                <p>
                    Please go back and select a movie.
                </p>

                <a href="index.html">
                    Back to Movies
                </a>

            </div>

        `;

    }

}