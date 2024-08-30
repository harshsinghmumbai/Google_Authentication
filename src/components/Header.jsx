import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { LuUser } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <>
      <header className="p-1 lg:p-2 lg:px-6 sm:px-4 border-b-2 z-10 border-gray-600 rounded-2xl sticky top-0 backdrop-blur-sm">
        <div className="flex justify-between items-center ">
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <GiHamburgerMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>
                    <Link href={"/"}>
                      <p className="flex items-center text-xl font-semibold justify-center py-6">
                        <Image
                          src="/logo.svg"
                          alt="logo"
                          width={100}
                          height={100}
                          className="w-11 h-11"
                          priority
                        />
                        GAuth
                      </p>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex justify-center my-10">
                  <ul className="">
                    <Menubar>
                      <div className="flex flex-col space-y-6">
                        <MenubarMenu>
                          <MenubarTrigger>
                            <li>Home</li>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>Home Page Not Exist</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>
                            <li>About</li>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>About Page Not Exist</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>
                            <li>Contact</li>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>Contact Page Not Exist</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                          <MenubarTrigger>
                            <li>Blog</li>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>Blog Page Not Exist</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </div>
                    </Menubar>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href={"/"}>
            <p className="flex items-center text-lg lg:text-xl text-red-900 font-semibold">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
                priority
              />
              GAuth
            </p>
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex text-lg font-semibold space-x-5 md:space-x-7">
              <Menubar>
                <div className="flex space-x-6">
                  <MenubarMenu>
                    <MenubarTrigger>
                      <li className="cursor-pointer">Home</li>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Home Page Not Exist</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <li className="cursor-pointer">About</li>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>About Page Not Exist</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <li className="cursor-pointer">Contact</li>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Contact Page Not Exist</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <li className="cursor-pointer">Blog</li>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Blog Page Not Exist</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </div>
              </Menubar>
            </ul>
          </nav>
          <div className="flex space-x-4 sm:space-x-6">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <Avatar>
                    <AvatarImage src="/avatar.png" alt="image" />
                    <AvatarFallback>H.S</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LuUser className="mr-2 h-4 w-4" />
                    <span>ABCD</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <HiOutlineMail className="mr-2 h-4 w-4" />
                    <span>ABCD@gmail.com</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="text-center">
                  <Badge className="text-lg px-5 tracking-wider">Sign</Badge>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
