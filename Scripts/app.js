/*
  Full Name: ANSALA
  Student ID: KC03F93
  Date Completed: 30-01-2024
*/

// PROJECTS DATA
const projectsData = [
    {
        title: 'Mainframe - File Operations',
        description: 'Learned to do input-output file operations in COBOL programming language for zOS Mainframe (IBM).',
        imageUrl: '/Assets/images/project-1.png',
    },
    {
        title: 'ICE-Starter',
        description: 'Learned HTML and JavaScript validations for forms, worked on form submissions and error handling mechanisms.',
        imageUrl: '/Assets/images/project-2.png',
    },
    {
        title: 'WEBD6201 Client Scripting',
        description: 'Learned DOM Manipulation by investigating and identifying elements and attributes within an in-depth DOM.',
        imageUrl: '/Assets/images/project-3.png',
    },
];

// SERVICES DATA
const servicesData = [
    {
        title: 'Web Design',
        description: 'Solutions on HTML5, CSS3, Javascript. Frameworks like Angular, React.js and Next.js',
        imageUrl: '/Assets/images/services-1.jpg',
    },
    {
        title: 'Mobile Development',
        description: 'Providing robust and scalable mobile applications in Flutter and native Android with Firebase integration.',
        imageUrl: '/Assets/images/services-2.jpg',
    },
    {
        title: 'Java Programming',
        description: 'Business solutions on Spring boot, Hibernate, Liquibase microservice architecture applications.',
        imageUrl: '/Assets/images/services-3.jpg',
    },
];

// ABOUT DATA
const aboutData = [
    {
        name: 'Ansala',
        role: 'Frontend Developer',
        experience: '5+ years',
        imageUrl: '/Assets/images/about-1.jpg',
        resumeLink: '/resumes/resume-1.pdf',
    },
    {
        name: 'Susan Turner',
        role: 'Mobile Developer',
        experience: '10+ years',
        imageUrl: '/Assets/images/about-2.jpg',
        resumeLink: '/resumes/resume-2.pdf',
    },
    {
        name: 'John Doe',
        role: 'Backend Developer',
        experience: '3 years',
        imageUrl: '/Assets/images/about-3.jpg',
        resumeLink: '/resumes/resume-3.pdf',
    },
];


// Called when page is loaded
document.addEventListener('DOMContentLoaded', function () {
    let page = window.location.pathname;

    // call function to change products in navlink to projects
    changeNavbarProductToProjects();

    // call function to add Human Resources link in between About us and Contact us links
    addHumanResourcesNavLink();

    // call function to set the fixed bottom navbar with copyright and year
    createBottomNavbar();

    // Get all navbar links
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Checking page to determine appropriate content to be set
    switch(page){
        case "/index.html":{
            navLinks[0].classList.add('active'); // activate navlink by adding active class
            break;
        }
        case "/products.html":{
            navLinks[1].classList.add('active');
            // Get the section element where project details will be injected
            const projectSection = document.getElementById('project');

            // Loop through the project data
            projectsData.forEach(project => {
                // Create project text container
                const projectTextContainer = document.createElement('div');
                projectTextContainer.classList.add('project-text-container', 'bg-dark');

                // Create project text content
                const projectTextContent = `
                    <div>
                        <h1 class="big-text">${project.title}</h1>
                        <p>${project.description}</p>
                    </div>
                    <img src="${project.imageUrl}" alt="${project.title}">
                `;

                // Set content for project text container
                projectTextContainer.innerHTML = projectTextContent;

                // Append the project text container to the project section
                projectSection.appendChild(projectTextContainer);
            });
            break;
        }
        case "/services.html":{
            navLinks[2].classList.add('active');
            
            // Get the section element where service details will be injected
            const servicesSection = document.getElementById('services');

            // Create a container for the service items
            const servicesItemsContainer = document.createElement('div');
            servicesItemsContainer.classList.add('d-flex');

            // Loop through the services data
            servicesData.forEach(service => {
                // Create service text container
                const serviceTextContainer = document.createElement('div');
                serviceTextContainer.classList.add('services-text-container', 'bg-dark');

                // Create service text content
                const serviceTextContent = `
                    <img src="${service.imageUrl}" alt="${service.title}">
                    <div>
                        <h1>${service.title}</h1>
                        <p>${service.description}</p>
                    </div>
                `;

                // Set content for service text container
                serviceTextContainer.innerHTML = serviceTextContent;

                // Append the service text container to the services items container
                servicesItemsContainer.appendChild(serviceTextContainer);
            });

            // Append the services items container to the services container
            servicesSection.appendChild(servicesItemsContainer);
            break;
        }
        case "/about.html":{
            navLinks[3].classList.add('active');
            // Get the section element where team details will be injected
            const aboutSection = document.getElementById('about');

            // Create a container for the about
            const aboutContainer = document.createElement('div');
            aboutContainer.classList.add('d-flex', 'justify-content-end');

            // Loop through the about data
            aboutData.forEach(member => {
                // Create about text container
                const aboutTextContainer = document.createElement('div');
                aboutTextContainer.classList.add('about-text-container', 'align-items-start', 'bg-dark');

                // Create about text content
                const aboutTextContent = `
                    <img src="${member.imageUrl}" alt="${member.name}">
                    <div>
                        <h1>${member.name}</h1>
                        <span class="d-block">${member.role}</span>
                        <small class="text-secondary d-block mb-4">${member.experience}</small>
                        <a href="${member.resumeLink}" class="text-primary">Resume</a>
                    </div>
                `;

                // Set content for about text container
                aboutTextContainer.innerHTML = aboutTextContent;

                // Append the about member text container to the about members container
                aboutContainer.appendChild(aboutTextContainer);
            });

            // Append the about container to the about container
            aboutSection.appendChild(aboutContainer);
            break;
        }
        case "/contact.html":{
            navLinks[4].classList.add('active');
            break;
        }
    }
});

// Contact Form submission function
function onContactFormSubmit() {
    // Get form input values
    const name = document.getElementById('name').value;
    const contactNumber = document.getElementById('contact-no').value;
    const email = document.getElementById('email').value;
    const shortMessage = document.getElementById('short-message').value;

    // Log contact information to the console
    console.log('Contact Information:');
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    console.log('Email:', email);
    console.log('Short Message:', shortMessage);

    // Start a timer to redirect after 3 seconds
    setTimeout(function () {
        // Redirect to the Home Page
        window.location.href = 'index.html';
    }, 3000);

    // Prevent the default form submission
    return false;
}

// Function to change 'Products' in navbar to 'Projects'
function changeNavbarProductToProjects(){
    // Get the products link which is the second one in the list of nav links
    const productsLink = document.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link');

    // Change the text content of the 'Products' link to 'Projects'
    if (productsLink) {
        productsLink.innerHTML = '<i class="fa-solid fa-table-cells"></i> Projects';
    }
}

// Function to add Human Resources link in between About us and Contact us links
function addHumanResourcesNavLink() {
     // Create new list item for the Human Resources link
     const humanResourceNavItem = document.createElement('li');
     humanResourceNavItem.classList.add('nav-item');
 
     // Create nav link element for Human Resources
     const humanResourceNavLink = document.createElement('a');
     humanResourceNavLink.classList.add('nav-link');
     humanResourceNavLink.setAttribute('href', '#');
 
     // Add font-icon using Font-Awesome
     const iconElement = document.createElement('i');
     iconElement.classList.add('fa-solid', 'fa-users');
 
     // Set the text for nav link
     humanResourceNavLink.appendChild(iconElement);
     humanResourceNavLink.appendChild(document.createTextNode(' Human Resources'));
 
     // Append nav link to the navbar list
     humanResourceNavItem.appendChild(humanResourceNavLink);
 
     // Get the position to insert
     const aboutLink = document.querySelector('.navbar-nav .nav-item:nth-child(4)'); // About us is 4th element
     const contactLink = document.querySelector('.navbar-nav .nav-item:nth-child(5)'); // Contact us is 5th element
 
     // Insert the link before contact us
     if (aboutLink && contactLink) {
         aboutLink.parentNode.insertBefore(humanResourceNavItem, contactLink);
     }
}

// Function to set the fixed bottom navbar with copyright and year
function createBottomNavbar() {

    // Create fixed bottom navbar container
    const bottomNavbarContainer = document.createElement('nav');
    bottomNavbarContainer.classList.add('navbar', 'navbar-dark', 'bg-dark', 'fixed-bottom','shadow-footer');

    // Create container for the copyright and year
    const copyrightContainer = document.createElement('div');
    copyrightContainer.classList.add('container-fluid');

    // Create copyright and year element
    const copyrightStatement = document.createElement('span');
    copyrightStatement.classList.add('navbar-text');
    copyrightStatement.textContent = `© CopyRight ${new Date().getFullYear()}`;

    // Append the copyright statement to the container
    copyrightContainer.appendChild(copyrightStatement);

    // Append the copyright container to the bottom navbar
    bottomNavbarContainer.appendChild(copyrightContainer);

    // Append the bottom navbar to the body
    document.body.appendChild(bottomNavbarContainer);
}


// ====================== LAB 2 =========================

// User Class
class User {
    // constructor that assign values to properties
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    
    // LOGIN PAGE

    // Function to handle login form submit
    $(document).on('submit','#login-form',function(event) {
        event.preventDefault();  // Prevent default behaviour
        var username = $('#username').val();
        var usernameLink = $('<li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-user"></i> ' + username + '</a></li>');

        // insert before last element making it in between contact and login/logout link
        usernameLink.insertBefore('.navbar-nav .nav-item:last-child');
    });

    // REGISTER PAGE

    // Function to handle input event on firstname lastname input fields of register form
    // to check condition for min length of 2 characters
    $(document).on('input','#firstname, #lastname', function() {
        var firstnameLength = $('#firstname').val().trim().length;
        var lastnameLength = $('#lastname').val().trim().length;

        if (firstnameLength < 2 || lastnameLength < 2) {
            $('#ErrorMessage').html('First name and last name must be at least 2 characters.').show();
        } else {
            $('#ErrorMessage').hide();
        }
    });

    // Function to handle input event on email input field of register form
    // to check condition for min length of 8 characters and whether it contains @ symbol
    $(document).on('input','#email', function() {
        var email = $('#email').val().trim();
        var atIndex = email.indexOf('@');

        if (email.length < 8 || atIndex === -1) {
            $('#ErrorMessage').html('Email must be at least 8 characters and must contain an "@" symbol.').show();
        } else {
            $('#ErrorMessage').hide();
        }
    });

    // Function to handle input event on password input fields of register form
    // to check equality of password and confirm password and whether password is at least 6 characters
    $(document).on('input','#password, #confirm-password', function() {
        var password = $('#password').val().trim();
        var confirmPassword = $('#confirm-password').val().trim();

        if (password.length < 6) {
            $('#ErrorMessage').html('Password must be at least 6 characters long.').show();
        } else if (password !== confirmPassword) {
            $('#ErrorMessage').html('Passwords do not match.').show();
        } else {
            $('#ErrorMessage').hide();
        }
    });

    // Function to handle register form submit
    $(document).on('submit','#register-form',function(event) {
        event.preventDefault();  // Prevent default behaviour
    
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();

        // Creating instance of User class
        var user = new User(firstname, lastname, email, password);
        
        // Logging user instance in console
        console.log(user);

        //Finally resetting the form
        $(this)[0].reset();
    });

})();

