import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

interface Course {
  id: number;
  title: string;
  category: string;
  subcategory: string; // Corrected property name
  description: string;
  image: string;
  rating: number;
  price: string;
}


interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={course.image}
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {course.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Subcategory: {course.subcategory}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {course.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Rating: {course.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {course.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Enroll</Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
