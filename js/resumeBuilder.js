var bio = {
	"name": "Brian Bartish",
	"role": "SR IT Analyst",
	"welcomeMessage": "Hello Udacity",
	"contacts": {
		"email": "brian.j.bartish@gmail.com",
		"github": "bartish",
		"location": "Bloomington, MN"
	},
	"skills": ["Good Listener", "Self-Motivated", "Somewhat Athletic"],
	"biopic": "images/RonBurgundy.jpg"
};
var work = {
	"jobs": [
		{
		"employer": "AT&T",
		"title": "SR IT Analyst",
		"location": "Bloomington, MN",
		"dates": "2004-present",
		"description": "Supported Credit and Collections call centers by building web applications, reports and performing analysis.  Worked with senior leadership to determine requirements and give recommendations for projects."
		},
		{
		"employer": "AT&T",
		"title": "Department Scheduler",
		"location": "Bloomington, MN",
		"dates": "2001-2004",
		"description": "Created and maintained employee schedules for the Business Receivables center.  Handled tracking and reporting vacation, sick time and leaves."
		},
				{
		"employer": "A to Z Rental Center",
		"title": "Shop Employee",
		"location": "Minneapolis, MN",
		"dates": "1996-1998",
		"description": "Assisted customers with selecting the right tools for the job.  Processed rental fees, loaded equipment into the truck, and kept the shop clean."
		}
	]
};
var projects = {
	"project": [
		{
		"title": "Flashcard Project",
		"dates": "11/2014 - current",
		"description": "Website for random math flashcards",
		"images": ["images/Mathletics.png"]
		},
		{
		"title": "Website Mockup",
		"dates": "11/2014",
		"description": "School project for Front End Web Developer course.",
		"images": ["images/mug.png"]
		}
	],
};
var education = {
	"schools": [
		{
			"name": "Normandale Community College",
			"location": "Bloomington, MN",
			"majors": ["General Courses Studied"],
			"dates": "1998-2000",
			"url": ""
		},
		{
			"name": "Richfield High School",
			"location": "Richfield, MN",
			"degree": "High School Diploma",
			"majors": ["General Courses Studied"],
			"dates": "1995-1998",
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity.com",
			"dates": "11/2014 - present",
			"url": "http://udacity.com"
		}
	]
};

/*function inName(name) {
console.log(name);
var newName = name.split(" ");
firstName = newName[0].toLower();
var firstLetter = firstName.charAt(0);
firstName = firstName.slice(1);
firstName = firstLetter.toUpperCase() + firstName;
var lastName = newName[1].toUpperCase();
var internationalName = firstName + " " + lastName;

return internationalName;
}*/

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace('%data%',bio.name);
	$("#header").prepend(formattedName);

	//contacts
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGitHub);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);

	//image
	var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);
	$("#header").append(formattedImage);

	//skills
	if (bio.skills.length != 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$('#skills').append(formattedSkill);
	}
}
work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart); 
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription );
	}
}
projects.display = function() {
	for(var project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		if (projects.project[project].images.length >0) {
			for(image in projects.project[project].images) {
				var formmattedProjectImage = "";
				if (projects.project[project].images[image] === "images/Mathletics.png") {
					formmattedProjectImage = '<img src="images/Mathletics.png" class="img_wide">';
				}
				else {
					formmattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
				}
				
				$(".project-entry:last").append(formmattedProjectImage);
			}
		}
		
		var formmattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		$(".project-entry:last").append(formmattedProjectTitle);

		var formmattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[project].dates); 
		$(".project-entry:last").append(formmattedProjectDates);

		var formmattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		$(".project-entry:last").append(formmattedProjectDescription);
	}
}
education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = "</a>";
		if (education.schools[school].degree) {
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		}
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		for(var major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}
		
	}
	
	for (var oc=0; oc<education.onlineCourses.length; oc++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[oc].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[oc].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		var formmatedDates = HTMLonlineDates.replace('%data%',education.onlineCourses[oc].dates);
		$(".education-entry:last").append(formmatedDates);
		var formattedURL = HTMLonlineURL.replace('%data%',education.onlineCourses[oc].url);
		$(".education-entry:last").append(formattedURL);
	}	
}


bio.display();
work.display();
projects.display();
education.display();

$(".work-entry, .project-entry, .education-entry").mouseover(function(){
	$(this).addClass('highlighted');
});
$(".work-entry, .project-entry, .education-entry").mouseout(function(){
	$(this).removeClass('highlighted');
});
