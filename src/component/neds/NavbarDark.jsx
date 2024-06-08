import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
  import { GlobeAltIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
  import { ShoppingCartIcon } from "@iconicicons/react";
  import { Techudemy,  } from "./Techudemy";
  import { Udemybusines } from "./Udemybusines";
  import { NestedMenu } from "./NestedMenu";
  export function NavbarDark() {
    return (
      <Navbar
        variant="gradient"
        color="white"
        className="mx-auto  from-blue-gray-900 to-blue-gray-800 px-4 py-3 rounded-none"
        fullWidth
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 text-[30px]"
          >
          {/* logo of svg */}
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" className="h-8 w-" />
          </Typography>
          <Typography
            as="a"
            href="#8"
            variant="h"
            className="mr-4 ml-2 cursor-pointer py-1.5 text-sm"
          >
           
          <NestedMenu/> 
           
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              placeholder="Search for anything"
              label="Search for anything"
              className="pr-15 rounded-[30px]"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
          </div>
          <Typography
            as="a"
            href="#8"
            variant="h"
            className="mr-4 ml-2 cursor-pointer py-1.5 text-sm"
          >
          
            <Udemybusines/>
          </Typography>
          <Typography
            as="a"
            href="#8"
            variant="h"
            className="mr-4 ml-2 cursor-pointer py-1.5 text-sm"
          >
             <Techudemy/>
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="hwite">
              <ShoppingCartIcon className="h-8 w-8" />
            </IconButton>
            <Button
              className="bg-white text-black shadow-none border-black rounded-none"
              variant="outlined"
              size="md"
            >
              Login
            </Button>
            <Button
              className="text-white shadow-none border-black rounded-none"
              size="md"
            >
              Sign Up
            </Button>
            <IconButton
              className="bg-white text-black shadow-none border-black rounded-none"
              variant="outlined"
              size="md"
            >
              <GlobeAltIcon className="h-8 w-8" />
            </IconButton>
          </div>
        </div>
      </Navbar>
    );
  }
  export default NavbarDark;