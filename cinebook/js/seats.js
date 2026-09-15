// =========================================
// CINEBOOK - SEAT SELECTION
// =========================================


// =========================================
// LOAD SELECTED MOVIE
// =========================================

const seatMoviePoster =
    document.getElementById("seatMoviePoster");

const seatMovieTitle =
    document.getElementById("seatMovieTitle");

const seatShowDetails =
    document.getElementById("seatShowDetails");


const selectedMovie =
    localStorage.getItem("selectedMovie");


if (selectedMovie) {

    const movie =
        JSON.parse(selectedMovie);

    if (seatMoviePoster) {
        seatMoviePoster.src =
            movie.poster;

        seatMoviePoster.alt =
            movie.title;
    }

    if (seatMovieTitle) {
        seatMovieTitle.textContent =
            movie.title;
    }

}


// =========================================
// SHOW DETAILS
// =========================================

const selectedDate =
    localStorage.getItem("selectedDate");

const selectedTheatre =
    localStorage.getItem("selectedTheatre");

const selectedTime =
    localStorage.getItem("selectedTime");


if (seatShowDetails) {

    seatShowDetails.textContent =
        `${selectedDate || "Date"} • ${selectedTime || "Show Time"}`;

}


// =========================================
// SEAT SELECTION
// =========================================

const seats =
    document.querySelectorAll(".seat:not(.occupied)");

const selectedSeatsElement =
    document.getElementById("selectedSeats");

const totalPriceElement =
    document.getElementById("totalPrice");


const ticketPrice = 180;


let selectedSeats = [];


// =========================================
// CLICK SEAT
// =========================================

seats.forEach(function (seat) {

    seat.addEventListener(
        "click",
        function () {

            const seatNumber =
                seat.dataset.seat;


            if (seat.classList.contains("selected")) {

                seat.classList.remove("selected");

                selectedSeats =
                    selectedSeats.filter(
                        function (item) {
                            return item !== seatNumber;
                        }
                    );

            }

            else {

                seat.classList.add("selected");

                selectedSeats.push(
                    seatNumber
                );

            }


            updateSummary();

        }
    );

});


// =========================================
// UPDATE SUMMARY
// =========================================

function updateSummary() {

    if (selectedSeats.length === 0) {

        selectedSeatsElement.textContent =
            "None";

        totalPriceElement.textContent =
            "₹0";

        return;

    }


    selectedSeatsElement.textContent =
        selectedSeats.join(", ");


    const total =
        selectedSeats.length * ticketPrice;


    totalPriceElement.textContent =
        `₹${total}`;

}


// =========================================
// PROCEED TO PAYMENT
// =========================================

const confirmSeats =
    document.getElementById("confirmSeats");


if (confirmSeats) {

    confirmSeats.addEventListener(
        "click",
        function () {

            if (selectedSeats.length === 0) {

                alert(
                    "Please select at least one seat."
                );

                return;

            }


            localStorage.setItem(
                "selectedSeats",
                JSON.stringify(selectedSeats)
            );


            localStorage.setItem(
                "ticketPrice",
                ticketPrice
            );


            localStorage.setItem(
                "totalPrice",
                selectedSeats.length * ticketPrice
            );


            window.location.href =
                "payment.html";

        }
    );

}