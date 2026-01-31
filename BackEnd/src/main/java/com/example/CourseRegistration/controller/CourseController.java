package com.example.CourseRegistration.controller;

import com.example.CourseRegistration.model.Course;
import com.example.CourseRegistration.model.CourseRegistry;
import com.example.CourseRegistration.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CourseController {

    @Autowired
    CourseService courseService;



    @GetMapping("/courses")
    public List<Course> availableCourses(){
       return courseService.availableCourses();
   }

   @GetMapping("courses/enrolled")
    public List<CourseRegistry> enrolledStudent(){
        return courseService.enrolledStudent();
   }

   @PostMapping("/courses/register")

    public String enrollCourse(@RequestBody CourseRegistry courseRegistry) {

        courseService.enrollCourse(courseRegistry.getName(),courseRegistry.getEmailId(),courseRegistry.getCourseName());
        return "Enrolled Successfully";
   }

}
