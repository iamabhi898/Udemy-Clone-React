import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
        imgSrc={"https://img-a.udemycdn.com/course/240x135/793796_0e89.jpg"}
        instructor={"Kyle Pew, Office Newb LLC"}
        rating={4.6}
        noOfStudents={"(166,042)"}
        price={"₹8,640"}
      />
      <VideoCard
        courseTitle={"The Complete Digital Marketing Course - 12 Courses in 1"}
        imgSrc={"https://img-a.udemycdn.com/course/240x135/914296_3670_8.jpg"}
        instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
        rating={4.4}
        noOfStudents={"(116,637)"}
        price={"₹8,640"}
      />
      <VideoCard
        courseTitle={
          "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg"}
        instructor={"Dr. Anglea Yu"}
        rating={4.8}
        noOfStudents={"(49,923)"}
        price={"₹8,960"}
      />
      <VideoCard
        courseTitle={
          "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1203374_6d6f_3.jpg"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"₹1,280"}
      />
      <VideoCard
        courseTitle={
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg"}
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"₹8,640"}
      />
    </div>
  );
}

export default RecommendedVideos;
