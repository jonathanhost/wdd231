
import { courses } from "./courses.js";
const lastModified = document.querySelector("#lastModified");
const coursesContainer = document.querySelector(".courses-list");
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");
const wddButton = document.querySelector("#card-wdd");
const cseButton = document.querySelector("#card-cse");
const allButton = document.querySelector("#card-all");
const wddCourses = courses.filter(course => course.subject === "WDD");
const cseCourses = courses.filter(course => course.subject === "CSE");
const allCourses = courses
const credits = document.querySelector("#credits");
const courseDetails = document.querySelector("#course-details")
let currentCourses = [];

let creditsTotal = 0;
function displayCourses(courseList) {

    currentCourses = courseList;

    coursesContainer.innerHTML = courseList.map((course, index) => `
        <div class="course ${course.completed ? "completed" : ""}"
             data-index="${index}">

            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>

        </div>
    `).join("");

    const creditsTotal = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    credits.textContent = creditsTotal;
}

displayCourses(allCourses)

wddButton.addEventListener("click", () => {
    displayCourses(wddCourses)
    
});

cseButton.addEventListener("click", () => {
     displayCourses(cseCourses)
    
});

allButton.addEventListener("click", () => {
      displayCourses(allCourses)
});


if (lastModified) {

    lastModified.textContent = document.lastModified;
}


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

});

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal" aria-label="Close">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  courseDetails.querySelector('#closeModal').addEventListener('click', () => {
    courseDetails.close();
  });
}

// Close the modal when the user clicks outside of it (on the backdrop)
courseDetails.addEventListener('click', (event) => {
    console.log('abriu courseDetails')
  if (event.target === courseDetails) {
    courseDetails.close();
  }
});
coursesContainer.addEventListener("click", (event) => {

    const selectedCourse = event.target.closest(".course");

    if (!selectedCourse) return;

    const index = selectedCourse.dataset.index;

    displayCourseDetails(currentCourses[index]);

});


