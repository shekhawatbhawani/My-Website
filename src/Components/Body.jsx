// Import react
import React from "react";
// import components
import CardComponent from "./Card";

// import data
import { data, projectImages } from "../Contest/data";

const Body = () => {
  console.log(data);

  return (
    <div className="bg-gray-700 container mx-auto p-4">
      <div className="py-10 px-5">
        <h1 className="text-center font-bold text-3xl text-indigo-400 my-5">Best Frontend Practice Projects for Beginners</h1>
        <p className="text-lg text-gray-300 leading-relaxed mx-auto max-w-3xl">
          Welcome to my frontend practice website! This platform showcases 50 carefully selected projects that are perfect for beginners looking to enhance their frontend development skills. Each project focuses on various aspects of web design and coding, from simple components to more advanced interactive applications. Explore the cards below to view individual projects, live demos, and GitHub repositories. These projects are designed to help beginners build a strong foundation in creating responsive, user-friendly web interfaces, guiding you through your frontend development journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((e, i) => {
          return (
            <CardComponent
              key={i}
              img={projectImages[i]}
              title={e.title}
              desc={e.desc}
              live={e.live}
              git={e.github}
            />
          );
        })}
      </div>
    
    </div>
  );
};

export default Body;
