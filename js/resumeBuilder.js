var internationalized = false;

var bio = {
	"name": {
		"first": "Tyler",
		"last": "Morgan"
		},
	"title": "Engineer",
	"contacts": {
		"email": "tyler@tylermorgan.me",
		"linkedIn": "www.linkedin.com/in/tylermorganme/",
		"github": "https://github.com/tylermorganme",
		"twitter": "@tylermorganme",
		"location": "Salt Lake City"
	},
	"bioPic": "images/tyler-resume-pic.jpg",
	"welcomeMessage": "Hello and Welcome thank for checking out my resume.",
	"skills": [
		"css",
		"html",
		"javascript",

	],
	"displayHeader": function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.title));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name.first + " " + bio.name.last));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLskillsStart);
			
		if (bio.skills.length > 0) {
			for(skill in bio.skills) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		};
		$("#header").append(HTMLclear);
	},
	"displayContacts": function(location){
		$(location).append(HTMLemail.replace("%data%", bio.contacts.email));
		$(location).append(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
		$(location).append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$(location).append(HTMLgithub.replace("%data%", bio.contacts.github));
		$(location).append(HTMLlocation.replace("%data%", bio.contacts.location));
	}
};

var work = {
	"jobs": [
		{
			"title": "Graduate Mining Engineer",
			"employer": "Rio Tinto",
			"startDate": 2013,
			"endDate": 2014,
			"location":{
				"city": "Salt Lake City",
				"state": "Utah"
			},
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facilis, quod hic sequi sunt facere, quos laborum! Ab debitis inventore officia quo deleniti, voluptates minima ratione magni consectetur vel esse numquam, consequuntur repellat. Tenetur aut velit voluptas vitae maxime corrupti accusamus aperiam quo beatae ducimus illum, numquam alias unde! Placeat."
		}
	],
	"display": function (){
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].startDate + " - " + work.jobs[job].endDate));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location.city + " " + work.jobs[job].location.state));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "My Website",
			"startDate": 2014,
			"endDate": 2014,
			"description": "This is a website I built to showcase come of my skills. It is based on an assignment for a Udacity course. I took the basic HTML and played around with some fixed background images.",
			"images": [
			"http://placepuppy.it/300/200",
			"http://placepuppy.it/300/200"
			],
			"url":"http://www.tylermorgan.me"
		}
	],
	"display": function (){
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url));
			$(".project-entry:last").append(projects.projects[project].startDate + " - " + projects.projects[project].endDate);
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
			for (img in projects.projects[project].images){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Arizona",
			"degree": "BS",
			"majors": [
				"Mining Engineering",
			],
			"startDate": 2007,
			"endDate": 2013,
			"location": {
				"city": "Tucson",
				"state": "Arizona"
			},
			"url": "http://www.arizona.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"startDate": "Oct 2011",
			"endDate": "Oct 2011",
			"url": "https://www.udacity.com/course/ud804"
		}
	],
	"displaySchools": function (){
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url)+HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].startDate + " - " + education.schools[school].endDate));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location.city + " " + education.schools[school].location.state));
			 for (major in education.schools[school].majors){
			 	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			 }
		}
	},
	"displayCourses": function (){
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			$("#education").append(HTMLonlineStart);
			$(".course-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".course-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].startDate + " - " + education.onlineCourses[course].endDate));
			$(".course-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("%url%", education.onlineCourses[course].url));
		}
	}
};

$("#main").append(internationalizeButton);

var inName = function (fName, lName){
	return fName.substring(0,1).toUpperCase() + fName.substring(1).toLowerCase() + " " + lName.toUpperCase();
};


bio.displayHeader();
bio.displayContacts("#topContacts");
work.display();
projects.display();
education.displaySchools();
education.displayCourses();
bio.displayContacts("#footerContacts");

$("#mapDiv").append(googleMap);

if(document.getElementsByClassName("flex-item").length === 0) {
    document.getElementById("topContacts").style.display = "none";
}
if(document.getElementsByTagName("h1").length === 0) {
document.getElementById("header").style.display = "none";
}
if(document.getElementsByClassName("work-entry").length === 0) {
document.getElementById("workExperience").style.display = "none";
}
if(document.getElementsByClassName("project-entry").length === 0) {
document.getElementById("projects").style.display = "none";
}
if(document.getElementsByClassName("education-entry").length === 0) {
document.getElementById("education").style.display = "none";
}
if(document.getElementsByClassName("skills-entry").length === 0) {
document.getElementById("skillsChart").style.display = "none";
}
if(document.getElementsByClassName("flex-item").length === 0) {
document.getElementById("letsConnect").style.display = "none";
}
if(document.getElementById("map") == undefined) {
document.getElementById("mapDiv").style.display = "none";
}