// open sidebar buttons
function toggleDiv(id) {
  $('#' + id).toggle();
}

// open add/edit forms inside index.html
function navigate(page) {
  switch (page) {
    case 'addCourse':
      $(".formPage").load('./forms/addCourse.html');
      break;
    case 'editCourse':
      $(".formPage").load('./forms/editCourse.html', () => coursesDrop('inputCourse'));
      break;
    case 'addCourseTrainers':
      $(".formPage").load('./forms/addCourseTrainers.html', () => {
        coursesDrop("selectCourseTrainers");
        trainersDrop("selectTrainer");
      });
      break;
    case 'editCourseTrainers':
      $(".formPage").load('./forms/editCourseTrainers.html', () => {
        courseTrainersDrop("editCourseTrainer");
        coursesDrop("selectCourseTrainers");
        trainersDrop("selectTrainer");
      });
      break;
    case 'addCourseStudents':
      $(".formPage").load('./forms/addCourseStudents.html', () => {
        coursesDrop("selectCourseStudent");
        studentsDrop("selectStudent");
      });
      break;
    case 'editCourseStudents':
      $(".formPage").load('./forms/editCourseStudents.html', () => {
        courseStudentDrop("editCourseStudent");
        coursesDrop("selectCourseStudent");
        studentsDrop("selectStudent");
      });
      break;
    case 'addCourseAssignments':
      $(".formPage").load('./forms/addCourseAssignments.html', () => {
        coursesDrop("selectCourseAssignment");
        assignmentDrop("selectAssignment");
      });
      break;
    case 'editCourseAssignments':
      $(".formPage").load('./forms/editCourseAssignments.html', () => {
        courseAssignmentDrop("editCourseAssignment");
        coursesDrop("selectCourseAssignment");
        assignmentDrop("selectAssignment");
      });
      break;
    case 'addTrainer':
      $(".formPage").load('./forms/addTrainers.html');
      break;
    case 'editTrainer' :
       $(".formPage").load('./forms/editTrainers.html', () => trainersDrop("editTrainer"));
      break;
    case 'addStudent':
        $(".formPage").load('./forms/addStudents.html');
      break;
    case 'editStudent' :
         $(".formPage").load('./forms/editStudents.html', () => studentsDrop("editStudent"));
      break;
    case 'addAssignment':
      $(".formPage").load('./forms/addAssignments.html');
      break;
    case 'editAssignment':
      $(".formPage").load('./forms/editAssignments.html', () => assignmentDrop("editAssignment"));
      break;
    case 'addAssignmentPerStudentsPerCourse':
      $(".formPage").load('./forms/addAssignmentsPerCoursePerStudent.html', () => {
        assignmentDrop("dropOfAssignment")
        studentsDrop("dropOfStudent")
        coursesDrop("dropOfCourses")
      });
      break;
    case 'editAssignmentPerStudentsPerCourse':
      $(".formPage").load('./forms/editAssignmentsPerCoursePerStudent.html', () => {
      assignmentsPerCoursesPerStudentsDrop("chooseAssignmentPerStudentPerCourse");
      assignmentDrop("dropOfAssignment")
      studentsDrop("dropOfStudent")
      coursesDrop("dropOfCourses")
    });
      break;
  }
}

function handleSubmit(type, isEdit) {
  switch (type) {
    case 'course':
      updateCourseData(isEdit);
      document.getElementById("formPage").innerHTML = showCourses();
      break;
    case 'courseTrainer':
      updateCourseTrainers(isEdit);
      document.getElementById("formPage").innerHTML = showCourseTrainers();
      break;
    case 'courseStudent':
      updateCourseStudents(isEdit);
      document.getElementById("formPage").innerHTML = showCourseStudents();
      break;
    case 'courseAssignment':
      updateCourseAssignments(isEdit);
      document.getElementById("formPage").innerHTML = showCourseAssignments();
      break;
    case 'trainer':
      updateTrainersData(isEdit);
      document.getElementById("formPage").innerHTML = showTrainers(); 
      break;
    case 'student':
      updateStudentsData(isEdit);
      document.getElementById("formPage").innerHTML = showStudents(); 
      break;
    case 'assignment':
      updateAssignmentsData(isEdit)
      document.getElementById("formPage").innerHTML = showAssignments(); 
      break;
    case 'assignmentPerStudentPerCourse':
      updateAssignmentsPerCoursesPerStudentsData(isEdit)
      document.getElementById("formPage").innerHTML = showAssignmentsPerCoursesPerStudents();
      break;
  }

  return false;
}

// h2 my school returns to index.html

function goHome() {
window.location.href="./index.html"
}

// Courses 

// Add/Edit course data function 
var courses = [];
function updateCourseData(isEdit) {
  var title = document.getElementById("title").value;
  var inputStream = document.getElementById("inputStream").value;
  var inputType = document.getElementById("inputType").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  if (isEdit) {
    var chooseCourse = document.getElementById("inputCourse").value;
    courses[chooseCourse] = { title, inputStream, inputType, startDate, endDate }
  } else {
    courses.push({ title, inputStream, inputType, startDate, endDate });
  }
}

//add students
// table of data for courses 
function showCourses() {
  var courseData = `
    <i onclick="navigate('./forms/addCourse.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Stream</th>
          <th scope="col">Type</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
        </tr>
      </thead>
      <tbody>`;
  // data from forms to table for courses 
  for(var i = 0; i < courses.length; i++) {
    courseData += "<tr>" +
                  "<td>" + courses[i].title + "</td>" + 
                  "<td>" + courses[i].inputStream + "</td>" +
                  "<td>" + courses[i].inputType + "</td>" +
                  "<td>" + courses[i].startDate + "</td>" +
                  "<td>" + courses[i].endDate + "</td>" +
                  "</tr>";
  }
  courseData += '</tbody></table>';

  return courseData;
}

//add course/trainers
//add course/trainers data

var courseTrainers = [];
function updateCourseTrainers(isEdit) {
  var courseId = document.getElementById("selectCourseTrainers").value;
  var trainerId = document.getElementById("selectTrainer").value;

  if(isEdit) {
    var chooseCourseTrainer = document.getElementById("editCourseTrainer").value;
    courseTrainers[chooseCourseTrainer] = {courseId, trainerId}
  } else {
    courseTrainers.push({courseId, trainerId});
  }
  
}

// table of data for course/trainers
function showCourseTrainers() {
  var courseTrainersData = `
    <i onclick="navigate('./forms/addCourseTrainers.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Trainer</th>
        </tr>
      </thead>
      <tbody>`;
  // data from forms to table
  for(var i = 0; i < courseTrainers.length; i++) {
    courseTrainersData += "<tr>" +
                            "<td>" + courses[courseTrainers[i].courseId].title + ' ' + 
                                    trainers[courseTrainers[i].trainerId].firstName + "</td>" +
                            "<td>" +  trainers[courseTrainers[i].trainerId].lasttName + "</td>" + 
                  "</tr>";
  }
  courseTrainersData += '</tbody></table>';

  return courseTrainersData;
}

//add course students
// enroll course Students

var courseStudents = [];
function updateCourseStudents(isEdit) {
  var courseId = document.getElementById("selectCourseStudent").value;
  var studentId = document.getElementById("selectStudent").value;
  if (isEdit) {
    var chooseCourseStudents = document.getElementById("editCourseStudent").value; 
    courseStudents[chooseCourseStudents] = {courseId, studentId}
  } else {
    courseStudents.push({courseId, studentId});
  }
  
}

function showCourseStudents() {
  var courseStudentsData = `
    <i onclick="navigate('./forms/addCourseStudents.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Students</th>
        </tr>
      </thead>
    <tbody>`;
    // data from forms to table
    for(var i = 0; i < courseStudents.length; i++) {
      courseStudentsData += "<tr>" +
                  "<td>" + courses[courseStudents[i].courseId].title + "</td>" + 
                  "<td>" + students[courseStudents[i].studentId].studentFirstName + ' ' + students[courseStudents[i].studentId].studentLastName + "</td>" +
                  "</tr>";
    }
    courseStudentsData += '</tbody></table>';

    return courseStudentsData;
}

// add course assignments
//create course Assignments

var courseAssignments = [];
function updateCourseAssignments(isEdit) {
  var courseId = document.getElementById("selectCourseAssignment").value;
  var assignmentId = document.getElementById("selectAssignment").value;

  if (isEdit) {
    var chooseCourseAssignments = document.getElementById("editCourseAssignment").value;
    courseAssignments[chooseCourseAssignments] = {courseId, assignmentId }
  } else {
    courseAssignments.push({courseId, assignmentId});
  }
}

// table of data for course/assignments

function showCourseAssignments() {
  var courseAssignmentsData = `
    <i onclick="navigate('./forms/addCourseAssignments.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Assignment</th>
        </tr>
      </thead>
    <tbody>`;
  // data from forms to table
  for(var i = 0; i < courseAssignments.length; i++) {
    courseAssignmentsData += "<tr>" +
                  "<td>" + courses[courseAssignments[i].courseId].title + "</td>" + 
                  "<td>" + assignments[courseAssignments[i].assignmentId].assignmentTitle + "</td>" +
                  "</tr>";
  }
  courseAssignmentsData += '</tbody></table>';

  return courseAssignmentsData;
}

//add Trainers
// add trainers data function

var trainers = [];
function updateTrainersData(isEdit) {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var inputSubject = document.getElementById("inputSubject").value;

  if(isEdit) {
    var chooseTrainer = document.getElementById("editTrainer").value;
    trainers[chooseTrainer] = {firstName, lastName, inputSubject}
  } else{
    trainers.push({firstName, lastName, inputSubject});
  }
}

// table of data for trainers

function showTrainers() {
  var trainersData = `
    <i onclick="navigate('./forms/addTrainers.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
    <tbody> `;

  // data from forms to table for trainers
  for(var i = 0; i < trainers.length; i++) {
    trainersData +=  "<tr>" +
                  "<td>" + trainers[i].firstName + "</td>" + 
                  "<td>" + trainers[i].lastName + "</td>" +
                  "<td>" + trainers[i].inputSubject + "</td>" +
                  "</tr>";  
  }
   trainersData += '</tbody></table>';

  return trainersData; 
}

// add Students
// add students data function 

var students = [];
function updateStudentsData (isEdit) {
  var studentFirstName = document.getElementById("studentFirstName").value;
  var studentLastName = document.getElementById("studentLastName").value;
  var dateOfBirthStudent = document.getElementById("dateOfBirthStudent").value;
  var tutionfees = document.getElementById("tutionfees").value;

  if(isEdit) {
    var chooseStudent = document.getElementById("editStudent").value;
    students[chooseStudent] = {studentFirstName, studentLastName, dateOfBirthStudent,tutionfees}
  } else {
    students.push({studentFirstName, studentLastName, dateOfBirthStudent, tutionfees});
  }
}
  

function showStudents() {
   var studentsData = `
    <i onclick="navigate('./forms/addTrainers.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date Of Birth</th>
          <th scope="col">Tution Fees</th>
        </tr>
      </thead>
    <tbody> `
  // data from forms to table for students
  for(var i = 0; i < students.length; i++) {
    studentsData +=  "<tr>"+
                  "<td>" + students[i].studentFirstName + "</td>" + 
                  "<td>" + students[i].studentLastName + "</td>" +
                  "<td>" + students[i].dateOfBirthStudent + "</td>" +
                  "<td>" + students[i].tutionfees + "</td>" +
                  "</tr>";
  }
   studentsData += '</tbody></table>';

  return studentsData; 
}

// add Assignments
// add assignment function 

var assignments = [];
function updateAssignmentsData(isEdit) {
  var assignmentTitle = document.getElementById("assignmentTitle").value;
  var descriptionAssignment = document.getElementById("descriptionAssignment").value;
  var dueDate = document.getElementById("dueDate").value;
  var oralMark = document.getElementById("oralMark").value;
  var totalMark = document.getElementById("totalMark").value;
  
  if(isEdit) {
    var chooseAssignment = document.getElementById("editAssignment").value;
    assignments[chooseAssignment] = {assignmentTitle, descriptionAssignment, dueDate, oralMark, totalMark}
  } else {
     assignments.push({assignmentTitle, descriptionAssignment, dueDate, oralMark, totalMark});
  }
}



function showAssignments() {
  var assignmentsData = `
    <i onclick="navigate('./forms/addTrainers.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Assignment Title</th>
          <th scope="col">Assignment Description</th>
          <th scope="col">Due Date</th>
          <th scope="col">Oral Mark</th>
          <th scope="col">Total Mark</th>
        </tr>
      </thead>
    <tbody> `;
  // data from forms to table
  for(var i = 0; i < assignments.length; i++) {
    assignmentsData +=  "<tr>" + 
                  "<td>" + assignments[i].assignmentTitle + "</td>" + 
                  "<td>" + assignments[i].descriptionAssignment + "</td>" +
                  "<td>" + assignments[i].dueDate + "</td>" +
                  "<td>" + assignments[i].oralMark + "</td>" +
                  "<td>" + assignments[i].totalMark + "</td>" +
                  "</tr>";
  }
   assignmentsData += '</tbody> <thead>';

  return assignmentsData;
}

// add Assignments Per Students Per Course 
// add data assignments per course per student 

var assignmentsPerCoursesPerStudents = []
function updateAssignmentsPerCoursesPerStudentsData(isEdit) {
  var dropOfAssignment = document.getElementById("dropOfAssignment").value;
  var dropOfStudent = document.getElementById("dropOfStudent").value;
  var dropOfCourses = document.getElementById("dropOfCourses").value;

  if(isEdit) {
    var chooseAssignmentsPerCoursesPerStudents = document.getElementById("chooseAssignmentPerStudentPerCourse").value;
    assignmentsPerCoursesPerStudents[chooseAssignmentsPerCoursesPerStudents] = {assignmentId: dropOfAssignment, studentId: dropOfStudent, courseId: dropOfCourses}
  } else {
    assignmentsPerCoursesPerStudents.push({assignmentId: dropOfAssignment, studentId: dropOfStudent, courseId: dropOfCourses})
  }  
}

function showAssignmentsPerCoursesPerStudents() {
  var assignmentsPerCoursesPerStudentsData = `
    <i onclick="navigate('./forms/addAssignmentsPerCoursePerStudent.html');" class="fa fa-window-close"></i>
    <table id="listElements" class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Assignment Title</th>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
        </tr>
      </thead>
    <tbody> `;
  // data from forms to table
  for(var i = 0; i < assignmentsPerCoursesPerStudents.length; i++) {
    var student = students[assignmentsPerCoursesPerStudents[i].studentId];
    assignmentsPerCoursesPerStudentsData +=  "<tr>" + 
                  "<td>" + assignments[assignmentsPerCoursesPerStudents[i].assignmentId].assignmentTitle + "</td>" + 
                  "<td>" + student.studentFirstName + ' ' + student.studentLastName + "</td>" +
                  "<td>" + courses[assignmentsPerCoursesPerStudents[i].courseId].title + "</td>" +
                  "</tr>";
  }
   assignmentsPerCoursesPerStudentsData += '</tbody> <thead>';
    return assignmentsPerCoursesPerStudentsData;
  
}

// edits 


// edit courses
// add courses to all course dropdowns with (jquery)
function coursesDrop(id) {
  for(var i = 0; i < courses.length; i++) {
    $('#' + id).append($('<option>', {
      value: i,
      text: courses[i].title
    }))
  }
}

function updateCourses() {
  console.log()
  var selectedCourse = courses[$('#inputCourse').val()];

  $('#title').val(selectedCourse.title);
  $('#inputStream').val(selectedCourse.inputStream);
  $('#inputType').val(selectedCourse.inputType);
  $('#startDate').val(selectedCourse.startDate);
  $('#endDate').val(selectedCourse.endDate);
  
}


//edit trainers
//add trainers to all trainers dropdowns with jquery

function trainersDrop(id) {
  for(var i = 0; i < trainers.length; i++) {
    $('#'+id).append($('<option>', {
      value: i,
      text: trainers[i].firstName + ' ' + trainers[i].lastName
  }));
}
}


function updateTrainers() {
   var selectedTrainer = trainers[$('#editTrainer').val()]
  
  $('#firstName').val(selectedTrainer.firstName);
  $('#lastName').val(selectedTrainer.lastName);
  $('#inputSubject').val(selectedTrainer.inputSubject);
}


// edit students
//add students to all trainers dropdowns with jquery

function studentsDrop(id) {
   for(var i = 0; i < students.length; i++) {
    $('#' +id).append($('<option>', {
      value:  i,
      text:  students[i].studentFirstName + ' ' + students[i].studentLastName
    }))
  }
}


function updateStudents() {
  var selectedStudent = students[$('#editStudent').val()]
   
  $('#studentFirstName').val(selectedStudent.studentFirstName);
  $('#studentLastName').val(selectedStudent.studentLastName);
  $('#dateOfBirthStudent').val(selectedStudent.dateOfBirthStudent);
  $('#tutionfees').val(selectedStudent.tutionfees);
}


// edit assignments
//add assignments to all trainers dropdowns with jquery

function assignmentDrop(id) {
  for(var i = 0; i < assignments.length; i++) {
    $('#'+ id).append($('<option>', {
      value: i,
      text: assignments[i].assignmentTitle
    }))
  }
}

function updateAssignments() {
  var selectedAssignments = assignments[$('#editAssignment').val()]

  $('#assignmentTitle').val(selectedAssignments.assignmentTitle);
  $('#descriptionAssignment').val(selectedAssignments.descriptionAssignment);
  $('#dueDate').val(selectedAssignments.dueDate);
  $('#oralMark').val(selectedAssignments.oralMark);
  $('#totalMark').val(selectedAssignments.totalMark);
}

// add/edit  course trainers 
// create option for course trainers dropdown

function courseTrainersDrop(id) {
  for(var i = 0; i < courseTrainers.length; i++) {
    $('#'+id).append($('<option>',{
      value: i,
      text: courses[courseTrainers[i].courseId].title + ' - ' + trainers[courseTrainers[i].trainerId].firstName + ' ' + trainers[courseTrainers[i].trainerId].lastName
    }));
  }
}

// add/edit course students 
// create option for course students dropdown

function courseStudentDrop(id) {
  for(var i = 0; i < courseStudents.length; i++) {
    $('#'+id).append($('<option>',{
      value: i,
      text: courses[courseStudents[i].courseId].title + ' - ' + students[courseStudents[i].studentId].studentFirstName + ' ' + students[courseStudents[i].studentId].studentLastName
    }));
  }
}

// add edit course assignments
// create option for course assignments dropdown

function courseAssignmentDrop(id) {
  for(var i = 0; i < courseAssignments.length; i++) {
    $('#'+id).append($('<option>',{
      value: i,
      text: courses[courseAssignments[i].courseId].title + ' - ' + assignments[courseAssignments[i].assignmentId].assignmentTitle
    }));
  }
}

function assignmentsPerCoursesPerStudentsDrop(id) {
  for(var i = 0; i < assignmentsPerCoursesPerStudents.length; i++) {
    $('#'+id).append($('<option>',{
      value: i,
      text: courses[assignmentsPerCoursesPerStudents[i].courseId].title + ' - ' + assignments[assignmentsPerCoursesPerStudents[i].assignmentId].assignmentTitle + ' - ' + 
      students[assignmentsPerCoursesPerStudents[i].studentId].studentFirstName + ' ' + students[assignmentsPerCoursesPerStudents[i].studentId].studentFirstName
    }));
  }
}
 
// Validation functions

// virables for validation
var eighteenYearsAgo = createDate(0,0,-18)
var today = new Date();


function onlyLetters(text) { 
  var letters = /^[A-Za-z]+$/;
  if(text.match(letters)) {
      return true; 
  } else {
    alert('Please input alphabet characters only');
      return false;
  }
}

// dates validation 
function dateCompare(firstDate, secondDate){
  if (new Date(secondDate) > new Date(firstDate)) {
    return true;
  } else {
    alert('Please make sure dates are correct');
    return false;
  }
}

// valid if student is over 18 

function createDate(days, months, years) {
  var date = new Date(); 
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;    
}
