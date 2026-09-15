// =========================================
// CINEBOOK - PROFILE
// =========================================


// =========================================
// CHECK LOGIN
// =========================================

const isLoggedIn =
    localStorage.getItem("cinebookLoggedIn") === "true";


if (!isLoggedIn) {

    window.location.href = "login.html";

}


// =========================================
// GET USER
// =========================================

const savedUser =
    localStorage.getItem("cinebookCurrentUser") ||
    localStorage.getItem("cinebookUser");


let user = null;


if (savedUser) {

    user = JSON.parse(savedUser);

}


// =========================================
// USER ELEMENTS
// =========================================

const profileName =
    document.getElementById("profileName");

const profileFullName =
    document.getElementById("profileFullName");

const profileEmail =
    document.getElementById("profileEmail");

const profileAvatar =
    document.getElementById("profileAvatar");


// =========================================
// DISPLAY USER
// =========================================

if (user) {

    const name =
        user.name || "User";

    const email =
        user.email || "No email";


    if (profileName) {

        profileName.textContent = name;

    }


    if (profileFullName) {

        profileFullName.textContent = name;

    }


    if (profileEmail) {

        profileEmail.textContent = email;

    }


    if (profileAvatar) {

        profileAvatar.textContent =
            name.charAt(0).toUpperCase();

    }

}


// =========================================
// LOGOUT
// =========================================

function logout() {

    localStorage.removeItem(
        "cinebookLoggedIn"
    );

    localStorage.removeItem(
        "cinebookCurrentUser"
    );

    window.location.href =
        "login.html";

}


// =========================================
// LOGOUT BUTTON
// =========================================

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logout
    );

}


// =========================================
// LOGOUT CARD
// =========================================

const logoutCardButton =
    document.getElementById(
        "logoutCardButton"
    );


if (logoutCardButton) {

    logoutCardButton.addEventListener(
        "click",
        logout
    );

}


// =========================================
// BOOKING HISTORY
// =========================================

const bookingHistory =
    document.getElementById(
        "bookingHistory"
    );


function loadBookings() {

    if (!bookingHistory) {
        return;
    }


    const savedBookings =
        localStorage.getItem(
            "cinebookBookings"
        );
        const allBookings =
    savedBookings
        ? JSON.parse(savedBookings)
        : [];
        const bookings =
        allBookings.filter(function (booking) {
            return booking.userEmail === user?.email;
        });


    // =====================================
    // NO BOOKINGS
    // =====================================

    if (bookings.length === 0) {

        bookingHistory.innerHTML = `

            <div class="empty-bookings">

                <div>
                    🎬
                </div>

                <h3>
                    No bookings yet
                </h3>

                <p>
                    Your movie bookings will appear here.
                </p>

                <a href="index.html">
                    Browse Movies
                </a>

            </div>

        `;

        return;

    }


    // =====================================
    // NEWEST BOOKING FIRST
    // =====================================

    const latestBookings =
        [...bookings].reverse();


    // =====================================
    // DISPLAY BOOKINGS
    // =====================================

    bookingHistory.innerHTML =
        latestBookings.map(
            function (booking) {

                const seats =
                    Array.isArray(booking.seats)
                        ? booking.seats.join(", ")
                        : "-";


                return `

                    <div class="booking-card">

                        <img
                            src="${booking.poster}"
                            alt="${booking.movieTitle}"
                            class="booking-poster"
                        >


                        <div class="booking-details">

                            <h3>
                                ${booking.movieTitle}
                            </h3>


                            <p>
                                📅 ${booking.date}
                            </p>


                            <p>
                                🕐 ${booking.time}
                            </p>


                            <p>
                                🎭 ${booking.theatre}
                            </p>


                            <p>
                                💺 ${seats}
                            </p>


                            <strong>
                                ₹${booking.total}
                            </strong>

                        </div>
                        <div class="booking-side">
                         <span>
                          ✓ CONFIRMED
                           </span>
                           <small>
                           ${booking.bookingId}
                           </small>
                           <button     
                           type="button"
                           class="view-booking-ticket"
                            data-booking-id="${booking.bookingId}" >
                             🎟️ VIEW TICKET
                              </button>
                              </div>
                

                    </div>

                `;

            }
        ).join("");

}


// =========================================
// MY BOOKINGS BUTTON
// =========================================

const myBookingsButton =
    document.getElementById(
        "myBookingsButton"
    );


if (myBookingsButton) {

    myBookingsButton.addEventListener(
        "click",
        function () {

            if (bookingHistory) {

                bookingHistory.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// =========================================
// PERSONAL DETAILS
// =========================================

const personalDetailsButton =
    document.getElementById(
        "personalDetailsButton"
    );


if (personalDetailsButton) {

    personalDetailsButton.addEventListener(
        "click",
        function () {

            alert(
                `Name: ${user?.name || "User"}\n` +
                `Email: ${user?.email || "No email"}`
            );

        }
    );

}


// =========================================
// HELP & SUPPORT
// =========================================

const helpButton =
    document.getElementById(
        "helpButton"
    );


if (helpButton) {

    helpButton.addEventListener(
        "click",
        function () {

            alert(
                "Need help with CineBook?\n\n" +
                "For booking support, please contact CineBook support."
            );

        }
    );

}


// =========================================
// LOAD BOOKINGS
// =========================================

loadBookings();
// =========================================
// VIEW BOOKING TICKET
// =========================================

document.addEventListener(
    "click",
    function (event) {

        const ticketButton =
            event.target.closest(
                ".view-booking-ticket"
            );


        if (!ticketButton) {
            return;
        }


        const bookingId =
            ticketButton.dataset.bookingId;


        const bookings =
            JSON.parse(
                localStorage.getItem(
                    "cinebookBookings"
                )
            ) || [];


        const booking =
            bookings.find(
                function (item) {

                    return item.bookingId === bookingId;

                }
            );


        if (!booking) {

            alert(
                "Booking details not found."
            );

            return;

        }


        // Store this booking temporarily

        localStorage.setItem(
            "selectedTicket",
            JSON.stringify(booking)
        );


        // Open ticket page

        window.open(
            "ticket.html",
            "_blank"
        );

    }
);