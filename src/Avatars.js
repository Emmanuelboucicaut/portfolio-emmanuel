import React from "react";
import { Avatar } from "@nextui-org/react";
import image from "./assets/profile2.png";

export function Avatars() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar isBordered src={image} />
    </div>
  );
}
