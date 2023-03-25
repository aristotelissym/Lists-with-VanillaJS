const courseName = document.querySelector('#input-course');
const courseRating = document.querySelector('#input-rating-course');
const addCourse = document.querySelector('#btn-add-course');
const coursesList = document.querySelector('#courses-list');
const totalCoursesOutput = document.querySelector('#total-courses');

let totalCourses = 0;

addCourse.addEventListener('click', () => {
    const courseInput = courseName.value;
    const ratingInput = courseRating.value;

    if (courseInput.trim().length <=0 || ratingInput <=0 || ratingInput.trim().length <=0) {
        return;
    }

    console.log(courseInput + ratingInput);

    const newItem = document.createElement('ion-item');
    newItem.textContent = courseInput + "- " + ratingInput+"/5";
    coursesList.appendChild(newItem);
    totalCourses += 1;
    totalCoursesOutput.textContent = totalCourses;

})