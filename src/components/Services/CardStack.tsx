import React from "react";
import Card from "../card/Card";

const CardStack = () => {
  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5 mb-10">
      <Card
        icon="fa-light fa-code"
        title="Fullstack Developer"
        content="3+ years of experience in building Web Applications, Application Programming Interfaces (API), Microservices, UI/UX prototypes, everything following Agile Methodologies."
        skills="Javascript, Typescript, React, Vue, TailwindCSS, Bootstrap, PHP, Python, Flask, MySQL, MongoDB, C, C++."
      />
      <Card
        icon="fa-light fa-server"
        title="Machine Learning"
        content="Experiences with developing, training and optimizing machine learning models and deep learning (CNN, RNN) models powered by Computer Vision. Possess a research publication and various projects."
        skills="Tensorflow, OpenCV, ScikitLearn, Matplotlib, Pytorch"
      />
      <Card
        icon="fa-light fa-pencil"
        title="Content Writing"
        content="A voracious freelance writer obsessed with writing technical and current affairs content in English, including content for websites, blogs, technical reviews, and academic papers."
        skills="Blog Writing, Technical Writing, Copywriting, Ghost Writing, Creative writing, Email Marketing Content"
      />
    </div>
  );
};

export default CardStack;
