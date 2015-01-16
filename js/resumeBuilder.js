var bio = {
	"name" : "Arnaud Brun",
	"age": "21",
	"location" : "Nancy",
	"role": "Ingenieur en Informatique (Master of Science in the IT)",
	"mobile" : "06 30 30 11 68",
	"email" : "arnaud.brun.vidal@gmail.com",
	"github" : "nonoScriptor",
	"picture" : "C:/Travail/Telecom Nancy/2A/Prog_Web/javascript/frontend-nanodegree-resume/imagesfry.jpeg",
	"welcome" : "Hi bitches ! Thank's to visit my virtual Resume !!",
	"skills": ["Developpment", "Design", "Analysis"]	
};

var work = {
	"jobs" : [
		{
			"employer" : "Neobuild",
			"title" : "Client-server implementation to harvest measures", 
			"location" : "Bettermburg, Luxembourg",
			"dates" : "2013-April to June",
			"role" : ["Documentation", "Conception", "Development"],
			"description" : "I had to establish the link between a user and sensors. The interface between them was a RaspBerry Pi, that i customized to fit with specific obligations."
			
		}
	]
};

var project = {
	"projects" : [
		{
			"title" : "Projet Interdisciplinaire de Recherche",
			"date" : "2015",
			"context" : "Telecom Nancy and Loria association",
			"mission" : "attack simulation into a sensor network"
		},
		{
			"title" : "Leash",
			"date" : "2014",
			"context" : "School project for Telecom Nancy; System Classes",
			"mission" : "Implement a basic bash, to understand Unix System mecanisms"
		},
		{
			"title" : "Project Specification",
			"date" : "2014",
			"context" : "School project for Telecom Nancy; MOCI Classes",
			"mission" : "Given user requirements, establish specification documents and the design of the application"
		},
		{
			"title" : "C language Initiation",
			"date" : "2014",
			"context" : "School project for Telecom Nancy; TOP Classes",
			"mission" : "No subject was given; I implemented a litle video game based on the Allegro 5 library"
		},		
		{
			"title" : "System Network Project",
			"date" : "2013",
			"context" : "School project for the IUT; System/Network Classes",
			"mission" : "Implement a semaphore server in C language, to understand shared memory mecanisms"
		},
		{
			"title" : "ASM discovery",
			"date" : "2012",
			"context" : "School project for the IUT; System Architecture Classes",
			"mission" : "Implement a video game in ASM based on intel 0x86 instructions"
		}
	]
};

project.display = function(){

	for (idx in project.projects){
		$("#projects").append(HTMLprojectStart);		
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[idx].title);
		var formattedDate = HTMLprojectDates.replace("%data%", project.projects[idx].date);
		var formattedDesc = HTMLprojectDescription.replace("%data%", project.projects[idx].context+"\n"+project.projects[idx].mission);	

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);		
		$(".project-entry:last").append(formattedDesc);
	}
};


var education = {
	"schools" : [
		{
			"name" : "Telecom Nancy",
			"city" : "Villers-les-Nancy",
			"degree" : "Ingenieur equivalent to Master of Science in the IT",
			"major" : ["MOCI", "System-Network"]
		},
		{
			"name" : "Intitut Universitaire Technologique",
			"city" : "Metz",
			"degree" : "DUT : Diplome Universitaire de Technologies equivalent to an IT Licence ",
			"major" : ["Algorithm", "German", "Mathematics Analysis"]
		},
		{
			"name" : "Lycee Georges de La Tour",
			"city" : "Metz",
			"degree" : "Baccalauréat : A-level in Science",
			"major" : ["German", "Biology"]
		}
	],
	"onlines" : [
		{			
			"title" : "Intro to JavaScript",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://www.udacity.com"
		}
	]
};


function displayContact(){

	var contactZone = HTMLcontactGeneric.replace("%contact%", "To contact me :");
	contactZone = contactZone.replace("%data%", "");
	$("#topContacts").append(contactZone);

	var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.email);
	var formattedGit = HTMLgithub.replace("%data%", bio.github);
	var formattedLoc = HTMLlocation.replace("%data%", bio.location);
	var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
	var formattedPic = HTMLbioPic.replace("\"%data%\"", bio.picture);
	console.log(bio.picture);
	console.log(formattedPic);


	$(".flex-item:last").append(formattedMobile);
	$(".flex-item:last").append(formattedEmail);
	$(".flex-item:last").append(formattedGit);
	$(".flex-item:last").append(formattedLoc);
	//$(".flex-item:last").append(formattedPic);
	$("#topContacts").append(formattedWelcomMsg);
}


function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	}
}

function displayEducation(){

	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedName+formattedDegree);
		$(".education-entry:last").append(formattedCity);
		$(".education-entry:last").append(formattedMajor);


	}
}

function displayOnlines(){
	for (school in education.onlines){
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlines[school].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlines[school].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlines[school].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlines[school].url);


		$(".education-entry:last").append(HTMLonlineClasses);
		$(".education-entry:last").append(formattedTitle+formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
}



$("#main").append(internationalizeButton);
function inName(){
	var finalName = bio.name.split(' ');

	finalName[0] = finalName[0].toLowerCase();
	finalName[0] = finalName[0].replace(finalName[0][0], finalName[0][0].toUpperCase());
	finalName[1] = finalName[1].toUpperCase();
	finalName = finalName.join(" ");

	return finalName;
}


if(bio.name.length > 0){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
}


if(bio.role.length > 0){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}


displayContact();
displayWork();
project.display();

displayEducation();
displayOnlines();

