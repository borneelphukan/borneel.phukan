import React from "react";
import Card from "../card/Card";

const CardStack = () => {
  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      <Card
        icon="fa-light fa-code"
        title="Fullstack Developer"
        content="3+ years of experience in Frontend & Backend development using Javascript, Typescript, React, Vue, TailwindCSS, Bootstrap, PHP, Python, Flask, MySQL, MongoDB, C, C++, Java. Experiences with building API, UI/UX prototypes (Figma), everything following Agile Methodologies."
      />
      <Card
        icon="fa-light fa-server"
        title="Machine Learning"
        content="Experiences with developing, training and optimizing machine learning models and deep learning (CNN, RNN) models powered by Computer Vision. Hands-on experience with Tensorflow, OpenCV, ScikitLearn, Matplotlib and Pytorch. Possess a research publication and multiple projects on Convolutional Neural Networks and Computer Vision."
      />
      <Card
        icon="fa-light fa-pencil"
        title="Technical Writing"
        content="A voracious freelance writer obsessed with writing technical content in English, including content for websites, blogs, technical reviews, and academic papers. Feel free to check out my technical content in my Tech Digest blog section to gain insights into my writing methods."
      />
    </div>
  );
};

export default CardStack;
