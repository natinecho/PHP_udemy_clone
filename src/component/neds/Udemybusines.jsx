import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";

export function Udemybusines() {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        {/* <Button variant="text"> Udemy business </Button>
         */}
         <a> udemy business</a>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        <Typography
          variant="small"
          color="black"
          className="font-normal text-black"
        >
            <h1>
            Get your team access to  <br />over 25,000 top Udemy  <br />courses, anytime, anywhere.
            </h1>
         
        </Typography>
        <Button
            variant="gradient"
            size="sm"
            className="font-medium w-full capitalize"
          >
            TRY UDEMY BUSINESS  
          </Button>
      
      </PopoverContent>
    </Popover>
  );
}
