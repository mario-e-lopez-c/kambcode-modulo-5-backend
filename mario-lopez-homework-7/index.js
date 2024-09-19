const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3002;

//Read students json file
const studentsFilePath = path.join(__dirname, 'students.json');

function getStudentsData() {
    const data = fs.readFileSync(studentsFilePath);
    return JSON.parse(data)
}

//Function to write updated data back to students.json file 
function saveStudentsData(data){
    fs.writeFileSync(studentsFilePath, JSON.stringify(data, null, 2));
}
//Route to get all students 
app.get('/students',(req, res) => {
    const students = getStudentsData();
    res.json(students)
})

//Route to get a estudent by ID
app.get('/students/:id', (req, res) => {
    const students = getStudentsData();
    const studentId = parseInt(req.params.id, 10);
    const student  = students.find(s => s.id === studentId);

    if(student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found'})
    }
})

app.delete('/students/:id', (req, res) => {
    const students = getStudentsData();
    const studentId = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === studentId)

    if(studentIndex !== false){
        const deletedStudent = students.splice(studentIndex, 1)

        saveStudentsData(students);

        res.json({
            message: 'Student deleted successfully',
            student: deletedStudent[0]
        })
    }
})

//Start the Express server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}/`)
})

