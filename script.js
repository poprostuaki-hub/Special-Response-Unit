function checkAccess() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    const correctPassword = "butelka"; 

    if (pass === correctPassword) {
        if (user.trim() === "") {
            alert("Podaj swój kryptonim!");
            return;
        }
        localStorage.setItem("kryptonim", user);
        window.location.href = "welcome.html";
    } else {
        const error = document.getElementById('error-msg');
        error.innerText = "BŁĄD KRYTYCZNY: NIEPOPRAWNE HASŁO";
        error.style.animation = "shake 0.5s";
        setTimeout(() => { error.style.animation = ""; }, 500);
    }
}