import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";

export function Techudemy() {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button variant="text" size="sm">Teach on Udemy</Button>
        
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-black"
        >
            <h1>
            Turn what you know into <br />
          an opportunity and <br /> reach millions around the world.
            </h1>
         
        </Typography>
        <Button
            variant="gradient"
            size="sm"
            className="font-medium w-full capitalize"
          >
            LEARN MORE
          </Button>
      
      </PopoverContent>
    </Popover>
  );
}