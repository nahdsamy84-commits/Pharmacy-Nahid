// Pharmacy Website JavaScript

// 1. Search for medicines
function searchMedicine() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let table = document.getElementById("medicineTable");

    if (!table) {
        alert("جدول الأدوية غير موجود");
        return;
    }

    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let medicineName = rows[i].getElementsByTagName("td")[0];

        if (medicineName) {
            let text = medicineName.textContent.toLowerCase();

            if (text.includes(filter)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}


// 2. Contact form
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === ""  email === ""  message === "") {
        alert("الرجاء ملء جميع الحقول");
    } else {
        alert("شكراً " + name + "، تم إدخال رسالتك بنجاح");

        document.getElementById("contactForm").reset();
    }
}


// 3. Dark mode
function changeMode() {
    document.body.classList.toggle("dark-mode");
}