// let userDetails = {
//     firstName: "kanchanlata",
//     lastName: "kujur",
//     role: "admin",
//     logicCount: 25,

// };

// console.log(userDetails.firstName);
// console.log(userDetails['lastName']);
// not write way


// mini program

let userDetailsCourse = {
    firstName: "kanchanlata",
    lastName: "kujur",
    role: "student",
    googleLogin: "true",
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return`${this.firstName} is enrolled in ${this.courseList.length} courses`
    },
}

// console.log(userDetailsCourse.firstName);
// userDetailsCourse.buyCourse("ProBackend");
// userDetailsCourse.buyCourse("Reactjs");
// console.log(userDetailsCourse.courseList);
// console.log(userDetailsCourse.getCourseCount());

// p
