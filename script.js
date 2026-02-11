// Load students when page loads
document.addEventListener("DOMContentLoaded", loadStudents);

function addStudent() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let attendance = document.getElementById("attendance").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || email === "" || course === "") {
        alert("Please fill all required fields!");
        return;
    }

    let student = {
        name: name,
        email: email,
        course: course,
        attendance: attendance,
        marks: marks
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    clearForm();
    loadStudents();
}

function loadStudents() {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tableBody = document.querySelector("#studentTable tbody");

    tableBody.innerHTML = "";

    students.forEach((student, index) => {

        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.attendance}</td>
                <td>${student.marks}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

function deleteStudent(index) {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("attendance").value = "";
    document.getElementById("marks").value = "";
}
