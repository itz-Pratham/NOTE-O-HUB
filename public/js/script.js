const collegeDropdown = document.getElementById('collegeDropdown');
const branchesContainer = document.getElementById('branchesContainer');
const courseCardsContainer = document.getElementById('courseCards');
const collegeContent = document.getElementById('collegeContent');

// Sample course data for each college and branch
const courseData = {
    bpit: {
        mba: ["MBA"],
        bba: ["BBA "],
        btech: ["CSE", "IT","ECE"],
        mtech: ["CSE", "IT","ECE"],
    },
    dtu: {
        mba: ["MBA"],
        btech: ["CSE", "IT","ECE"],
        mtech: ["CSE", "IT", "ECE"]
    },
    srcc: {
        mba: ["MBA"],
        btech: ["CSE", "IT","ECE"],
        mtech: ["CSE", "IT","ECE"],
    }
    // Add more colleges and their courses as needed
};
let selectedBranchButton = null;

// Populate branch buttons when college is selected
collegeDropdown.addEventListener('change', (event) => {
    const selectedCollege = event.target.value;
    if (selectedCollege) {
        branchesContainer.innerHTML = '';
        Object.keys(courseData[selectedCollege]).forEach(branch => {
            const branchButton = document.createElement('button');
            branchButton.textContent = branch.toUpperCase();
            branchButton.classList.add('course-button');
            branchButton.addEventListener('click', () => {
                
                displayCourses(selectedCollege, branch);
                toggleBranchHighlight(branchButton);
            });
           
            branchesContainer.appendChild(branchButton);
        });
        collegeContent.style.display = 'block';
    } else {
        collegeContent.style.display = 'none';
    }
});

// Display courses when a branch button is clicked
function displayCourses(college, branch) {
    const courses = courseData[college][branch];
    courseCardsContainer.innerHTML = '';
    courses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.textContent = course;
        courseButton.classList.add('course-button');
        courseButton.addEventListener('click', () => {
            window.location.href = `/${course.toLowerCase()}`;
        });
        courseCardsContainer.appendChild(courseButton);
    });
    courseCardsContainer.style.display = 'flex';
}
function toggleBranchHighlight(branchButton) {
    if (selectedBranchButton) {
        selectedBranchButton.classList.remove('highlighted');
    }
    branchButton.classList.add('highlighted');
    selectedBranchButton = branchButton;
}
