"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 3000);
    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="p-5 md:p-8 lg:space-y-9 space-y-6 my-5 z-0">
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
        <Button className="bg-black active:scale-90 transition ease-in-out">
          Subscribe
        </Button>
        <div className="p-4 bg-gray-200 rounded-xl z-0">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
              className="w-full h-fit md:h-[400px] lg:h-[470px] object-cover rounded-lg hover:scale-110 cursor-pointer duration-500"
            />
          </div>
        </div>
      </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger className="hidden">Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>To Access WebApp First Signin</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-4">
                <p className="text-center text-lg font-semibold text-orange-600 tracking-wide">
                  Sign In Google Authentication WebApp
                </p>
                <Button
                  variant="ghost"
                  className="border border-gray-600 text-base"
                >
                  <Image
                    src="/google-logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-6 h-6 mr-2"
                  />
                  SignIn with Google
                </Button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HeroSection;
