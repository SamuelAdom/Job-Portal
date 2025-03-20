document.addEventListener("DOMContentLoaded", function () {
    const jobDetails = {
        "1": {
            company: "Google",
            location: "London",
            salary: "$2500-3500/m",
            image: "assests/google.png",
            position: "Frontend Developer",
            hours: "40h/week",
            description: "As a Frontend Developer at Google, you will build and optimize user interfaces using modern frameworks like React and Angular. You'll work with a collaborative team to enhance user experience and performance."
        },
        "2": {
            company: "Apple",
            location: "New York",
            salary: "$3000-4000/m",
            image: "assests/apple.jpg",
            position: "DevOps Engineer",
            hours: "45h/week",
            description: "Apple is seeking a DevOps Engineer to streamline CI/CD pipelines, enhance cloud infrastructure, and improve deployment strategies for large-scale applications."
        },
        "3": {
            company: "Comsys",
            location: "Accra",
            salary: "$2500-3000/m",
            image: "assests/comsys.ico",
            position: "System Administrator",
            hours: "50h/week",
            description: "Join Comsys as a System Administrator to maintain and secure network infrastructure, manage cloud services, and optimize system performance."
        },
        "4": {
            company: "Amazon",
            location: "California",
            salary: "$1800-2000/m",
            image: "assests/t1.png",
            position: "Digital Marketing Manager",
            hours: "38h/week",
            description: "Amazon is hiring a Digital Marketing Manager to drive brand awareness, manage paid campaigns, and optimize SEO strategies."
        },
        "5": {
            company: "Edureka",
            location: "Bangalore",
            salary: "$1900-2500/m",
            image: "assests/edu.png",
            position: "Data Scientist",
            hours: "40h/week",
            description: "We are seeking a highly skilled Data Scientist to analyze large amounts of data, develop predictive models, and generate insights that drive business decisions. The ideal candidate will have expertise in data analytics, machine learning, and statistical modeling, along with strong problem-solving skills."
        },
        "6": {
            company: "GT Bank",
            location: "Kumasi",
            salary: "$1400-2000/m",
            image: "assests/gt.png",
            position: "Treasury Analyst",
            hours: "36h/week",
            description: "We are looking for a detail-oriented Treasury Analyst to manage cash flow, liquidity, risk, and investment activities within the organization. The ideal candidate will analyze financial data, optimize cash management strategies, and ensure compliance with financial regulations."
        },
        "7": {
            company: "Instagram",
            location: "Paris",
            salary: "$1500-2000/m",
            image: "assests/ins.png",
            position: "UI/UX Designer",
            hours: "38h/week",
            description: "We are seeking a creative and detail-oriented UI/UX Designer to design intuitive and engaging digital experiences. The ideal candidate will be responsible for user research, wireframing, prototyping, and creating visually appealing interfaces that enhance user satisfaction and usability."
        },
        "8": {
            company: "Bolt",
            location: "Lagos",
            salary: "$1800-3000/m",
            image: "assests/bo.png",
            position: "Software Engineer (Backend)",
            hours: "38h/week",
            description: "We are looking for a skilled Backend Software Engineer to develop and maintain scalable, high-performance server-side applications. The ideal candidate will be responsible for designing APIs, optimizing databases, and ensuring system reliability and security."
        },
        "9": {
            company: "Yahoo",
            location: "Accra",
            salary: "$1800-2000/m",
            image: "assests/yah.webp",
            position: "Producer, Yahoo Finance Live",
            hours: "40h/week",
            description: "As a Producer for Yahoo Finance Live, you will play a pivotal role in delivering timely and insightful financial news to our audience. Your responsibilities will encompass the development and production of live show segments, ensuring high-quality content that resonates with viewers."
        },
        "10": {
            company: "Facebook",
            location: "Lagos",
            salary: "$2500-3000/m",
            image: "assests/linkedin.png",
            position: "Graphic Designer",
            hours: "42h/week",
            description: "We are looking for a highly analytical Data Scientist (Marketing Analytics) to drive data-driven decision-making in our marketing efforts. The ideal candidate will leverage statistical modeling, machine learning, and data visualization to optimize marketing campaigns, improve customer segmentation, and measure ROI."
        },
        "11": {
            company: "Linkedin",
            location: "Lagos",
            salary: "$2800-35000/m",
            image: "assests/link.png",
            position: "Graphic Designer",
            hours: "35h/week",
            description: "We are seeking a creative and detail-oriented Graphic Designer to develop visually appealing designs for digital and print media. The ideal candidate will have strong design skills, a keen eye for aesthetics, and the ability to translate concepts into engaging visual content."
        },
        "12": {
            company: "Wordpress",
            location: "New York",
            salary: "$3000-3800/m",
            image: "assests/word.png",
            position: "WordPress Developer",
            hours: "42h/week",
            description: "We are looking for a WordPress Developer to build and maintain user-friendly, responsive, and dynamic websites. The ideal candidate will have expertise in WordPress theme and plugin development, as well as a solid understanding of web design and front-end technologies."
        },
      
    };

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const jobId = getQueryParam("id") || "1";  
    
    if (jobDetails[jobId]) {
        const job = jobDetails[jobId];

        document.querySelector(".job-box img").src = job.image;
        document.querySelector(".description h4").textContent = job.company;
        document.querySelector(".description p").textContent = job.location;
        document.querySelector(".adds-d .images:nth-child(3) p").innerHTML = `Salary <br> ${job.salary}`;
        document.querySelector(".adds-d .images:nth-child(2) p").innerHTML = `Position <br> ${job.position}`;
        document.querySelector(".adds-d .images:nth-child(4) p").innerHTML = `Hours <br> ${job.hours}`;
        document.querySelector(".job-info .dets").textContent = job.description;
    } else {
        console.error("Invalid Job ID");
    }
});
