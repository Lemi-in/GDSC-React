const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-md mx-auto bg-gray-800 overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0 flex flex-col items-center">
            <img
              className="profile-img h-60 w-full object-cover"
              src="/images/profile-pic.jpg"
              alt="Lemesa Elias"
            />
            <h1 className="name block mt-2 text-2xl leading-tight font-medium">
              Lemesa Elias
            </h1>
            <h2 className="job-title block text-xs mt-1">
              Web Developer
            </h2>
          </div>
          <div className="bio p-6">
            <div className="about-title tracking-wide text-2xl font-bold">
              About Me
            </div>
            <div className="details flex mt-2">
              <span className="age text-xs mr-1">21 years</span>
              <span className="separator text-xs mr-1">•</span>
              <span className="location text-xs mr-1">Addis Abeba</span>
            </div>
            <p className="description mt-4 text-xs">
              Experienced web developer with a focus on building scalable and
              performant web applications using modern technologies such as React,
              Node.js, and MongoDB. Passionate about clean code, best practices,
              and continuous learning. Currently exploring new trends in
              serverless architecture and microservices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
