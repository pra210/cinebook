// =========================================
// CINEBOOK - BOOKING CONFIRMATION
// =========================================


// =========================================
// GET BOOKING DATA
// =========================================

const selectedMovie =
    localStorage.getItem("selectedMovie");

const selectedDate =
    localStorage.getItem("selectedDate");

const selectedTime =
    localStorage.getItem("selectedTime");

const selectedTheatre =
    localStorage.getItem("selectedTheatre");

const selectedSeats =
    localStorage.getItem("selectedSeats");

const totalPrice =
    localStorage.getItem("totalPrice");


// =========================================
// ELEMENTS
// =========================================

const confirmationPoster =
    document.getElementById("confirmationPoster");

const confirmationMovie =
    document.getElementById("confirmationMovie");

const confirmationDate =
    document.getElementById("confirmationDate");

const confirmationTime =
    document.getElementById("confirmationTime");

const confirmationTheatre =
    document.getElementById("confirmationTheatre");

const confirmationSeats =
    document.getElementById("confirmationSeats");

const confirmationTotal =
    document.getElementById("confirmationTotal");

const bookingId =
    document.getElementById("bookingId");


// =========================================
// LOAD MOVIE
// =========================================

if (selectedMovie) {

    const movie =
        JSON.parse(selectedMovie);

    if (confirmationPoster) {
        confirmationPoster.src =
            movie.poster;

        confirmationPoster.alt =
            movie.title;
    }

    if (confirmationMovie) {
        confirmationMovie.textContent =
            movie.title;
    }

}


// =========================================
// LOAD BOOKING DETAILS
// =========================================

if (confirmationDate) {

    confirmationDate.textContent =
        selectedDate || "-";

}

if (confirmationTime) {

    confirmationTime.textContent =
        selectedTime || "-";

}

if (confirmationTheatre) {

    confirmationTheatre.textContent =
        selectedTheatre || "-";

}

if (confirmationSeats) {

    if (selectedSeats) {

        const seats =
            JSON.parse(selectedSeats);

        confirmationSeats.textContent =
            seats.join(", ");

    }

    else {

        confirmationSeats.textContent =
            "-";

    }

}


if (confirmationTotal) {

    confirmationTotal.textContent =
        `₹${totalPrice || 0}`;

}


// =========================================
// GENERATE BOOKING ID + SAVE BOOKING
// =========================================

let currentBookingId = "";


if (bookingId) {

    const randomNumber =
        Math.floor(
            100000 + Math.random() * 900000
        );


    currentBookingId =
        `CB${randomNumber}`;


    bookingId.textContent =
        currentBookingId;


    // =====================================
    // SAVE BOOKING TO BOOKING HISTORY
    // =====================================

    const existingBookings =
        JSON.parse(
            localStorage.getItem(
                "cinebookBookings"
            )
        ) || [];


    const seats =
        selectedSeats
            ? JSON.parse(selectedSeats)
            : [];


    const movie =
        selectedMovie
            ? JSON.parse(selectedMovie)
            : null;


    if (movie) {
        const currentUser =
    JSON.parse(
        localStorage.getItem("cinebookCurrentUser")
    );

const newBooking = {
    userEmail: currentUser?.email || "",
    bookingId: currentBookingId,
    movieId: movie.id,
    movieTitle: movie.title,
    poster: movie.poster,
    date: selectedDate || "-",
    time: selectedTime || "-",
    theatre: selectedTheatre || "-",
    seats: seats,
    total: totalPrice || "0",
    bookedAt: new Date().toLocaleString()
};

        existingBookings.push(
            newBooking
        );


        localStorage.setItem(
            "cinebookBookings",
            JSON.stringify(
                existingBookings
            )
        );

    }

}


// =========================================
// VIEW TICKET
// =========================================

const downloadTicket =
    document.getElementById(
        "downloadTicket"
    );


if (downloadTicket) {

    downloadTicket.addEventListener(
        "click",
        function () {

            showTicket();

        }
    );

}
// =========================================
// SHOW DIGITAL TICKET
// =========================================

function showTicket() {

    const movieData =
        selectedMovie
            ? JSON.parse(selectedMovie)
            : null;

    const seats =
        selectedSeats
            ? JSON.parse(selectedSeats)
            : [];

    if (!movieData) {
        alert("Booking details not found.");
        return;
    }

    const ticketWindow =
        window.open("", "_blank");

    ticketWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>CineBook | Ticket</title>

            <style>

                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    min-height: 100vh;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 30px;

                    background: #070910;

                    color: #ffffff;

                    font-family:
                        Arial,
                        Helvetica,
                        sans-serif;
                }

                .ticket {
                    width: 100%;
                    max-width: 650px;

                    overflow: hidden;

                    border-radius: 18px;

                    background: #11151e;

                    border:
                        1px solid
                        rgba(255,255,255,0.1);

                    box-shadow:
                        0 30px 80px
                        rgba(0,0,0,0.5);
                }

                .ticket-header {
                    padding: 22px 28px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    background: #e50914;
                }

                .ticket-logo {
                    font-size: 22px;
                    font-weight: 900;
                }

                .ticket-status {
                    font-size: 10px;
                    font-weight: 800;

                    letter-spacing: 1px;
                }

                .ticket-body {
                    display: flex;
                    gap: 22px;

                    padding: 25px;
                }

                .ticket-poster {
                    width: 120px;
                    height: 175px;

                    flex-shrink: 0;

                    object-fit: cover;

                    border-radius: 9px;
                }

                .ticket-content {
                    flex: 1;
                }

                .ticket-content h1 {
                    margin: 0 0 10px;

                    font-size: 30px;
                }

                .ticket-label {
                    color: #747e8e;

                    font-size: 9px;
                    font-weight: 800;

                    letter-spacing: 1.3px;
                }

                .ticket-grid {
                    display: grid;

                    grid-template-columns:
                        1fr 1fr;

                    gap: 14px;

                    margin-top: 20px;
                }

                .ticket-item {
                    padding: 12px;

                    border-radius: 8px;

                    background:
                        rgba(255,255,255,0.04);
                }

                .ticket-item strong {
                    display: block;

                    margin-top: 5px;

                    font-size: 12px;
                }

                .ticket-bottom {
                    padding: 20px 25px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    border-top:
                        1px dashed
                        rgba(255,255,255,0.18);
                }

                .booking-id {
                    color: #9ca5b4;

                    font-size: 10px;
                }

                .booking-id strong {
                    display: block;

                    margin-top: 5px;

                    color: #ffffff;

                    font-size: 16px;

                    letter-spacing: 1px;
                }

                .total {
                    text-align: right;
                }

                .total span {
                    color: #8a93a2;

                    font-size: 9px;
                }

                .total strong {
                    display: block;

                    margin-top: 5px;

                    color: #ffd21c;

                    font-size: 20px;
                }

                .print-button {
                    display: block;

                    width: calc(100% - 50px);

                    margin:
                        0 25px 25px;

                    padding: 14px;

                    border: none;

                    border-radius: 8px;

                    background: #e50914;

                    color: #ffffff;

                    font-weight: 800;

                    cursor: pointer;
                }

                @media (max-width: 550px) {

                    body {
                        padding: 15px;
                    }

                    .ticket-body {
                        flex-direction: column;
                    }

                    .ticket-poster {
                        width: 110px;
                        height: 160px;
                    }

                    .ticket-grid {
                        grid-template-columns: 1fr;
                    }

                }

            </style>

        </head>


        <body>

            <div class="ticket">

                <div class="ticket-header">

                    <div class="ticket-logo">
                        🎬 CineBook
                    </div>

                    <div class="ticket-status">
                        ✓ CONFIRMED
                    </div>

                </div>


                <div class="ticket-body">

                    <img
                        class="ticket-poster"
                        src="${movieData.poster}"
                        alt="${movieData.title}"
                    >


                    <div class="ticket-content">

                        <span class="ticket-label">
                            MOVIE
                        </span>

                        <h1>
                            ${movieData.title}
                        </h1>


                        <div class="ticket-grid">

                            <div class="ticket-item">

                                <span class="ticket-label">
                                    DATE
                                </span>

                                <strong>
                                    ${selectedDate || "-"}
                                </strong>

                            </div>


                            <div class="ticket-item">

                                <span class="ticket-label">
                                    SHOW TIME
                                </span>

                                <strong>
                                    ${selectedTime || "-"}
                                </strong>

                            </div>


                            <div class="ticket-item">

                                <span class="ticket-label">
                                    THEATRE
                                </span>

                                <strong>
                                    ${selectedTheatre || "-"}
                                </strong>

                            </div>


                            <div class="ticket-item">

                                <span class="ticket-label">
                                    SEATS
                                </span>

                                <strong>
                                    ${seats.join(", ")}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="ticket-bottom">

                    <div class="booking-id">

                        BOOKING ID

                        <strong>
                            ${bookingId.textContent}
                        </strong>

                    </div>


                    <div class="total">

                        <span>
                            TOTAL PAID
                        </span>

                        <strong>
                            ₹${totalPrice || 0}
                        </strong>

                    </div>

                </div>


                <button
                    class="print-button"
                    onclick="window.print()">

                    🖨️ PRINT TICKET

                </button>

            </div>

        </body>

        </html>

    `);

    ticketWindow.document.close();

}