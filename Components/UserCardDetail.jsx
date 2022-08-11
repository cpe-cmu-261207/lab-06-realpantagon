import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCardDetail(props) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins />{" "}
        {props.locate.city +
          " " +
          props.locate.state +
          " " +
          props.locate.country +
          " " +
          props.locate.postcode}
      </p>
    </div>
  );
}
