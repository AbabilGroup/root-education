"use client";

import ReactPlayer from "react-player";
import { DialogContent } from "../ui/dialog";

const ModalContent = () => {
  return (
    <DialogContent className="inline-block border border-primary bg-white">
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
          url="https://youtu.be/qC4sVo6STFM"
        />
      </div>
    </DialogContent>
  );
};

export default ModalContent;

// min-h-[70vh] max-w-[1000px] border border-primary bg-white
