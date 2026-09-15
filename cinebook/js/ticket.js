// =========================================
// CINEBOOK - DIGITAL TICKET
// =========================================


// =========================================
// GET SELECTED TICKET
// =========================================

const selectedTicket =
    localStorage.getItem(
        "selectedTicket"
    );


let ticket = null;


if (selectedTicket) {

    ticket =
        JSON.parse(selectedTicket);

}


// =========================================
// ELEMENTS
// =========================================

const ticketPoster =
    document.getElementById(
        "ticketPoster"
    );

const ticketMovie =
    document.getElementById(
        "ticketMovie"
    );

const ticketDate =
    document.getElementById(
        "ticketDate"
    );

const ticketTime =
    document.getElementById(
        "ticketTime"
    );

const ticketTheatre =
    document.getElementById(
        "ticketTheatre"
    );

const ticketSeats =
    document.getElementById(
        "ticketSeats"
    );

const ticketBookingId =
    document.getElementById(
        "ticketBookingId"
    );

const ticketTotal =
    document.getElementById(
        "ticketTotal"
    );


// =========================================
// LOAD TICKET
// =========================================

if (ticket) {


    if (ticketPoster) {

        ticketPoster.src =
            ticket.poster || "";

        ticketPoster.alt =
            ticket.movieTitle || "Movie";

    }


    if (ticketMovie) {

        ticketMovie.textContent =
            ticket.movieTitle || "-";

    }


    if (ticketDate) {

        ticketDate.textContent =
            ticket.date || "-";

    }


    if (ticketTime) {

        ticketTime.textContent =
            ticket.time || "-";

    }


    if (ticketTheatre) {

        ticketTheatre.textContent =
            ticket.theatre || "-";

    }


    if (ticketSeats) {

        const seats =
            Array.isArray(ticket.seats)
                ? ticket.seats.join(", ")
                : "-";

        ticketSeats.textContent =
            seats;

    }


    if (ticketBookingId) {

        ticketBookingId.textContent =
            ticket.bookingId || "-";

    }


    if (ticketTotal) {

        ticketTotal.textContent =
            `₹${ticket.total || 0}`;

    }

}


// =========================================
// PRINT TICKET
// =========================================

const printTicket =
    document.getElementById(
        "printTicket"
    );


if (printTicket) {

    printTicket.addEventListener(
        "click",
        function () {

            window.print();

        }
    );

}


// =========================================
// BACK TO PROFILE
// =========================================

const backToProfile =
    document.getElementById(
        "backToProfile"
    );


if (backToProfile) {

    backToProfile.addEventListener(
        "click",
        function () {

            window.location.href =
                "profile.html";

        }
    );

}


// =========================================
// NO TICKET
// =========================================

if (!ticket) {

    document.body.innerHTML = `

        <div style="
            color:white;
            text-align:center;
            font-family:Arial;
            padding:50px;
        ">

            <h2>
                Ticket not found 🎟️
            </h2>

            <p>
                Please return to your profile
                and select a booking.
            </p>

            <br>

            <a
                href="profile.html"
                style="
                    color:white;
                    background:#e50914;
                    padding:12px 20px;
                    border-radius:8px;
                    text-decoration:none;
                "
            >
                ← BACK TO PROFILE
            </a>

        </div>

    `;

}