
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];
    
    
    function courseStart(courses,CourseId){

    let startOfCourse;
    
        for(i = 0; i < courses.length; i++){
            let course = courses[i].CourseId
        if(course == CourseId){
            startOfCourse = courses[i].StartDate
            return startOfCourse;
        }
        }

    return startOfCourse;

    }
 
    
   function titleOfCourse(courses,CourseId){
    
    let titleOfCourse;

        for(i = 0; i < courses.length; i++){
            let course = courses[i].CourseId
            if(course == CourseId){
                titleOfCourse = courses[i].Title;
                return titleOfCourse;
            }
        }

    }

    

    function fiftyDollarsOrLess(courses){

        const classesBelow50 = []

        for(i = 0; i < courses.length; i++){
            let course = parseFloat(courses[i].Fee)
            if(course <= 50){
                classesBelow50.push(courses[i].Title)
            }
        }
        return classesBelow50;
    }


    function classesLocation(courses, Location){

        const classesInSamePlace = []

        for(i = 0; i< courses.length; i++){
            let course = courses[i].Location
            if(course == Location ){
                classesInSamePlace.push(courses[i]);
            }
        }
        return classesInSamePlace;
        }
    
        console.log(courseStart(courses,"PROG200")) 
        console.log(titleOfCourse(courses,"PROJ500")) 
        console.log(fiftyDollarsOrLess(courses));
        console.log(classesLocation(courses, "Classroom 1"));