//JAVASCRIPT//
(function(){
"use strict";

console.log("app started.");
var homeParagraph = document.getElementById("home_para");
var projectParagraph = document.getElementById("project_para");
var projectParagraph1 = document.getElementById("project_para1");
var projectParagraph2 = document.getElementById("project_para2");
var projectParagraph3 = document.getElementById("project_para3");
var aboutParagraph = document.getElementById("about_para");
var aboutParagraph1= document.getElementById("about_para1");
var aboutParagraph2= document.getElementById("about_para2");
var contactParagraph = document.getElementById("contact_para");
var para = [];
var homeParagraph = document.getElementById("home_para");
var projectParagraph = document.getElementById("project_para");
var projectParagraph1 = document.getElementById("project_para1");
var projectParagraph2 = document.getElementById("project_para2");
var projectParagraph3 = document.getElementById("project_para3");
var aboutParagraph = document.getElementById("about_para");
var aboutParagraph1= document.getElementById("about_para1");
var aboutParagraph2= document.getElementById("about_para2");
var contactParagraph = document.getElementById("contact_para");
var para = [];
para[0]="IN SEARCH OF SLEEP, SANITY AND THE SHIRE !";
para[1]="★Here are a few projects that I have created in my previous semester★";
para[2]="Hi I am Jasdeep Parhar studying Software Engineering at Centennial College.";
para[3]="Address:1415-5 Rowntree Rd, Etobicoke M9V5G9 Phone No: (416)-671-7368";
para[4]="You can find me on facebook as well:";
para[5]="Project# 1: JP REAL ESTATE";
para[6]="Project# 2: Energy Conservation";
para[7]="Project# 3: Real Estate";
para[8]="Contact ";
if(homeParagraph){
    
homeParagraph.textContent = para[0];

}
if(projectParagraph){
projectParagraph.textContent = para[1];

	
}
if(projectParagraph1){
projectParagraph1.textContent = para[5];

	
}
if(projectParagraph2){
projectParagraph2.textContent = para[6];

	
}
if(projectParagraph3){
projectParagraph3.textContent = para[7];

	
}
if(aboutParagraph){
aboutParagraph.textContent = para[2];

	
}
if(aboutParagraph1){
aboutParagraph1.textContent = para[3];

	
}
if(aboutParagraph2){
aboutParagraph2.textContent = para[4];

	
}
if(contactParagraph){
contactParagraph.textContent = para[8];

	
}

})();


