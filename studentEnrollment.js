let DSA = [];
let WebDev = [];

function enrollStudent(subject, name) {
    if (subject === 'DSA') {
        DSA.push(name);
    } else if (subject === 'WebDev') {
        WebDev.push(name);
    }
}

function unenrollStudent(subject, name) {
    let index;
    if (subject === 'DSA') {
        index = DSA.indexOf(name);
        if (index > -1) {
            DSA.slice(index, 1);
        }
    } else if (subject === 'WebDev') {
        index = WebDev.indexOf(name);
        if (index > -1) {
            WebDev.slice(index, 1);
        }
    }
}

function displayStudents() {
    console.log("DSA Students: ", DSA);
    console.log("WebDev Students: ", WebDev);
}
    let subjectChoice;
    let operationChoice;

    while (true) {
        subjectChoice = ("Select a subject to enroll a student (A) DSA, (B) WebDev: ").toUpperCase();
        if (subjectChoice === 'A') {
            subjectChoice = 'DSA';
        } else if (subjectChoice === 'B') {
            subjectChoice = 'WebDev';
        } else {
            console.log("Invalid choice. Please select again.");
            continue;
        }

        while (true) {
            operationChoice = prompt("Select an option (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit: ").toUpperCase();
            if (operationChoice === 'A') {
                let name = prompt("Enter the name of the student to enroll: ");
                enrollStudent(subjectChoice, name);
            } else if (operationChoice === 'B') {
                console.log("Currently enrolled students: ", subjectChoice === 'DSA' ? DSA : WebDev);
                let name = prompt("Enter the name of the student to unenroll: ");
                unenrollStudent(subjectChoice, name);
            } else if (operationChoice === 'C') {
                break;
            } else if (operationChoice === 'D') {
                displayStudents();
                return;
            } else {
                console.log("Invalid choice. Please select again.");
            }
        }
    }
}


