document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const groupName = document.getElementById('group_name').value.trim();
    const msgBox = document.getElementById('message-box');

    if(firstName !== '' && lastName !== '' && groupName !== '') {
        const studentData = {
            name: firstName,
            surname: lastName,
            group: groupName,
            time: new Date().toLocaleString('uk-UA')
        };
        
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentData);
        localStorage.setItem('students', JSON.stringify(students));

        msgBox.textContent = `Успішно! Студент ${firstName} доданий.`;
        msgBox.className = 'success';
        msgBox.style.display = 'block';

        document.getElementById('student-form').reset();
    } else {
        msgBox.textContent = 'Будь ласка, заповніть усі поля!';
        msgBox.className = 'error';
        msgBox.style.display = 'block';
    }
});