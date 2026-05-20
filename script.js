let users = [];

// Load CSV
fetch('users.csv')
    .then(res => res.text())
    .then(data => {
        let lines = data.split('\n');

        for (let i = 1; i < lines.length; i++) {
            let cols = lines[i].split(';'); // pakai ; sesuai Excel

            if (cols.length >= 2) {
                users.push({
                    username: cols[0].trim(),
                    password: cols[1].trim(),
                    nama: cols[2] ? cols[2].trim() : ""
                });
            }
        }

        console.log("Loaded users:", users); // debug
    });

// Login function
function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    let found = users.find(x => x.username == u && x.password == p);

    if (found) {
        alert("Selamat datang " + found.nama);

        window.location.href =
        "https://storage3.me-qr.com/pdf/8d49c29f-b8c1-4f77-b360-34e636354e9d.pdf";
    } else {
        alert("User / password salah");
    }
}
