import React from 'react';
import GlitchText from './GlitchText'; // adjust the path accordingly

const GlitchTitle = ({ title }: { title: string }) => {
  const words = title.split(' ');
  const middleIndices = words.length > 2 ? words.slice(1, -1).map((_, i) => i + 1) : [0]; // avoid first/last
  const randomIndex = middleIndices[Math.floor(Math.random() * middleIndices.length)];

  const renderedTitle = words.map((word, index) => {
    if (index === randomIndex) {
      return (
        <span key={index} className="relative mx-1 inline-block text-white">
          <GlitchText text={word} />
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
        </span>
      );
    }
    return (
      <span key={index} className="mx-1 inline-block">
        {word}
      </span>
    );
  });

  return (
    <h2 className="text-4xl md:text-10xl lg:text-7xl font-bold leading-tight">
      <span className="relative">
        {renderedTitle}
      </span>
    </h2>
  );
};

export default GlitchTitle;
