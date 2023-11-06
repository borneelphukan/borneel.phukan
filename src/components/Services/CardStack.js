import React from "react";
import Card from "../card/Card";

const CardStack = () => {
  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {/* First Card */}
      <Card
        icon="fa-light fa-database"
        title="Database System"
        content="This was released more than 6 years ago and it is still one of the top selling themes, based on stable framework."
      />

      {/* Second Card */}
      <Card
        icon="fa-light fa-code"
        title="Graphic Portfolio"
        content="This is a consistent and reliable theme, we're improving it all the time adding new features, staying on top."
      />

      {/* Third Card */}
      <Card
        icon="fa-light fa-pencil"
        title="Growth Trends 2023"
        content="We have many returning customers that got to trust us as a solid partner. Join the 50,000+ happy BDesign users."
      />
    </div>
  );
};

export default CardStack;
