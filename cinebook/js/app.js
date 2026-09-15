// =========================================
// CINEBOOK MAIN JAVASCRIPT
// =========================================


// =========================================
// SIDEBAR
// =========================================

const menuButton =
    document.getElementById("menuButton");

const closeSidebar =
    document.getElementById("closeSidebar");

const sidebar =
    document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");


// OPEN SIDEBAR

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            if (sidebar) {
                sidebar.classList.add("open");
            }

            if (sidebarOverlay) {
                sidebarOverlay.classList.add("show");
            }

        }
    );

}


// CLOSE SIDEBAR

if (closeSidebar) {

    closeSidebar.addEventListener(
        "click",
        function () {

            if (sidebar) {
                sidebar.classList.remove("open");
            }

            if (sidebarOverlay) {
                sidebarOverlay.classList.remove("show");
            }

        }
    );

}


// CLOSE SIDEBAR BY CLICKING OVERLAY

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        function () {

            if (sidebar) {
                sidebar.classList.remove("open");
            }

            if (sidebarOverlay) {
                sidebarOverlay.classList.remove("show");
            }

        }
    );

}


// =========================================
// SIDEBAR NAVIGATION
// =========================================

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            if (sidebar) {
                sidebar.classList.remove("open");
            }

            if (sidebarOverlay) {
                sidebarOverlay.classList.remove("show");
            }

        }
    );

});


// =========================================
// USER PROFILE
// =========================================

const userNameElement =
    document.getElementById("userName");

const profileButton =
    document.querySelector(".profile-button");

const savedUser =
    localStorage.getItem(
        "cinebookCurrentUser"
    );

const isLoggedIn =
    localStorage.getItem(
        "cinebookLoggedIn"
    ) === "true";


if (isLoggedIn && savedUser) {

    const user =
        JSON.parse(savedUser);


    // Show user's name

    if (userNameElement) {

        userNameElement.textContent =
            user.name || "Movie Lover";

    }


    // Profile goes to account page

    if (profileButton) {

        profileButton.href =
            "profile.html";

    }

}

else {

    // Logged out user

    if (userNameElement) {

        userNameElement.textContent =
            "Guest";

    }


    // Profile goes to login

    if (profileButton) {

        profileButton.href =
            "login.html";

    }

}


// =========================================
// LOGOUT
// =========================================

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            localStorage.removeItem(
                "cinebookLoggedIn"
            );


            localStorage.removeItem(
                "cinebookCurrentUser"
            );


            window.location.href =
                "login.html";

        }
    );

}


// =========================================
// CREATE MOVIE CARD
// =========================================

function createMovieCard(movie) {

    const article =
        document.createElement("article");


    article.className =
        "movie-card";


    article.innerHTML = `

        <div class="movie-poster">

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                loading="lazy"
            >


            <div class="movie-overlay">

                <button
                    type="button"
                    class="play-button"
                    aria-label="View movie details"
                >
                    ▶
                </button>


                <button
                    type="button"
                    class="card-book-button"
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
    // VIEW DETAILS
    // =====================================

    const playButton =
        article.querySelector(
            ".play-button"
        );


    if (playButton) {

        playButton.addEventListener(
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

    }


    // =====================================
    // BOOK NOW
    // =====================================

    const bookButton =
        article.querySelector(
            ".card-book-button"
        );


    if (bookButton) {

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

    }


    // =====================================
    // CLICK MOVIE CARD
    // =====================================

    article.addEventListener(
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


    return article;

}


// =========================================
// DISPLAY MOVIES
// =========================================

function displayMovies() {

    const trendingContainer =
        document.getElementById(
            "trendingMovies"
        );


    const nowContainer =
        document.getElementById(
            "nowShowingMovies"
        );


    const recentContainer =
        document.getElementById(
            "recentMovies"
        );


    if (
        !trendingContainer ||
        !nowContainer ||
        !recentContainer
    ) {

        return;

    }


    trendingContainer.innerHTML = "";

    nowContainer.innerHTML = "";

    recentContainer.innerHTML = "";


    movies.forEach(function (movie) {

        const card =
            createMovieCard(movie);


        if (movie.category === "trending") {

            trendingContainer.appendChild(
                card
            );

        }


        else if (movie.category === "now") {

            nowContainer.appendChild(
                card
            );

        }


        else if (movie.category === "recent") {

            recentContainer.appendChild(
                card
            );

        }

    });

}


// =========================================
// RUN MOVIE DISPLAY
// =========================================

displayMovies();


// =========================================
// SEARCH
// =========================================

const searchInput =
    document.getElementById(
        "movieSearch"
    );


const searchResults =
    document.getElementById(
        "searchResults"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            if (!searchResults) {
                return;
            }


            searchResults.innerHTML = "";


            if (searchText === "") {

                searchResults.style.display =
                    "none";


                return;

            }


            const filteredMovies =
                movies.filter(
                    function (movie) {

                        return (

                            movie.title
                                .toLowerCase()
                                .includes(searchText)


                            ||

                            movie.language
                                .toLowerCase()
                                .includes(searchText)


                            ||

                            movie.genre
                                .toLowerCase()
                                .includes(searchText)

                        );

                    }
                );


            if (filteredMovies.length === 0) {

                searchResults.innerHTML = `

                    <div class="no-results">

                        No movies found 🎬

                    </div>

                `;

            }


            else {

                filteredMovies
                    .slice(0, 6)
                    .forEach(
                        function (movie) {

                            const result =
                                document.createElement(
                                    "div"
                                );


                            result.className =
                                "search-result-item";


                            result.innerHTML = `

                                <img
                                    src="${movie.poster}"
                                    alt="${movie.title}"
                                >


                                <div>

                                    <strong>
                                        ${movie.title}
                                    </strong>


                                    <small>
                                        ${movie.language}
                                        •
                                        ${movie.genre}
                                        •
                                        ⭐ ${movie.rating}
                                    </small>

                                </div>

                            `;


                            result.addEventListener(
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


                            searchResults.appendChild(
                                result
                            );

                        }
                    );

            }


            searchResults.style.display =
                "block";

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(
                    ".search-container"
                )
            ) {

                if (searchResults) {

                    searchResults.style.display =
                        "none";

                }

            }

        }
    );

}


// =========================================
// LANGUAGE SELECTION
// =========================================

const languageCards =
    document.querySelectorAll(
        ".language-card"
    );


languageCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const language =
                card.dataset.language;


            localStorage.setItem(
                "selectedLanguage",
                language
            );


            window.location.href =
                "movies.html";

        }
    );

});



// =========================================
// CINEBOOK EXPERIENCE POPUP
// =========================================

const discoverCinebookButton =
    document.getElementById("discoverCinebookButton");

const cinebookModal =
    document.getElementById("cinebookModal");

const cinebookModalClose =
    document.getElementById("cinebookModalClose");

const cinebookModalOverlay =
    document.getElementById("cinebookModalOverlay");


// OPEN POPUP

if (discoverCinebookButton && cinebookModal) {

    discoverCinebookButton.addEventListener(
        "click",
        function () {

            cinebookModal.classList.add("active");

            document.body.style.overflow = "hidden";

        }
    );

}


// CLOSE POPUP

function closeCinebookModal() {

    if (cinebookModal) {

        cinebookModal.classList.remove("active");

    }

    document.body.style.overflow = "";

}


// CLOSE BUTTON

if (cinebookModalClose) {

    cinebookModalClose.addEventListener(
        "click",
        closeCinebookModal
    );

}


// CLICK OUTSIDE TO CLOSE

if (cinebookModalOverlay) {

    cinebookModalOverlay.addEventListener(
        "click",
        closeCinebookModal
    );

}


// ESCAPE KEY TO CLOSE

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            cinebookModal &&
            cinebookModal.classList.contains("active")
        ) {

            closeCinebookModal();

        }

    }
);