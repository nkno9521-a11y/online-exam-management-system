function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let message =
        document.getElementById("message");

    if (username === "" || password === "") {

        message.innerHTML =
            "Please enter username and password.";

        message.style.color = "red";

    } else {

        // Save student name
        localStorage.setItem(
            "studentName",
            username
        );

        // Go directly to Student Dashboard
        window.location.href =
            "dashboard.html";
    }
}


function startExam() {

    window.location.href =
        "exam.html";
}


function logout() {

    // Remove current student name
    localStorage.removeItem("studentName");

    // Go back to Home Page
    window.location.href =
        "index.html";
}