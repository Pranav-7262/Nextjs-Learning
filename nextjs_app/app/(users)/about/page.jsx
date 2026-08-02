import Image from "next/image";

const About = async () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 font-roboto">
      <h1 className="text-3xl font-bold ">About Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/myimg.jpeg"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
