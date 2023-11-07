import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    spring,
    python,
    mysql,
    git,
    figma,
    docker,
    telecompetences,
    carrent,
    biocharm,
    handwritting,
    c,   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Media Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java/JEE",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "C/C++",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
     {
      title: "Web Developer",
      company_name: "TELECOMPETENCES",
      icon: telecompetences,
      iconBg: "#383E56",
      date: "SUMMER 2022",
      points: [
        "During a comprehensive two-month internship focused on web development, I took on the responsibility of conceptualizing and constructing a user-friendly interface. This interface was designed to efficiently manage the center's customer database by enabling specific and customized search functionalities. The aim was to streamline the process of handling and accessing customer information based on tailored search criteria, optimizing the overall management and organization of clientele data."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Perfect, perfect and perfect. Even this time Omayma has been the best. She could support and stand me and my endless requests. Always extremely kind and well prepared, working with her is a pleasure. I will continue to work with her. Completely satisifed",
      name: "ettoreosti",
      designation: "Client",
      company: "Fiverr",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Elle est très efficace et respectueuse.",
      name: "djamililla",
      designation: "Client",
      company: "Fiverr",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "All was really good, the communication was really professional and clear. She could solve all the problem really fast and properly. The final job is better than I could expect at the beginning. I will continue to work with her.",
      name: "ettoreosti",
      designation: "Client",
      company: "Fiverr",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rental Agency Management System",
      description: "A desktop application designed to efficiently manage car rentals for an agency, providing comprehensive solutions for reservation, administration, and customer management.",
      tags: [
        {
          "name": "Java",
          "color": "red-text-gradient"
        },
        {
          "name": "JavaFX",
          "color": "blue-text-gradient"
        },
        {
          "name": "MySQL",
          "color": "green-text-gradient"
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/Omaymaazeroual/rentify"
    },    
    {
      name: "BioCharm",
      description:
        "Web Application dedicated to cosmetic products, offering a user-friendly experience to browse, shop, and manage orders. The project is developed using Spring Boot following the MVC architecture, incorporating Spring Security for user authentication and authorization, and utilizing MariaDB as the database management system.",
      tags: [
        {
          name: "Spring Boot",
          color: "purple-text-gradient"
        },
        {
          name: "Hibernate",
          color: "orange-text-gradient"
        },
        {
          name: "Thymeleaf",
          color: "green-text-gradient"
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient"
        }
      ],
      image: biocharm,
      source_code_link: "https://github.com/Omaymaazeroual/BioCharm",
    },
    {
      name: "Handwritten Character Recognition Project",
      description: "A project focused on handwritten character recognition, employing Python and utilizing Convolutional Neural Network (CNN) algorithms and OpenCV for the analysis and identification of handwritten characters.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient"
        },
        {
          name: "CNN Algorithm",
          color: "green-text-gradient"
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient"
        }
      ],      
      image: handwritting,
      source_code_link: "https://github.com/Omaymaazeroual/handwrittenCharacterRecognition-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };