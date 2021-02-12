========================================First Priority things ====================================
## Admin Dashboard
    For All Create / Edit / Delete Actions the table should be updated automatically

    Redirect to home page after logout (done)
    Middlewares to pages 
    Fix design left sidebar 
    --show User Picture in navbar (if there is none show the first letter of his firstName)

    Main Page : 
        Show number of students / teachers / Guests / Administrators 
        Number of students by training 

    Users : 
        Validation Issues 
        Check for Edit problems 
        The user should not be forced to give his cne / cin 
        The user should have cne / cin if he's a student 
        teacher also should give his cin 

    Events : 
        Validation Issues
        Edit Event
        Event Should have a description 
    
    Trainings : 
        Put Training Route in the sidebar (done)

    Grades : 
        Listing (done)
        Create (done)
        Delete (done)
        Update 
    
    Classrooms : 
        Listing (done)
        Create (done)
        Delete (done)
        Update


## Students Dashboard 
    Students Middleware to all these routes
    Home Page 
        Informations About the student (Everything)
        Design this page
    Courses Page 
        Listing Of Courses 
        complete Design Of Course component
        Design this page
    Course Page 
        Create Course Page
        Show participants in the classroom
        Show Assignments given in this classroom
        Design this page
    Calendar
        Fix Calendar Design
    Grades
        Display all the modules then subjects of the student's training (done)
        Display the grades of the student (if for a given subject no grade is given the grade will be none) (done)
        Total will be calculated only if all grades are entered
    Requests
        Fix Requests Design 
        The student should only see the trainings that he's allowed to take. (this could be tricky)
        The student should see the requests that he has already made and their status
    Attendances
        The student can see his missed classes and he can give an absence justification for a given missed attendance
        Add Attendance Component 
        Add Attendance button to the sidebar
    
## Teachers
    Teacher Middleware to all of his routes
    Courses
        Every Teacher can create Courses related to his subjects
        The Course Can be Assigned to multiple Trainings at the same time
    Assignments
        Every teacher can create Assignments (Course or HomeWork)
    Attendance
        A teacher can save attendances of his students
    Grades
        Teacher can grade the students of the training of the subject 
    


    


    
    
    






========================================Third Priority things ====================================
## Home Page
	First Section
        Slider
	Second Section
        Announcments
        Announcments Table database
        Announcments Service
    Third Section 
        News
        News Table database
        News Service
    Fourth Section 
        Events
    Fix Footer Informations 

## About Us
    First Section 
        Title and short description
    Second Section 
        Headmaster Word
    Third Section 
        Présentation
    Fourth Section 
        Mission & Valeurs
    5 section 
     Infrastructures
    6 Section
        Composants de l’ENSA
    7 Section
        Réglement Intérieur
    8 Section
        Manuel des procédures
    Images to be implemented correctly

Fix Dropdown Formations (DONE)

## Partenariat
    Convention double diplomation section 
    Téléchargement pdf Convention de stage (formulaire)

## Contact Us Page 
    Create view
    Implement Form
    Mailing Contact us things
    Storing messages in the database 

## Login/Register  Page 
    Redirect to dashboard based on rank (Done)
    Validation Errors in login (done)
    Fix Layout and design of the form 
    Push image to the left 
    Check responsiveness 
    Validation Errors in register page 
    Mail verification 


## Low priority : 
    Recherche Section 