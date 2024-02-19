import React, { useState } from 'react';
import CourseContainer from './CourseContainer'; 

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div>
      <h1>Find Your Best Courses</h1>
      <CourseContainer searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
