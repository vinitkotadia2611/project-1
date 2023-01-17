function formData() {
    let u = document.getElementById("userId").value;
    let m = document.getElementById("mobno").value;
    let i = document.getElementById("email").value;
    let n = document.getElementById("password").value;

    let obj = {
        userId: u,
        mobno: m,
        email: i,
        password: n,
    }

    let localData = JSON.parse(localStorage.getItem("user"));
    if (localData !== null) {
        localData.push(obj);
        localStorage.setItem("user", JSON.stringify(localData));
    } else {
        localStorage.setItem("user", JSON.stringify([obj]))
    }
    window.location.href = "mainlogin.html"
}
