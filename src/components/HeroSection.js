import React from "react";

export default function HeroSection() {
  const messaage = () => {
     return "This is the message";
  };

  
  return (
    <div className="flex h-[100vh-5em]">
      <div className="grid max-w-screen-md grid-cols-2 mx-auto my-auto">
        <div className="flex flex-col items-start gap-3">
          <p className="text-4xl font-medium">Hi,</p>
          <p className="text-6xl font-normal">
            I'm <span className="font-bold">Job Lipat</span>
          </p>
          <p className="text-lg">
            I am a third year Computer Science student at Malayan Colleges
            Laguna.
          </p>

          {messaage()}


          <button
            className="p-4 mt-4 text-lg font-medium bg-gray-100 border-black border-solid hover:bg-gray-200 active:bg-gray-300"
            onClick={messaage}
          >
            See my projects
          </button>
        </div>
        <div>
          <img
            src="https://picsum.photos/250/250"
            className="m-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
