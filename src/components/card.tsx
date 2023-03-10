import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  alignment: "left" | "right" | "center";
}

const Card = (props: CardProps) => {
  const { imageSrc, imageAlt, text, alignment } = props;

  const alignmentClasses = () => {
    switch (alignment) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      case "center":
        return "justify-center";
      default:
        return "justify-center";
    }
  };

  return (
    <div className={`flex flex-row ${alignmentClasses()} items-center p-4`}>
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={imageAlt} className="h-12 w-12 rounded-full" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{text}</div>
      </div>
    </div>
  );
};

export default Card;
