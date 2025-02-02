
//Personal Info
    function storeName() {
    let name = document.getElementById("storeName").value;
    localStorage.setItem("userName", name);
    }

    function storeAddress() {
    let address = document.getElementById("storeAddress").value;
    localStorage.setItem("userAddress", address);
    }

    function storePhoneNum() {
    let phoneNum = document.getElementById("storePhoneNum").value;
    localStorage.setItem("userPhoneNum", phoneNum);
    }

//Education
    function storeEducation() {
        let education = document.getElementById("storeEducation").value;
        localStorage.setItem("userEducation", education);
    }

    function storeGraduation (){
        let graduation = document.getElementById("storeGraduation").value;
        localStorage.setItem("userGraduation", graduation);
    }

    function storeMajor (){
        let major = document.getElementById("storeMajor").value;
        localStorage.setItem("userMajor", major);
    }

    function storegpa (){
        let gpa = document.getElementById("storegpa").value;
        localStorage.setItem("usergpa", gpa);
    }
    
    function storeRevcourse (){
        let revcourse = document.getElementById("storeRevcourse").value;
        localStorage.setItem("userRevcourse", revcourse);
    }



//Work Experience
    function storeWorkExperience() {
    let experience = document.getElementById("storeWorkExperience").value;
    localStorage.setItem("userWorkExperience", experience);
    }
    
    function storeWorkExperience2() {
    let experience2 = document.getElementById("storeWorkExperience2").value;
    localStorage.setItem("userWorkExperience2", experience2);
    }

//Project
    function storeProject() {
    let project = document.getElementById("storeProject").value;
    localStorage.setItem("userProject", project);
    }

//Skills
    function storeSkills() {
    let skills = document.getElementById("storeSkills").value;
    localStorage.setItem("userSkills", skills);
    }

//Activities 
    function storeActivities() {
    let activities = document.getElementById("storeActivities").value;
    localStorage.setItem("userActivities", activities);
    }
