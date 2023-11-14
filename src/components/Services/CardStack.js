import React from "react";
import Card from "../card/Card";

const CardStack = () => {
  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {/* First Card */}
      <Card
        icon="fa-light fa-code"
        title="Development & Design"
        content="Experienced web developer and designer with over 5 years in the field. Specializing in web design using Figma and proficient in development with React and Next.js. Expert in crafting visually appealing and functional websites, with a focus on sleek styling using TailwindCSS."
      />

      {/* Second Card */}
      <Card
        icon="fa-light fa-pencil"
        title="Video Editing"
        content="This is a consistent and reliable theme, we're improving it all the time adding new features, staying on top."
      />

      {/* Third Card */}
      <Card
        icon="fa-light fa-server"
        title="Machine Learning"
        content="We have many returning customers that got to trust us as a solid partner. Join the 50,000+ happy BDesign users."
      />
    </div>
  );
};

export default CardStack;
