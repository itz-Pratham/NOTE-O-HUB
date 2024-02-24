const collegeDropdown = document.getElementById('collegeDropdown');
const branchButtonsContainer = document.getElementById('branchButtons');
const courseCardsContainer = document.getElementById('courseCards');
const collegeContent = document.getElementById('collegeContent');

// Sample course data for each college and branch
const courseData = {
    college1: {
        mba: ["MBA Course 1"],
        bba: ["BBA Course 1"],
        btech: ["B.Tech CSE", "B.Tech IT", "B.Tech ECE"],
        mtech: ["M.Tech CSE"]
    },
    college2: {
        mba: ["MBA Course 1"],
        btech: ["B.Tech CSE", "B.Tech IT"],
        mtech: ["M.Tech CSE", "M.Tech IT", "M.Tech ECE"]
    },
    college3: {
        mba: ["MBA Course 1"],
        bCom: [ "B.Com "],
        mCom: ["M.Com"]
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