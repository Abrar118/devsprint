import React, { useState } from 'react';
import CourseContainer from './CourseContainer'; 

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <CourseContainer searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
