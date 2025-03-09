document.addEventListener("DOMContentLoaded", () => {
let signButton = document.getElementById("sign")

if (signButton) {
    signButton.addEventListener("click", async (event)=> {
        event.preventDefault();

        let emailform = document.getElementById("email")
        let password = document.getElementById("pwd")

        let usrVal = emailform.value
        if (usrVal === "admin") {
            window.location.href = "dashboard-adm/dashboard.html"
        } else if (usrVal === "company") {
            window.location.href = "dashboard-company/dashboard.html"
        } else {
            window.location.href = "dashboard-lpk/dashboard.html"
        }
    })
}
});