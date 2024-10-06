import React from "react";
import Card from "../card/Card";
import { useTranslation } from "react-i18next";

const CardStack = () => {
  const { t } = useTranslation();
  const serviceCard: string[] = t("serviceCard", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5 mb-10">
      <Card
        icon="fa-light fa-code"
        title={serviceCard[0][0]}
        content={serviceCard[0][1]}
        skills={serviceCard[0][2]}
      />
      <Card
        icon="fa-light fa-server"
        title={serviceCard[1][0]}
        content={serviceCard[1][1]}
        skills={serviceCard[1][2]}
      />
      <Card
        icon="fa-light fa-pencil"
        title={serviceCard[2][0]}
        content={serviceCard[2][1]}
        skills={serviceCard[2][2]}
      />
    </div>
  );
};

export default CardStack;
