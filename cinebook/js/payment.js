// =========================================
// CINEBOOK - PAYMENT SYSTEM
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

const paymentMoviePoster =
    document.getElementById("paymentMoviePoster");

const paymentMovieTitle =
    document.getElementById("paymentMovieTitle");

const paymentMovieDetails =
    document.getElementById("paymentMovieDetails");

const paymentTotal =
    document.getElementById("paymentTotal");

const cardNumber =
    document.getElementById("cardNumber");

const cardHolder =
    document.getElementById("cardHolder");

const expiry =
    document.getElementById("expiry");

const cvv =
    document.getElementById("cvv");

const upiId =
    document.getElementById("upiId");

const payNow =
    document.getElementById("payNow");

const payButtonText =
    document.getElementById("payButtonText");


// =========================================
// LOAD MOVIE
// =========================================

if (selectedMovie) {

    const movie =
        JSON.parse(selectedMovie);

    if (paymentMoviePoster) {

        paymentMoviePoster.src =
            movie.poster;

        paymentMoviePoster.alt =
            movie.title;
    }

    if (paymentMovieTitle) {

        paymentMovieTitle.textContent =
            movie.title;
    }
}


// =========================================
// LOAD BOOKING DETAILS
// =========================================

if (paymentMovieDetails) {

    const seats =
        selectedSeats
            ? JSON.parse(selectedSeats)
            : [];

    paymentMovieDetails.textContent =
        `${selectedDate || "Date"} • ` +
        `${selectedTime || "Show Time"} • ` +
        `${seats.join(", ") || "No seats"}`;
}


// =========================================
// LOAD TOTAL
// =========================================

if (paymentTotal) {

    paymentTotal.textContent =
        `₹${totalPrice || 0}`;
}


// =========================================
// PAYMENT METHOD
// =========================================

let selectedPaymentMethod = "card";


const paymentMethods =
    document.querySelectorAll(
        ".payment-method"
    );


const cardPayment =
    document.getElementById(
        "cardPayment"
    );

const googlepayPayment =
    document.getElementById(
        "googlepayPayment"
    );

const phonepePayment =
    document.getElementById(
        "phonepePayment"
    );

const upiPayment =
    document.getElementById(
        "upiPayment"
    );


// =========================================
// CHANGE PAYMENT METHOD
// =========================================

paymentMethods.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            paymentMethods.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            selectedPaymentMethod =
                button.dataset.method;


            // Hide all forms

            cardPayment.classList.add(
                "hidden"
            );

            googlepayPayment.classList.add(
                "hidden"
            );

            phonepePayment.classList.add(
                "hidden"
            );

            upiPayment.classList.add(
                "hidden"
            );


            // CARD

            if (
                selectedPaymentMethod ===
                "card"
            ) {

                cardPayment.classList.remove(
                    "hidden"
                );

                payButtonText.textContent =
                    "🔒 PAY NOW";
            }


            // GOOGLE PAY

            if (
                selectedPaymentMethod ===
                "googlepay"
            ) {

                googlepayPayment.classList.remove(
                    "hidden"
                );

                payButtonText.textContent =
                    "📱 PAY WITH GOOGLE PAY";
            }


            // PHONEPE

            if (
                selectedPaymentMethod ===
                "phonepe"
            ) {

                phonepePayment.classList.remove(
                    "hidden"
                );

                payButtonText.textContent =
                    "📱 PAY WITH PHONEPE";
            }


            // UPI

            if (
                selectedPaymentMethod ===
                "upi"
            ) {

                upiPayment.classList.remove(
                    "hidden"
                );

                payButtonText.textContent =
                    "🔵 PAY WITH UPI";
            }

        }
    );

});


// =========================================
// CARD NUMBER FORMATTING
// =========================================

if (cardNumber) {

    cardNumber.addEventListener(
        "input",
        function () {

            let value =
                cardNumber.value
                    .replace(/\D/g, "")
                    .slice(0, 16);


            value =
                value.replace(
                    /(\d{4})(?=\d)/g,
                    "$1 "
                );


            cardNumber.value =
                value;

        }
    );

}


// =========================================
// EXPIRY FORMATTING
// =========================================

if (expiry) {

    expiry.addEventListener(
        "input",
        function () {

            let value =
                expiry.value
                    .replace(/\D/g, "")
                    .slice(0, 4);


            if (value.length > 2) {

                value =
                    value.slice(0, 2)
                    + "/"
                    + value.slice(2);

            }


            expiry.value =
                value;

        }
    );

}


// =========================================
// CVV
// =========================================

if (cvv) {

    cvv.addEventListener(
        "input",
        function () {

            cvv.value =
                cvv.value
                    .replace(/\D/g, "")
                    .slice(0, 3);

        }
    );

}


// =========================================
// UPI
// =========================================

if (upiId) {

    upiId.addEventListener(
        "input",
        function () {

            upiId.value =
                upiId.value
                    .replace(/\s/g, "");

        }
    );

}


// =========================================
// PAY NOW
// =========================================

if (payNow) {

    payNow.addEventListener(
        "click",
        function () {


            // =================================
            // CARD VALIDATION
            // =================================

            if (
                selectedPaymentMethod ===
                "card"
            ) {

                const number =
                    cardNumber.value
                        .replace(/\s/g, "");

                const holder =
                    cardHolder.value.trim();

                const expiryValue =
                    expiry.value.trim();

                const cvvValue =
                    cvv.value.trim();


                if (
                    number.length !== 16
                ) {

                    alert(
                        "Please enter a valid 16-digit card number."
                    );

                    cardNumber.focus();

                    return;
                }


                if (
                    holder.length < 3
                ) {

                    alert(
                        "Please enter the card holder name."
                    );

                    cardHolder.focus();

                    return;
                }


                if (
                    !/^\d{2}\/\d{2}$/.test(
                        expiryValue
                    )
                ) {

                    alert(
                        "Please enter expiry date as MM/YY."
                    );

                    expiry.focus();

                    return;
                }


                if (
                    cvvValue.length !== 3
                ) {

                    alert(
                        "Please enter a valid 3-digit CVV."
                    );

                    cvv.focus();

                    return;
                }

            }


            // =================================
            // UPI VALIDATION
            // =================================

            if (
                selectedPaymentMethod ===
                "upi"
            ) {

                const upiValue =
                    upiId.value.trim();


                if (
                    !/^[\w.-]+@[\w.-]+$/.test(
                        upiValue
                    )
                ) {

                    alert(
                        "Please enter a valid UPI ID."
                    );

                    upiId.focus();

                    return;
                }

            }


            // =================================
            // SAVE PAYMENT
            // =================================

            localStorage.setItem(
                "paymentStatus",
                "Paid"
            );


            localStorage.setItem(
                "paymentMethod",
                selectedPaymentMethod
            );


            // =================================
            // CONFIRMATION PAGE
            // =================================

            window.location.href =
                "confirmation.html";

        }
    );

}