//load module node-persist
var storage = require('node-persist');

//load local database
storage.initSync({
dir : "students"
});

function getAllStudents(){

}

function getStudent(studentId){
}

function addStudent(id,fullname){
}

function removeStudent(studentId){

}

function editStudent(studentId,studentName){
}

function showStudents(){
}
