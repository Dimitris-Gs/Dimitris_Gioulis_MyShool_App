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
        coursesDrop("editCourse");
        trainersDrop("editTrainer");
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
        coursesDrop("editCourse");
        studentsDrop("editStudent");
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
        coursesDrop("editCourse");
        assignmentDrop("editAssignment");
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
      assignmentDrop("editDropAssignment")
      studentsDrop("editDropStudents")
      coursesDrop("editDropCourses")
    });
      break;
  }
}

function handleAdd(type) {
  switch (type) {
    case 'course':
      addCourseData();
      document.getElementById("formPage").innerHTML = showCourses();
      break;
    case 'courseTrainer':
      addCourseTrainers();
      document.getElementById("formPage").innerHTML = showCourseTrainers();
      break;
    case 'courseStudent':
      addCourseStudents();
      document.getElementById("formPage").innerHTML = showCourseStudents();
      break;
    case 'courseAssignment':
      addCourseAssignments();
      document.getElementById("formPage").innerHTML = showCourseAssignments();
      break;
    case 'trainer':
      addTrainers();
      document.getElementById("formPage").innerHTML = showTrainers(); 
      break;
    case 'student':
      addstudents();
      document.getElementById("formPage").innerHTML = showStudents(); 
      break;
    case 'assignment':
      addAssignments()
      document.getElementById("formPage").innerHTML = showAssignments(); 
      break;
    case 'assignmentPerStudentPerCourse':
      addAssignmentsPerCoursesPerStudents()
      document.getElementById("formPage").innerHTML = showAssignmentsPerCoursesPerStudents();
      break;
  }

  return false;
}

function handleEdit(type) {
  switch (type) {
    case 'course':
      // addCourseData();
      document.getElementById("formPage").innerHTML = showCourses();
      break;
    case 'courseTrainer':
      // addCourseTrainers();
      document.getElementById("formPage").innerHTML = showCourseTrainers();
      break;
    case 'courseStudent':
      // addCourseStudents();
      document.getElementById("formPage").innerHTML = showCourseStudents();
      break;
    case 'courseAssignment':
      // addCourseAssignments();
      document.getElementById("formPage").innerHTML = showCourseAssignments();
      break;
    case 'trainer':
      // addTrainers();
      document.getElementById("formPage").innerHTML = showTrainers(); 
      break;
    case 'student':
      // addstudents();
      document.getElementById("formPage").innerHTML = showStudents(); 
      break;
    case 'assignment':
      // addAssignments()
      document.getElementById("formPage").innerHTML = showAssignments(); 
      break;
    case 'assignmentPerStudentPerCourse':
      // addAssignmentsPerCoursesPerStudents()
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

// Add course data function 
var courses = [];
function addCourseData() {
  var title = document.getElementById("title");
  var inputStream = document.getElementById("inputStream");
  var inputType = document.getElementById("inputType");
  var startDate = document.getElementById("startDate");
  var endDate = document.getElementById("endDate");

  courses.push({title: title.value, inputStream: inputStream.value, inputType: inputType.value, startDate: startDate.value, endDate: endDate.value});
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
function addCourseTrainers() {
  var courseId = document.getElementById("selectCourseTrainers").value;
  var trainerId = document.getElementById("selectTrainer").value;

  courseTrainers.push({courseId, trainerId});
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
                            "<td>" + trainers[courseTrainers[i].trainerId].firstName + ' ' + 
                            trainers[courseTrainers[i].trainerId].lastName + "</td>" +
                            "<td>" + courses[courseTrainers[i].courseId].title + "</td>" + 
                  "</tr>";
  }
  courseTrainersData += '</tbody></table>';

  return courseTrainersData;
}

//add course students
// enroll course Students

var courseStudents = [];
function addCourseStudents() {
  var courseId = document.getElementById("selectCourseStudent").value;
  var studentId = document.getElementById("selectStudent").value;

  courseStudents.push({courseId, studentId});
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
function addCourseAssignments() {
  var courseId = document.getElementById("selectCourseAssignment").value;
  var assignmentId = document.getElementById("selectAssignment").value;

  courseAssignments.push({courseId, assignmentId});
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
function addTrainers () {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var inputSubject = document.getElementById("inputSubject");

  trainers.push({firstName: firstName.value, lastName: lastName.value, inputSubject: inputSubject.value });
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
function addstudents () {
  var studentFirstName = document.getElementById("studentFirstName");
  var studentLastName = document.getElementById("studentLastName");
  var dateOfBirthStudent = document.getElementById("dateOfBirthStudent");
  var tutionfees = document.getElementById("tutionfees");

  students.push({studentFirstName: studentFirstName.value, studentLastName: studentLastName.value, dateOfBirthStudent: dateOfBirthStudent.value, tutionfees: tutionfees.value });
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
function addAssignments() {
  var assignmentTitle = document.getElementById("assignmentTitle");
  var descriptionAssignment = document.getElementById("descriptionAssignment");
  var dueDate = document.getElementById("dueDate");
  var oralMark = document.getElementById("oralMark");
  var totalMark = document.getElementById("totalMark");

  assignments.push({assignmentTitle: assignmentTitle.value, descriptionAssignment: descriptionAssignment.value, dueDate: dueDate.value, oralMark: oralMark.value, totalMark: totalMark.value });
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
function addAssignmentsPerCoursesPerStudents() {
  var dropOfAssignment = document.getElementById("dropOfAssignment")
  var dropOfStudent = document.getElementById("dropOfStudent")
  var dropOfCourses = document.getElementById("dropOfCourses")

  assignmentsPerCoursesPerStudents.push({assignmentId: dropOfAssignment.value, studentId: dropOfStudent.value, courseId: dropOfCourses.value  })
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
    <tbody>
    <thead> `;
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
  
  $('#editfirstName').val(selectedTrainer.firstName);
  $('#editLastName').val(selectedTrainer.lastName);
  $('#editSubject').val(selectedTrainer.inputSubject);
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
      text: courses[assignmentsPerCoursesPerStudents[i].courseId].title + ' - ' +     assignments[assignmentsPerCoursesPerStudents[i].assignmentId].assignmentTitle + ' - ' + 
      students[assignmentsPerCoursesPerStudents[i].studentId].studentFirstName + ' ' + students[assignmentsPerCoursesPerStudents[i].studentId].studentFirstName
    }));
  }
}
 
// Validation functions

// function validate(type) {
//   switch (type) {
//     case letters = /^[A-Za-z]+$/ : 
//     if (inputtxt.value.match(letters)) {
//       return true;
//     } else {
//       alert ("Only Letters")
//       return false;
//     }
//   }
  
// }
function onlyLetters(text) { 
      var letters = /^[A-Za-z]+$/;
      if(text.value.match(letters)) {
          return true; 
      } else {
        alert('Please input alphabet characters only');
          return false;
      }
}

// dates validation 

function dateCompare(startDay, endDay){
    return new Date(endDay) > new Date(startDay);
}

// valid if student is over 18 

function createDate(days, months, years) {
        var date = new Date(); 
        date.setDate(date.getDate() + days);
        date.setMonth(date.getMonth() + months);
        date.setFullYear(date.getFullYear() + years);
        return date;    
    }

var newdate = createDate(0,0,-18)

function studentDate(birthDate, today) {
  return new Date(birthDate) > new Date(today)
}


