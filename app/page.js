"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import {
  School,
  Insights,
  TouchApp,
  FlashOn,
  Storage,
} from "@mui/icons-material"; // Material Icons
import Link from "next/link";
import ProcessForm from "./components/ProcessForm";
// import { useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import FeedbackModal from "./components/FeedbackModal";
import Image from "next/image";

const LandingPage = () => {
  const { user } = useUser();
const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
const adminPassword = process.env.ADMIN_PASSWORD || '';

const isAdmin = user && adminEmails.includes(user.emailAddresses[0].emailAddress);

// Function to verify if the entered password matches the stored admin password
const verifyAdminPassword = (enteredPassword) => {
  return enteredPassword === adminPassword;
};

// Example usage: Check if the user is an admin and the password is correct
const enteredPassword = "user_provided_password_here"; // Get this from user input

if (isAdmin && verifyAdminPassword(enteredPassword)) {
  console.log("User is an admin with the correct password.");
} else {
  console.log("User is not an admin or the password is incorrect.");
}

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [openProcessModal, setOpenProcessModal] = useState(false); // State to control ProcessForm modal
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [school, setSchool] = useState("");
  const [professor, setProfessor] = useState("");
  const [professorsList, setProfessorsList] = useState([]);

  const schoolsList = [
    "School of Computer Science",
    "School of Law",
    "School of Liberal Studies",
    "School of Design",
    "School of Business",
    "School of Advanced Engineering",
    "School of Health Science",
  ];
  const schoolOfComputerScience = [
    "Prof. Vijaysekhar Chellaboina",
    "Dr. Vinod Patidar",
    "Dr. Neelu Jyothi Ahuja",
    "Dr. Hanumat Sastry G",
    "Prof. Karmeshu",
    "Dr. Madan Gopal",
    "Dr. Ajay Prasad",
    "Dr. Anil Kumar",
    "Dr. Hitesh Kumar Sharma",
    "Kaushik Ghosh",
    "Dr. Priya Ranjan",
    "Dr. Akashdeep Bhardwaj",
    "Mr. Pankaj Badoni",
    "Dr. Alok Aggarwal",
    "Dr. Sunil Gupta",
    "Dr. Deepika Koundal",
    "Dr. Vijendra Singh",
    "Dr. Sanjeev Kumar",
    "Dr. Suneet Kumar Gupta",
    "Dr. Surender Varma Gadhiraju",
    "Abadhan Sabyasachi",
    "Abhijit Kumar",
    "Abhirup Khanna",
    "Dr. Achala Shakya",
    "Dr. Ajay Kumar",
    "Akhilesh Mohan Srivastava",
    "Alind",
    "Alok Jhaldiyal",
    "Amar Jindal",
    "Amar Shukla",
    "Dr. Ambika Aggarwal",
    "Amit Gurung",
    "Dr. Anand Kumar",
    "Dr. Amit Verma",
    "Dr. Anish Kumar Vishwakarma",
    "Amrendra Tripathi",
    "Dr Ankit Kumar",
    "Anushree Sah",
    "Dr. Archana Kumari",
    "Dr. Arjun Arora",
    "Dr. Arundhati Tarafdar",
    "Dr. Aviral Sharma",
    "Avita Katal",
    "Mr. Avishek Majumder",
    "Bhavana Kaushik",
    "N/A",
    "Dr. Bhupendra Singh",
    "Christalin Nelson S",
    "Deepak Kumar Sharma",
    "Dr. Deepa Joshi",
    "Dhirendra Kumar Sharma",
    "Dhiviya Rose J",
    "Gagan Deep Singh",
    "Dr. Gaurav Bhardwaj",
    "Gaytri",
    "Gopal Singh Rawat",
    "N/A",
    "Goutam Datta",
    "Hemant Petwal",
    "Dr. Juhi Agrawal",
    "Dr. Jerry W. Sangma",
    "Kamal Raj Singh",
    "Dr. Kapil Gupta",
    "Dr. Keshav Sinha",
    "Kshitij Kumre",
    "Dr. Mitali Chugh",
    "Maithilee Laxmanrao Patawar",
    "Dr. Mohammad Ahsan",
    "N/A",
    "Milton Kumar",
    "Dr. Muthukumar Ka",
    "Nadeem Yousuf Khanday",
    "Nayantara Kotoky",
    "Dr. Neeraj Chugh",
    "N Prasanthi Kumari",
    "Dr. Nitika Nigam",
    "Dr. Panduranga Ravi Teja",
    "Dr. Pankaj Kundan Dadure",
    "Dr. Pragya Katyayan",
    "Dr. Prabhat Ranjan Singh",
    "Piyush Rawat",
    "Dr. Prateek Raj Gautam",
    "Dr. Prateek Gupta",
    "Priyanka Singh",
    "Rahul Kumar Singh",
    "Rahul Kumar",
    "Dr. Ram Kumar",
    "Richa Choudhary",
    "Rohit Srivastava",
    "Dr. Rohit Tanwar",
    "Dr. Roohi Sille",
    "Sachi Choudhary",
    "Sahinur Rahman Laskar",
    "Sandeep Pratap Singh",
    "Prof. (Dr.) Sanjay Biswash",
    "Sanoj Kumar",
    "Saroj Snehal Shivagunde",
    "N/A",
    "Shahid Sultan Hajam",
    "Shahina Anwarul",
    "Saurabh Shanu",
    "Dr. Shaurya Gupta",
    "Dr. Shiladitya Bhattacharjee",
    "Dr. Shreya Banerjee",
    "Shubhi Sharma",
    "Silky Goel",
    "Dr. Sonal Talreja",
    "Dr. Shresth Gupta",
    "Sugandha Sharma",
    "Dr. Supreet Singh",
    "Dr. Surbhi Saraswat",
    "Dr. Sushabhan Choudhury",
    "Suvojit Dhara",
    "Swati Rastogi",
    "Dr. Tanu Singh",
    "Dr. Tarandeep Kaur Bhatia",
    "Varun Sapra",
    "Ved Prakash Bhardwaj",
    "Dr. Vibhu Jately",
    "Vidyanand Mishra",
    "Yeshwant Singh",
    "Chhotelal Kumar",
    "Kotha Venugopalachary",
    "Manish Kumar Giri",
    "Virender Kadyan",
    "Dr. Mrittunjoy Guha Majumdar",
  ];

  const schoolOfAdvancedEngineering = [
    "Dr. Piyush Kuchhal",
    "Dr. Abhinav Sharma",
    "Dr. Devender Kumar Saini",
    "Dr. Harshit Mohan",
    "Dr. Sivasundar Manisankar",
    "Dr. Monika Yadav",
    "Dr. Rahul Singhal",
    "Dr. Ranjan Mishra",
    "Dr. Rupendra Kumar Pachauri",
    "Dr. Surajit Mondal",
    "Dr. Yogesh C. Gupta",
    "Dr. Nilanjana Banerjee",
    "Dr. Tirumala Rao Kotni",
    "Dr. Sunil Kumar Khare",
    "Dr. Srinivasa Reddy Devarapu",
    "Dr. Seim Timung",
    "Dr. Rohit Sharma",
    "Dr. Rahul Kumar",
    "Dr. Pushpa Sharma",
    "Dr. Prathibha Pillai",
    "Professor Pankaj Kumar Srivastava",
    "Mr. Niteen Ramchandra Yeole",
    "Dr. Ajay Mittal",
    "Dr. Amit Kumar Thakur",
    "N/A",
    "Dr. Ashish Aggarwal",
    "Dr. Atul Kumar Patidar",
    "N/A",
    "N/A",
    "Dr. G. Gopalakrishnan",
    "Dr. Gaurav Pandey",
    "Dr. Girish Chandra Kothyari",
    "Dr. Himanshu Kesarwani",
    "Dr. Harinandan Kumar",
    "Jagadeeshwar Kodavaty",
    "N/A",
    "Mr. Manash Protim Mudoi",
    "Dr. Mandira Agarwal",
    "Dr. Murali Pujari",
    "Dr. Nirlipta Priyadarshini Nayak",
    "Dr. Uday Bhan",
    "Dr. Vamsi Krishna Kudapa",
    "Dr. Ashish Karn",
    "Ajay Kumar",
    "Dr. Anil Kumar",
    "Dr. Ashish Mishra",
    "Dhiraj Kumar",
    "Donga Ramesh Kumar",
    "Dr. Gaurav Mittal",
    "Dr.Geetanjali Raghav",
    "Dr. Gurunadh Velladi",
    "Dr. Gurumayum Robert Kenedy",
    "Harshit Shukla",
    "Dr. Jitendra Yadav",
    "Kumar Gaurav",
    "N/A",
    "Dr. Om Prakash",
    "Piyush Gaur",
    "Dr. Prashant Shukla",
    "Rajesh Maithani",
    "Ram Krishna Shah",
    "Dr. Ram Kunwer",
    "Ramesh Kumar",
    "Roushan Kumar",
    "Dr. Sachin Sharma",
    "Dr. Saurabh Kumar Bharti",
    "Siddharth Jain",
    "Dr. Subhankar Das",
    "Dr. Varun Pratap Singh",
    "Manish Kumar",
    "Dr. Abhishek Nandan",
    "Dr. Sunita Varjani",
    "Dr. Bikarama Prasad Yadav",
    "Dr. Balendu Shekher Giri",
    "Dharmendra Kumar Gupta",
    "Durga Prasad Panday",
    "Kanchan Deoli Bahukhandi",
    "Dr. Madhuben Sharma",
    "Prof. Rahul Silori",
    "N/A",
    "N/A",
    "Surendar Varadharajan",
    "Suvendu Manna",
    "N/A",
    "Dr. Soumyaranjan Sahoo",
    "Dr. Ranjeet Kumar Brajpuriya",
    "Dr. Vipin Gaur",
    "Dr. Susmay Nandi",
    "Dr. Sravendra Rana",
    "Dr. Shilpi Agarwal",
    "Dr. Shikha Wadhwa",
    "Dr. Shefali Arora",
    "Dr. Shailey Singhal",
    "Dr. Sapna Jain",
    "Santosh Dubey",
    "Dr. Sanjeev Kumar",
    "Dr. Abhishek Kumar Mishra",
    "Dr. Aditya Sharma",
    "Dr. Akmal Husain",
    "Amit Awasthi",
    "Dr. Amit Kumar Chawla",
    "Dr. Amit Kumar Sharma",
    "Dr. Anil Kumar Sinha",
    "Dr. Ashishi Puri",
    "Dr. Ashish Mathur",
    "N/A",
    "Dr. Anupam Bhandari",
    "Dr. Balendra Pratap Singh",
    "Dr. Bhuwan Chandra Joshi",
    "Dr. D.P. Singh",
    "Dr. Bhawna Yadav Lamba",
    "Dr. Debashis Ghosh",
    "Dr. Divya Ahluwalia",
    "N/A",
    "N/A",
    "Dr. Kailash Pandey",
    "Dr. Kanak Pal Singh Parmar",
    "Dr. KSR Murthy",
    "N/A",
    "Dr. Monalisa Anand",
    "Dr. Manjeet Singh Goyat",
    "Dr. Manisha Malik",
    "Dr. Niloopher Salam",
    "Monika Manglik",
    "N/A",
    "Navjot Hothi",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "Prashant Shambhudayal Rawat",
    "Dr. Rajeev Gupta",
    "Dr. Raju Roychowdhury",
    "Dr. Rashmi Dubey",
    "Dr. Ratnesh K Pandey",
    "Ravi Kiran Maddali",
    "Reshu Gupta",
    "Dr. Ritesh Dubey",
    "Dr. Samar Layek",
    "Dr. Satya Krishna Nippani",
    "Dr. Sachin Pathak",
    "Dr. Sandeep Dixit",
    "Dr. Tanuj Kumar",
    "Dr. Vivek Panwar",
    "Dr. Shalendra Kumar",
  ];

  const schoolOfBusiness = [
    "Rahul Nainwal",
    "Dr. Niraj Shirish Mankad",
    "Prof (Dr) Sumeet Gupta",
    "Dr. Anita Sengar",
    "Dr. Atul Rawat",
    "Dr. Inder Singh",
    "Anil Kumar",
    "Arup Majumdar",
    "Dr. T. Bangar Raju",
    "Dr. P.C. Bahuguna",
    "Aanchal Sharma",
    "Dr. Ajit Yadav",
    "Dr. Amrita Chaskar",
    "Dr. Alok Negi",
    "Dr. Anirudh Singh",
    "Ankur Mittal",
    "Dr. Anmol Kumar Goyal",
    "Dr. Anup Kumar Yadava",
    "Ashish Pratap Singh",
    "ANURAG SHARMA",
    "Prof. Avishek Ghosal",
    "Bhumika Ray",
    "Dr. Bharat Ankur Dogra",
    "Deeksha Gupta",
    "Dr. Binod Kumar Singh",
    "Dr. Deepak Bangwal",
    "Dr. Deepak Ranjan",
    "Dr. Devkant Kala",
    "Gunjan Kumari",
    "Dr. Mohd Imran Khan",
    "Dr. Meenakshi Sharma",
    "Dr Kamlesh Kumar Maurya",
    "Ladenla Lama",
    "Dr. Mohammad Younus Bhatt",
    "Mohit Rishi",
    "Navdeep Bhatnagar",
    "Dr. Neeraj Kataria",
    "Neeraj Rathore",
    "Dr. Nida Rahman",
    "Dr. Pradeep Chauhan",
    "Preeti Aneja",
    "Puja Tiwari",
    "Dr. Rahul Bodhi",
    "Dr. Rakesh K. Meet",
    "Raj K Kovid",
    "Dr. Rajesh Mokale",
    "Rajeshwari Sharma",
    "Dr. Ranjeet Kumar Singh",
    "Sanjay Chaudhary",
    "Dr. Sanjay Malla",
    "Dr. Shalini Singh",
    "Dr. Shatrughan Yadav",
    "Dr. Shweta Agarwal",
    "Dr. Shailesh Pandita",
    "Dr. Soumen Rej",
    "Dr. Sonal Gupta",
    "Dr. Soumyajit Chakraborty",
    "Dr. Sushil Kumar Rai",
    "Dr. Sunil Barthwal",
    "Dr. Vijay Lahri",
    "Vikas Kumar",
    "Vaibhav Tripathi",
    "Manisha Solanki",
    "Santosh Anand",
    "Dr. Debjani Mukherjee",
    "Dr. Vijaya",
    "N/A",
    "Dr. Tarunpreet Kaur Ahuja",
    "Rajesh Tripathi",
    "Dr. Pramod Kumar Painuly",
    "Dr. Badri Singh Bhandari",
  ];

  const schoolOfDesign = [
    "Prof. Bhaskar Bhatt",
    "Prof. Phani Tetali",
    "Rajan Iyer",
    "Jharna Joshi",
    "Soumitra Bhattacharya",
    "Ishan Khosla",
    "Abhishek Kumar",
    "Ajit Bhandari",
    "Avimesh Sharma",
    "Avni Joshi",
    "Ms. Baljinder Kaur",
    "Dr. Bappa Das",
    "DA Siddharth",
    "Dr. Debashis Majumder",
    "Gurpreet Singh",
    "Kishor Tikale",
    "Khushboo Bharti",
    "Lavendra Kumar Shukla",
    "Mekhla Harrison",
    "Mousim Mitra",
    "Milly Singh",
    "Nagesh Lakhan",
    "Dr. Naveen Kumar",
    "Nikhil Tikhe",
    "Dr. Nilakshi Yein",
    "Nilav Mazumdar",
    "Pariniti Singh",
    "Nitin Sharma",
    "Prabhakar Dabral",
    "Prasun Chakraborty",
    "Rakesh Ahirwar",
    "Rakesh Sah",
    "Dr. Samrat Dev",
    "Shirley Bhatnagar",
    "Siddharth Kumar",
    "Siddharth Prakash",
    "Siddharth Raje",
    "Siddhartha Mukherjee",
    "Sonal Singh",
    "Dr. Susmita Sharma Yadav",
    "Dr. Swati Sarkar",
    "Venkatesh Varala",
    "Vikas Thapa",
    "Vikram Mathur",
    "Vikrant Chandekar",
    "Vivek Kumar Pandey",
  ];

  const schoolOfHealthScience = [
    "Dr. Padma Venkat",
    "Jyoti Upadhyay",
    "Dr Kuldeep Kumar Roy",
    "Dr. Dhruv Kumar",
    "Dr. Smriti Arora",
    "Dr. Sunita Varjani",
    "Dr. Abhishek Chandra",
    "Dr. Amritansh Bhanot",
    "Dr. Anand Gaurav",
    "Dr. Anuradha Saini",
    "Deepanmol Singh",
    "Dr. Divya Tripathi",
    "Gufran Ajmal",
    "Dr. Gunjan Vasant Bonde",
    "Dr. Himanshi Jangir",
    "Dr. Iram Khan",
    "Dr. Kamesh Rajendra Babu",
    "Dr. Mitali Madhumita",
    "Nidhi Chauhan",
    "Dr. Nishu Goyal",
    "Dr. Piyush Kumar",
    "Dr. Prashant Shukla",
    "Dr. Rakesh Kumar Mishra",
    "Dr. Laxmi Kirola",
    "Dr. Subhajit Basu",
    "Dr. Ravi Rawat",
    "Dr Ranjna Sirohi",
    "Ravinder Kaushik",
    "Sandhya S",
    "Dr. Santosh Kumar Chaudhary",
    "Dr. Rajendra Awasthi",
    "Dr. Utsab Debnath",
    "Dr. Ramesh Kumar Saini",
    "Shikha Saxena",
    "Dr. Souradeep Roy",
    "Dr. Ramendra Pati Pandey",
    "Dr. Kapil Kumar",
    "Dr. Rohini Verma",
    "Ms. Richa Bahuguna",
    "Ms. Himani Nautiyal",
    "Dr. Shubham Dwivedi",
    "Dr. Snigdha Mishra",
    "Dr. Soumya Gupta",
    "Dr. Utkarsh Jain",
  ];

  const schoolOfLaw = [
    "Dr. Abhishek Sinha",
    "Dr. Shikha Dimri",
    "Dr. Balwinder Singh",
    "Govind Narayan Sinha",
    "Ashok Kumar Tyagi",
    "Dr. Anju Pandey",
    "Aditi Pateriya",
    "ABHIJIT B",
    "Aishwarya Vatsa",
    "Ajay Kumar",
    "Alind Gupta",
    "Dr. Kanchal Gupta",
    "Dr Gagandeep Kaur",
    "Anil Kumar Vishwakarma",
    "Dr. Aprajita Singh",
    "Ashutosh Tripathi",
    "Dr. Aarushi Batra",
    "Bharti Nair Khan",
    "Dr. Bhavana Rao",
    "Dr. Charu Srivastava",
    "Divya Dwivedi",
    "Ekta Yadav",
    "Ishan Maheshwari",
    "Dr. Latika Choudhary",
    "Dr. Manika Kamthan",
    "Mehreen Manzoor",
    "N/A",
    "Monica Pradyot",
    "Dr. Nanda Pardhey",
    "Navin Pal Singh",
    "Neeti Goyal",
    "Nikita Begum Talukdar",
    "Dr Parth Sharma",
    "Pooja Gautam",
    "Dr. Pratiksha Bhardwaj",
    "Ms. Rachna Jha",
    "Rafique Khan",
    "Rohit Ranjan",
    "Ruby Yadav",
    "Sajal Sharma",
    "Ms. Sakshee Sharma",
    "Saksham Pradyot",
    "Sam Babu K C",
    "Samrat Datta",
    "Shatakshi Johri",
    "Shradha Baranwal",
    "Shreya Mahajan",
    "Shruti Dasgupta",
    "Dr. Sumit Kumar Pachauri",
    "Dr. Tauheed Alam",
    "Udit Raj Sharma",
    "Vaishali Singh",
    "Abhijit Anand",
    "Dr. Vinita Singh",
    "Arvind Singh Kushwaha",
    "Gaurav Mittal",
    "Aditya Rawat",
    "Anwesha Pathak",
    "Debarati Pal",
    "Dr. Himani Kaushik",
    "Dr. Hardik Daga",
    "Maria Devi Angerhofer",
    "Dr. Neha Singh",
    "Prachi Mishra",
    "Prafful Kumar Gupta",
    "Priyanka Choudhary",
    "Shibam Talukdar",
    "Shruti Chaturvedi",
    "Shriya Pandey",
    "Dr. Sujata Bali",
    "Dr. Tanveer Kaur",
    "Dr. Surya Saxena",
    "Udai Pratap Singh",
    "Dr. Yatish Pachouri",
    "Anushka Srivastava",
    "Anjali Bhatt",
    "Dr. Keshav Madhav",
  ];

  const schoolOfLiberalStudies = [
    "Prof. Atri Nautiyal",
    "Richa Chilana",
    "Himanshu Jha",
    "PLL Annapurna",
    "Dr. Aswani RS",
    "Dr. Melissa Reneaux",
    "Awadh Pratap Singh",
    "Sudha Tiwari",
    "Charusheel Tripathi",
    "Devaleena Kundu",
    "Dr. Amaresh Jha",
    "Gaurav Misra",
    "Jayadev Parida",
    "Jeeten Krishna Giri",
    "Dr. Roshni Sengupta",
    "Dr. Kshitiz Mishra",
    "Mahesh Sharma",
    "Mariyam Ilyas Siddiqui",
    "Dr. Pankaj Singh",
    "Ravindra Singh Rawat",
    "Dr. Ritam Dutta",
    "Sakshi Chanana",
    "Samir Kumer Das",
    "Satarupa Lahiri",
    "Shatavisha Mustafi",
    "Dr. Sudha Shashwati",
    "Dr. Uday Bhaskar Sharma",
    "Dr. Vinay Kumar Singh",
    "Dr. Sudipa Nag",
    "Sudeshna Chowdhury",
    "Neha Verma",
    "Dr . Seema Shukla",
    "Dr. Harshika Varma",
    "Dr. Kaustav Padmapati",
    "Dr. Abhishek Kumar Singh",
    "Minhaj Abdullah",
    "Pulkit Jain",
    "Srinath G.M.",
    "Rajiv Kumar",
    "Yamini Negi",
  ];

  const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
  const handleCloseFeedbackModal = () => setOpenFeedbackModal(false);

  const handleSubmitFeedback = () => {
    console.log("Feedback Submitted: ", {
      school,
      professor,
      rating,
      feedback,
    });
    handleCloseFeedbackModal();
  };

  const handleSchoolChange = (selectedSchool) => {
    setSchool(selectedSchool);
    switch (selectedSchool) {
      case "School of Computer Science":
        setProfessorsList(schoolOfComputerScience);
        break;
      case "School of Advanced Engineering":
        setProfessorsList(schoolOfAdvancedEngineering);
        break;
      case "School of Business":
        setProfessorsList(schoolOfBusiness);
        break;
      case "School of Health Science":
        setProfessorsList(schoolOfHealthScience);
        break;
      case "School of Law":
        setProfessorsList(schoolOfLaw);
        break;
      case "School of Liberal Studies":
        setProfessorsList(schoolOfLiberalStudies);
        break;
      case "School of Design":
        setProfessorsList(schoolOfDesign);
        break;
      default:
        setProfessorsList([]);
    }
  };

  const handleOpenProcessModal = () => setOpenProcessModal(true);
  const handleCloseProcessModal = () => setOpenProcessModal(false);

  return (
    <Box
      sx={{
        backgroundImage: "/background.png",
        // background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}

      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          py: 6,

          height: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          m: 0,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "2.5rem", // small screens
              sm: "3.5rem", // tablets
              md: "4.5rem", // small laptops
              lg: "5rem", // desktops
            },
            color: "#1C3B74",
          }}
        >
          AI-Driven Professor Recommendation System
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1rem", // small screens
              sm: "1.25rem", // tablets
              md: "1.5rem", // small laptops
              lg: "1.75rem", // desktops
            },
          }}
        >
          Personalized recommendations to help you find the best professors for
          your courses.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens, horizontally on larger screens
            alignItems: "center",
            gap: { xs: "10px", sm: "15px" }, // Adjust gap between buttons for different screen sizes
            mt: { xs: 2, sm: 4 }, // Adjust margin-top for different screen sizes
          }}
        >
          <Link href="/recommendation">
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "linear-gradient(135deg, #62cff4, #02386E)",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Adjust font size for different screen sizes
                color: "#fff",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: 4,
                textTransform: "none",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)", // Slightly scale up on hover
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Get Started
            </Button>
          </Link>

          {isAdmin ? (
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "linear-gradient(135deg, #62cff4, #02386E)",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "#fff",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: 4,
                textTransform: "none",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleOpenProcessModal} // Open ProcessForm modal
            >
              Add Professor
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: 4,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#02386E",
                  color: "#fff",
                },
              }}
              onClick={handleOpenFeedbackModal}
            >
              Give Feedback
            </Button>
          )}
        </Box>
      </Container>
      <FeedbackModal
        open={openFeedbackModal}
        onClose={handleCloseFeedbackModal}
        rating={rating}
        setRating={setRating}
        feedback={feedback}
        setFeedback={setFeedback}
        handleSubmit={handleSubmitFeedback}
        school={school}
        setSchool={handleSchoolChange}
        professor={professor}
        setProfessor={setProfessor}
        schoolsList={schoolsList}
        professorsList={professorsList}
        user={user}
      />
      <ProcessForm open={openProcessModal} onClose={handleCloseProcessModal} />
      {/* Features Section */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: "#faf0e6",
          background: "linear-gradient(0, #ace0f9, #fff1eb)",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            mb: { xs: 4, md: 8 }, // Adjust bottom margin based on screen size
            mt: { xs: 4, md: 8 }, // Adjust top margin based on screen size
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#1C3B74",
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }, // Adjust font size for various screen sizes
              marginBottom: { xs: 2, md: 4 }, // Add margin to adjust spacing
            }}
          >
            Why Choose ProfSpector?
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              mt: 2,
              width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, // Adjust width to suit different screens
              margin: "auto",
            }}
          >
            {/* Feature 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" }, // Adjust padding based on screen size
                }}
              >
                <TouchApp
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />{" "}
                {/* Adjust icon size */}
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // Adjust font size based on screen size
                    }}
                  >
                    One-click personalized recommendations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" },
                }}
              >
                <Insights
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Data-driven insights using AI and comprehensive reviews.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" },
                }}
              >
                <FlashOn
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Instant results with minimal effort.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Centered Row */}
            <Grid container item xs={12} justifyContent="center" spacing={4}>
              {/* Feature 4 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: { xs: "15px", md: "20px" },
                  }}
                >
                  <School
                    sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      Tailored to your learning preferences and academic goals.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Feature 5 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: { xs: "15px", md: "20px" },
                  }}
                >
                  <Storage
                    sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      Analyzes extensive data from multiple sources.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
          padding: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Chatbox */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                width: { xs: "100%", sm: "80%", md: "70%" },
                margin: { xs: "0 auto", md: "0" },
                color: "#fff",
                position: "relative",
                borderRadius: "5%",
                overflow: "hidden",
              }}
            >
              {/* Placeholder for the chatbox image */}
              <Image
                src="/demo1.jpg"
                alt="Chatbox"
                layout="responsive"
                width={700}
                height={475}
              />
            </Paper>
          </Grid>

          {/* Right Side: Text with Gradient */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: "#1C3B74",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                }}
              >
                Discover the Perfect Professor, Every Time.
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background:
                    "linear-gradient(109.6deg, rgb(69, 179, 224) 11.2%, rgb(102, 51, 153) 100.2%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.25rem" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                Find the best match for your academic journey, powered by
                AI-driven insights.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* </Container> */}
    </Box>
  );
};

export default LandingPage;
