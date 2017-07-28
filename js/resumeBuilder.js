/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio= {
  name: "Jasper Ty";
  role: "Web Development- Learner";
  contact: {
    address: "19 Florist Lane, Scarborough, ON";
    location: "Toronto, ON";
    phone: "647-377-3847";
    email: "jaspercyrus@gmail.com";
    github:
  }
  welcome message: "Hello Everyone. I would like to share my experiences and qualifications with you.";
  skills: "Team-player", "Organized", "Pays attention to detail", "Communication skills";
  biopic: "picture url";
  display: function() {};
};

var education= {
  schools: [
    {
      name: "George Brown College";
      degree/program: "Culinary Management";
      major:
      dates: "2016-2017";
      location: "Toronto, ON";
    },
    {
      name: "Centennial College";
      degree/program: "Business Administration";
      major:
      dates: "2009-2012";
      location: "Scarborough, ON";
    }
  ];
  online courses: [
    {
      title: "Introduction to JavaScript";
      school: "Udacity.com";
      dates: "2017";
      url:
    },
    {
      title: "Intro to HTML and CSS";
      school: "Udacity.com";
      dates: "2017";
      url:
    },
    {
      title: "Practical JavaScript";
      school: "Watch and Code.com";
      dates: "2016";
      url:
    },
    {
      title:
      school:
      dates:
      url:
    }
  ];
};

var work= {
  work: [
    {
      employer: "St. Joseph the Compassionate";
      title: "Prep Cook- Volunteer";
      description: "Help prepare ingredients for their lunch program";
      dates: "October 2015- July 2016";
      location: "Toronto ON";
    },
    {
      employer: "Prostate Cancer Canada";
      title: "Direct Marketing Volunteer";
      description: "Updates and maintain donor information", "assist staff with administrative work.";
      dates: "September 2015- July 2016";
      location: "Toronto, ON";
    },
    {
      employer: "Longo's Supermarkets";
      title: "CSR/ Cashier";
      description: "Processed cash, debit and credit transactions", "Addressed customer inquiries and concerns about Longo's Products"; 
      dates: "May 2010- September 2014";
      location: "Toronto, ON";
    },
    {
      employer:
      title:
      description:
      dates:
      location:
    }
  ];
};

var projects= {
  projects: [
    {
      title:
      dates:
      description:
      url:
    },
    {
      title:
      dates:
      description:
      url:
    },
    {
      title:
      dates:
      description:
      url:
    }
  ];
};

//Makes the background color black;
document.getElementById("education").style.backgroundColor= "black";

//Replaces the <and> and <or> from HTML;
var charEscape= function(_html) {
  var newHTML= _html;
  newHTML= _html.replace(/</g, "&lt");
  newHTML= newHTML.replace(/>/, "&gt");
  
  return newHTML;
};

//Add skills to header id in bio using HTMLskillsStart and replace %data%;
if (bio.skills<0) {
  var formattedSkill= HTMLskillsStart.replace("%data%", bio.skills[0]);
  formattedSkill.replace("%data%", bio.skills[1]);
  formattedSkill.replace("%data%", bio.skills[2]);
  formattedSkill.replace("%data%", bio.skills[3]);
};
  
//Write a loop that iterates over the jobs in work object and append HTMLworkStart for each one
//Format each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle
//.append() and link(concatenate) employer and title
//to the element with class work-entry:last

for (job in work.employer) {
  ("#workExperience").append(HTMLworkStart);
  var formattedEmployer= HTMLworkEmployer.replace("%data%", work.employer[job]);
  formattedEmployer.replace("%data%", work.employer[0]);
  formattedEmployer.replace("%data%", work.employer[1]);
  formattedEmployer.replace("%data%", work.employer[2]);
  var formattedTitle= HTMLworkTitle.replace("%data%", work.title[job]);
  formattedTitle.replace("%data%", work.title[0]);
  formattedTitle.replace("%data%", work.title[1]);
  formattedTitle.replace("%data%", work.title[2]);
  var formattedEmployerformattedTitle= formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerformattedTitle);
};

//Format and .append() work details on the page: Make them look like resume format!! 
//Append description and dates to element work-entry:last!!!

for (job in work.employer) {
  ("#workExperience").append(HTMLworkStart);
  var formattedEmployer= HTMLworkEmployer.replace("%data%", work.employer[job]);
  formattedEmployer.replace("%data%", work.employer[0]);
  formattedEmployer.replace("%data%", work.employer[1]);
  formattedEmployer.replace("%data%", work.employer[2]);
  var formattedTitle= HTMLworkTitle.replace("%data%", work.title[job]);
  formattedTitle.replace("%data%", work.title[0]);
  formattedTitle.replace("%data%", work.title[1]);
  formattedTitle.replace("%data%", work.title[2]);
  var formattedEmployerformattedTitle= formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerformattedTitle);
  var formattedDescription= HTMLworkDescription.replace("%data%", work.description[job]);
  formattedDescription.replace("%data%", work.description[0]);
  formattedDescription.replace("%data%", work.description[1]);
  formattedDescription.replace("%data%", work.description[2]);
  $(".work-entry:last").append(formattedDescription);
  var formattedDates= HTMLworkDates.replace("%data%", work.dates[job]);
  formattedDates.replace("%data%",work.dates[0]);
  formattedDates.replace("%data%",work.dates[1]);
  formattedDates.replace("%data%",work.dates[2]);
  $(".work-entry:last").append(formattedDates);

};
 
//Makes work location visible in google maps!!!
function locationnizer(work_obj) {
  locationArray=[];
  for (job in work_obj.work) {                       //Loops over work object: in work array!!!
    var locationArray= work_obj.work[job].location;   //Find the location of each job from work array!!!
    return locationArray;
  }
};

//Make International Names:
//1.Add internationalizeButton from html to #maindiv id!!
//2.Create a inName function for international name that goes like "James BOND"

$("#maindiv").append(internationalizeButton);

function inName(name) {
  name= name.trim.split(" ");                                                //1.Trim and split the name into separate strings!!
  name[0]= name[0].slice(0,1).upperCase + name[0].slice(1).lowerCase;       //2. Cut the first letter from first name and make uppercase!!
  name[1]= name[1].upperCase;                                               //3. Make last name uppercase letters!!
  return name[0] + " " +name[1];                                            //4. Combine the two names!!
};

//Create a function that displays projects 
//Must know jQuery list and Helper.js List!!!

function projects.display() {                                     //Create function called projects.display!!
  for(project in projects.projects) {                             //Loop over the projects array checks project index!!
    $("#projects").append(HTMLprojectstart);                     //Adds projects id(HTML) to HTMLprojectstart -jQuery!!
    
    var formattedTitle= HTMLworkTitle.replace("%data%", projects.projects[project].title);    //Replace "%data% from HTMLworkTitle with projects title!!
    $(".work-entry:last").append(formattedEmployerTitle);                 //Add the project title!!!
  }
};
