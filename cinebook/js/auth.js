// =========================================
// CINEBOOK FRONTEND AUTHENTICATION
// =========================================

// LOGIN
function loginUser(email, password) {

    const savedUser = localStorage.getItem("cinebookUser");

    if (!savedUser) {
        return {
            success: false,
            message: "No account found. Please create an account first."
        };
    }

    const user = JSON.parse(savedUser);

    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem(
            "cinebookLoggedIn",
            "true"
        );

        localStorage.setItem(
            "cinebookCurrentUser",
            JSON.stringify(user)
        );

        return {
            success: true,
            message: "Login successful!"
        };
    }

    return {
        success: false,
        message: "Incorrect email or password."
    };
}


// LOGOUT
function logoutUser() {

    localStorage.removeItem("cinebookLoggedIn");
    localStorage.removeItem("cinebookCurrentUser");

    window.location.href = "login.html";
}


// CHECK LOGIN
function isUserLoggedIn() {

    return localStorage.getItem(
        "cinebookLoggedIn"
    ) === "true";

}