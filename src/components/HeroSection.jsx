import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="p-5 md:p-8 lg:space-y-9 space-y-6 my-5">
        <p className="border border-gray-300 rounded-full text-sm px-5 sm:w-fit lg:text-base">
          Lorem ipsum dolor sit, amet consectetur else.
          <strong> Read More</strong> &#10145;
        </p>
        <p className="text-3xl md:text-4xl font-bold lg:text-6xl">
          People who really cares about your business
        </p>
        <p className="text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          nulla aperiam quo possimus, nihil molestiae modi tenetur esse qui
          repudiandae cum fuga aspernatur ea?
        </p>
        <Button className="bg-black">Subscribe</Button>
        <div className="p-4 bg-gray-200 rounded-xl">
          <Image
            src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={100}
            height={100}
            alt="image"
            className="w-full h-fit object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
