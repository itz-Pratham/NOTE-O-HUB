const collegeDropdown = document.getElementById('collegeDropdown');
const branchButtonsContainer = document.getElementById('branchButtons');
const courseCardsContainer = document.getElementById('courseCards');
const collegeContent = document.getElementById('collegeContent');

// Sample course data for each college and branch
const courseData = {
    college1: {
        mba: ["MBA Course 1", "MBA Course 2", "MBA Course 3"],
        bba: ["BBA Course 1", "BBA Course 2"],
        btech: ["B.Tech Course 1", "B.Tech Course 2", "B.Tech Course 3"],
        mtech: ["M.Tech Course 1"]
    },
    college2: {
        mba: ["MBA Course 1", "MBA Course 2", "MBA Course 3", "MBA Course 4"],
        btech: ["B.Tech Course 1", "B.Tech Course 2"],
        mtech: ["M.Tech Course 1", "M.Tech Course 2", "M.Tech Course 3"]
    }
    // Add more colleges and their courses as needed
};

// Populate branch buttons when college is selected
collegeDropdown.addEventListener('change', (event) => {
    const selectedCollege = event.target.value;
    if (selectedCollege) {
        branchButtonsContainer.innerHTML = '';
        Object.keys(courseData[selectedCollege]).forEach(branch => {
            const button = document.createElement('button');
            button.textContent = branch.toUpperCase();
            button.classList.add('branch-button');
            button.addEventListener('click', () => showCourses(selectedCollege, branch));
            branchButtonsContainer.appendChild(button);
        });
        branchButtonsContainer.style.display = 'flex';
        collegeContent.style.display = 'block';
    } else {
        branchButtonsContainer.style.display = 'none';
        collegeContent.style.display = 'none';
    }
});

// Show courses for the selected branch
function showCourses(college, branch) {
    const courses = courseData[college][branch];
    if (courses) {
        courseCardsContainer.innerHTML = '';
        courses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('course-card');
            card.textContent = course;
            courseCardsContainer.appendChild(card);
        });
        courseCardsContainer.style.display = 'flex';
    } else {
        courseCardsContainer.style.display = 'none';
    }
}
