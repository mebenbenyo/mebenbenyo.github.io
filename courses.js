// SEARCH FUNCTION

// get references to the search bar and clear button
const searchbar = document.getElementById('searchbar');
const clearbar = document.getElementById('searchbtn');
// add keyup event listener to search bar
searchbar.addEventListener('keyup', search_course);
//funtion that iterates over input and displays course if input is found
const allCourses = document.getElementsByClassName('course');
function search_course() {
    let input = searchbar.value.toLowerCase();
    let x = document.getElementsByClassName('course');

    for(i = 0; i < x.length; i++) {
        if (input === "") {
            x[i].style.display = "block";
        } else if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "block";
        }
        else {
            x[i].style.display = "none";
        }
    }
}
// add click event listener to clear button
searchbtn.addEventListener('click', clearInput);
//Function to Clear Search bar 
function clearInput(){
    searchbar.value = "";
    for (let i = 0; i < allCourses.length; i++) {
        allCourses[i].style.display = "block"; // Display all courses
    }
}


// FILTER BY FUNCTION

// get references to the buttons
const levelOneBtn = document.getElementById('filterbtn1');
const levelTwoBtn = document.getElementById('filterbtn2');
const levelThreeBtn = document.getElementById('filterbtn3');
const allBtn = document.getElementById('allbtn');
// get references to the div/classes
const levelOneElements = document.querySelectorAll('.level-one');
const levelTwoElements = document.querySelectorAll('.level-two');
const levelThreeElements = document.querySelectorAll('.level-three');
const allElements = document.querySelectorAll('.course');
// add click event listener and filter to level one button
levelOneBtn.addEventListener('click', () => {
hideElements();
showElements(levelOneElements);
});
// add click event listener and filter to level two button
levelTwoBtn.addEventListener('click', () => {
hideElements();
showElements(levelTwoElements);
});
// add click event listener and filter to level three button
levelThreeBtn.addEventListener('click', () => {
    hideElements();
    showElements(levelThreeElements);
    });
// add click event listener to show all button
allBtn.addEventListener('click', () => {
hideElements();
showElements(allElements);
});
// function to hide elements not in filter category
function hideElements() {
document.querySelectorAll('.course').forEach(el => {
    el.style.display = 'none';
});
}
// function to show elements in filter category
function showElements(elements) {
elements.forEach(el => {
    el.style.display = 'block';
});
}


// SORT FUNCTION

// function sortLevel(order) {
//     // Select the divs for the courses 
//     let courses = document.querySelectorAll('.row ');
//     //Convert the list of courses from a collection to an array; used for comparison between level 1 and 2
//     let sortedCourses = Array.from(courses).sort(function(a, b) {
//         let aLevel = parseInt(a.querySelector('.courselevel').textContent.match(/\d+/)[0]);
//         let bLevel = parseInt(b.querySelector('.courselevel').textContent.match(/\d+/)[0]);
//         if (order === 'asc') {
//             return aLevel - bLevel
//         } else if (order === 'desc') {
//             return bLevel - aLevel;
//         }
//     }); 
//     let coursesList = document.querySelector('.album');
//     coursesList.innerHTML = '';
//     sortedCourses.forEach(function(course) {
//         coursesList.appendChild(course);
        
//     });

// }

