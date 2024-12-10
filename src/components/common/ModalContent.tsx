"use client";

import ReactPlayer from "react-player";
import { DialogContent } from "../ui/dialog";

const ModalContent = () => {
  return (
    <DialogContent className="mx-10 inline-block border border-primary bg-white">
      <div className="p-5">
        <ReactPlayer
          width="100%"
          height="auto"
          playing
          controls
          style={{
            display: "inline-block",
            // minWidth: "100%",
            // minHeight: "100%",
            border: "1px solid #ddd",
          }}
          url="/Root education.mp4"
        />
      </div>
    </DialogContent>
  );
};

export default ModalContent;

// min-h-[70vh] max-w-[1000px] border border-primary bg-white
