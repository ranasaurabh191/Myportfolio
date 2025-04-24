interface Certification {
  title: string;
  issuer: string;
  date: string;
  expires?: string;
  description: string;
  skills?: string[];
  credentialUrl?: string;
  imageUrl?: string; // ✅ Added field
}

const certificationsData: Certification[] = [
  {
    title: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    date: "Jan 2025",
    description: "Comprehensive training in Python for data analysis, machine learning, and real-world applications.",
    skills: ["Python", "Machine Learning", "Data Science"],
    credentialUrl: "https://www.udemy.com/certificate/UC-ace44169-b329-4803-b295-c43150d66b52/",
    imageUrl: "/certificates/python.png"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Oct 2024",
    description: "Fundamental concepts and algorithms in machine learning including supervised and unsupervised learning.",
    skills: ["Machine Learning", "Algorithms", "Supervised Learning"],
    credentialUrl: "https://github.com/ranasaurabh191/My-certifications-certificates/blob/main/Introduction%20To%20Machine%20Learning%20-%20IITKGP.pdf",
    imageUrl: "/certificates/nptel.png"
  },
  {
    title: "Excel Skills for Business",
    issuer: "Macquarie University",
    date: "Apr 2024",
    description: "Proficiency in using Excel for data manipulation, analysis, and visualization in business contexts.",
    skills: ["Excel", "Data Analysis", "Business Intelligence"],
    credentialUrl: "https://github.com/ranasaurabh191/My-certifications-certificates/blob/main/Coursera%20Excel%20Specilization.pdf",
    imageUrl: "/certificates/excel.png"
  },
  {
    title: "C++ Specialization",
    issuer: "Coursera",
    date: "Feb 2024",
    description: "Comprehensive understanding of C++ programming including OOP concepts, memory management, STL, and advanced features.",
    skills: ["C++", "Object-Oriented Programming", "STL", "Memory Management"],
    credentialUrl: "https://github.com/ranasaurabh191/My-certifications-certificates/blob/main/Coursera%20C%2B%2B%20Specialization.pdf",
    imageUrl: "/certificates/c++.png"
  }
];

export default certificationsData;
