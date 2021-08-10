import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function MenuLocalCalendar(props) {
  const { activeListCal, setActiveListCal } = props;
  return (
    <div>
      <ListGroup as="ul" activeKey={activeListCal ? "calender" : ""}>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveListCal(!activeListCal)}
          eventKey="calender"
        >
          Local Calendars
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MenuLocalCalendar;
