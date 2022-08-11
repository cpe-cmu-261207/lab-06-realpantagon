import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isMouseClick, setMouseClick] = useState(false);
  const onClickHandler = () => {
    if (isMouseClick === true) {
      setMouseClick(false);
    } else {
      setMouseClick(true);
    }
  };
  return (
    <div className="border-bottom">
      <div
        className="d-flex align-items-center p-3"
        onClick={() => onClickHandler()}
      >
        <img src={props.pic} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        <span>{isMouseClick ? <IconChevronUp /> : <IconChevronDown />}</span>
      </div>
      {isMouseClick ? (
        <UserCardDetail email={props.email} locate={props.locate} />
      ) : (
        false
      )}
    </div>
  );
}
