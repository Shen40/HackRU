function storeName() {
    let name = document.getElementById("storeName").value;
    localStorage.setItem("userName", name);
}

function storeEducation() {
    let education = document.getElementById("storeEducation").value;
    localStorage.setItem("userEducation", education);
}

function storeAddress() {
    let address = document.getElementById("storeAddress").value;
    localStorage.setItem("userAddress", address);
}

function storePhoneNum() {
    let phoneNum = document.getElementById("storePhoneNum").value;
    localStorage.setItem("userPhoneNum", phoneNum);
}

function storeProject() {
    let project = document.getElementById("storeProject").value;
    localStorage.setItem("userProject", project);
}

function storeSkills() {
    let skills = document.getElementById("storeSkills").value;
    localStorage.setItem("userSkills", skills);
}

function storeWorkExperience() {
    let experience = document.getElementById("storeWorkExperience").value;
    localStorage.setItem("userWorkExperience", experience);
}
