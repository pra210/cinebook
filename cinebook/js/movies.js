// =========================================
// CINEBOOK - ALL MOVIES PAGE
// =========================================

const allMoviesGrid =
    document.getElementById("allMoviesGrid");

const movieSearch =
    document.getElementById("movieSearch");

const filterButtons =
    document.querySelectorAll(".filter-button");


// =========================================
// DISPLAY MOVIES
// =========================================

function displayAllMovies(movieList) {

    if (!allMoviesGrid) {
        return;
    }

    allMoviesGrid.innerHTML = "";


    if (movieList.length === 0) {

        allMoviesGrid.innerHTML = `

            <div class="no-movies">

                <h2>
                    No movies found 🎬
                </h2>

                <p>
                    Try another movie name or language.
                </p>

            </div>

        `;

        return;
    }


    movieList.forEach(function (movie) {

        const card =
            document.createElement("article");

        card.className =
            "movie-card";


        card.innerHTML = `

            <div class="movie-poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                    loading="lazy"
                >


                <div class="movie-overlay">

                    <button
                        type="button"
                        class="details-button"
                    >
                        ▶ DETAILS
                    </button>


                    <button
                        type="button"
                        class="book-card-button"
                    >
                        🎟️ BOOK NOW
                    </button>

                </div>


                <span class="movie-rating">
                    ⭐ ${movie.rating}
                </span>

            </div>


            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.language}
                    •
                    ${movie.genre}
                    •
                    ${movie.year}
                </p>

            </div>

        `;


        // =====================================
        // DETAILS BUTTON
        // =====================================

        const detailsButton =
            card.querySelector(
                ".details-button"
            );


        detailsButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "selectedMovie",
                    JSON.stringify(movie)
                );


                window.location.href =
                    "movie-details.html";

            }
        );


        // =====================================
        // BOOK NOW BUTTON
        // =====================================

        const bookButton =
            card.querySelector(
                ".book-card-button"
            );


        bookButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "selectedMovie",
                    JSON.stringify(movie)
                );


                const loggedIn =
                    localStorage.getItem(
                        "cinebookLoggedIn"
                    ) === "true";


                if (!loggedIn) {

                    localStorage.setItem(
                        "bookingAfterLogin",
                        "true"
                    );


                    window.location.href =
                        "login.html";


                    return;

                }


                window.location.href =
                    "booking.html";

            }
        );


        // =====================================
        // CLICK MOVIE CARD
        // =====================================

        card.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        ".movie-overlay"
                    )
                ) {

                    return;

                }


                localStorage.setItem(
                    "selectedMovie",
                    JSON.stringify(movie)
                );


                window.location.href =
                    "movie-details.html";

            }
        );


        allMoviesGrid.appendChild(card);

    });

}


// =========================================
// GET LANGUAGE FROM URL
// =========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const selectedLanguage =
    urlParams.get("language");


// =========================================
// PAGE HEADING
// =========================================

const pageHeading =
    document.querySelector(
        ".all-movies-header h1"
    );


const pageSubtitle =
    document.querySelector(
        ".all-movies-subtitle"
    );


// =========================================
// LOAD MOVIES
// =========================================

function loadMovies() {

    if (
        typeof movies === "undefined"
    ) {

        return;

    }


    // LANGUAGE SELECTED

    if (selectedLanguage) {

        const filteredMovies =
            movies.filter(
                function (movie) {

                    return (
                        movie.language ===
                        selectedLanguage
                    );

                }
            );


        displayAllMovies(
            filteredMovies
        );


        // Change heading

        if (pageHeading) {

            pageHeading.textContent =
                `🎬 ${selectedLanguage} Movies`;

        }


        // Change subtitle

        if (pageSubtitle) {

            pageSubtitle.textContent =
                `${filteredMovies.length} movie${
                    filteredMovies.length === 1
                        ? ""
                        : "s"
                } available in ${selectedLanguage}`;

        }


        // Active language button

        filterButtons.forEach(
            function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.filter ===
                    selectedLanguage
                );

            }
        );


    } else {

        // SHOW ALL MOVIES

        displayAllMovies(
            movies
        );

    }

}


loadMovies();


// =========================================
// SEARCH
// =========================================

if (movieSearch) {

    movieSearch.addEventListener(
        "input",
        function () {

            const searchText =
                movieSearch.value
                    .trim()
                    .toLowerCase();


            let sourceMovies =
                movies;


            // Keep language filter

            if (selectedLanguage) {

                sourceMovies =
                    movies.filter(
                        function (movie) {

                            return (
                                movie.language ===
                                selectedLanguage
                            );

                        }
                    );

            }


            const filteredMovies =
                sourceMovies.filter(
                    function (movie) {

                        return (

                            movie.title
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                            ||

                            movie.genre
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                            ||

                            movie.language
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                        );

                    }
                );


            displayAllMovies(
                filteredMovies
            );

        }
    );

}


// =========================================
// LANGUAGE FILTER BUTTONS
// =========================================

filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                // ALL

                if (
                    filter === "all"
                ) {

                    window.location.href =
                        "movies.html";

                    return;

                }


                // SELECTED LANGUAGE

                window.location.href =
                    "movies.html?language=" +
                    encodeURIComponent(
                        filter
                    );

            }
        );

    }
);