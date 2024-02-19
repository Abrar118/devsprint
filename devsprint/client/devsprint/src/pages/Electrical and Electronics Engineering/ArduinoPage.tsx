import React from 'react';
import CourseCard from '../All/CourseCard';

type Props = {};

const ArduinoPage = (props: Props) => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Python",
      category: "Computer Science",
      subcategory: "Python",
      description: "A comprehensive introduction to the field of computer science.",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      price: "$99.99"
    },
    {
      id: 2,
      title: "Introduction to SolidWorks",
      category: "Mechanical Engineering",
      subcategory: "SolidWorks",
      description: "Get started with the fundamentals of mechanical engineering.",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
      price: "$79.99"
    },
    {
      id: 3,
      title: "Introduction to JavaScript",
      category: "Computer Science",
      subcategory: "JavaScript",
      description: "Learn the basics of JavaScript and how to build web applications.",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      price: "$109.99"
    },
    {
      id: 4,
      title: "Introduction to AutoCad",
      category: "Civil Engineering",
      subcategory: "AutoCad",
      description: "Learn the basic principles and practices of civil engineering.",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
      price: "$89.99"
    },
    {
      id: 5,
      title: "Introduction to SolidWorks",
      category: "Mechanical Engineering",
      subcategory: "SolidWorks",
      description: "Get started with the fundamentals of mechanical engineering.",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
      price: "$79.99"
    },
    {
      id: 6,
      title: "Introduction to JavaScript",
      category: "Computer Science",
      subcategory: "JavaScript",
      description: "Learn the basics of JavaScript and how to build web applications.",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      price: "$109.99"
    },
    {
      id: 7,
      title: "Introduction to Arduino",
      category: "Electrical and Electronics Engineering",
      subcategory: "Arduino",
      description: "Learn the basics of Arduino and how to build electrical circuits.",
      image: "https://via.placeholder.com/150",
      rating: 4.3,
      price: "$99.99"
    },
    {
      id: 8,
      title: "Introduction to Fundamentals of Robotics",
      category: "Electrical and Electronics Engineering",
      subcategory: "Robotics",
      description: "Learn the basic principles and practices of civil engineering.",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
      price: "$89.99"
    },
    {
      id: 9,
      title: "Introduction to C++",
      category: "Computer Science",
      subcategory: "cpp",
      description: "Learn the basic principles and practices of coding.",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
      price: "$89.99"
    },
    {
      id: 10,
      title: "Introduction to HTML and CSS",
      category: "Computer Science",
      subcategory: "Design",
      description: "Learn the basic principles and practices of web design.",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      price: "$109.99"
    }
  ]
  const filteredCourses = courses.filter(course => course.category === 'Electrical and Electronics Engineering' && course.subcategory === 'Arduino');
  return (
    <div>
      <h1>Arduino Courses</h1>
      <div className="course-list">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ArduinoPage;