import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
           We value your feedback! Please take a moment to complete our food survey and let us know about your experience, including taste, presentation, and service. Your input helps us continually enhance our offerings to serve you better.
          </p>

          <p className="text-gray-700 pt-8">
          We appreciate your thoughts on our food! Your feedback is essential in helping us understand what we do well and where we can improve. Please share your opinions on the flavors, portion sizes, and overall dining experience, so we can ensure every visit exceeds your expectations. Thank you for helping us grow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;