import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";

function MenuOtherItem() {
  const [activeItem, setActiveItem] = useState("Personal");

  return (
    <div>
      <ListGroup as="ul" activeKey={activeItem}>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItem("Completed")}
          eventKey="Completed"
        >
          Completed
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItem("Trash")}
          eventKey="Trash"
        >
          Trash
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItem("Habit")}
          eventKey="Habit"
        >
          Habit
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItem("Summary")}
          eventKey="Summary"
        >
          Summary
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MenuOtherItem;
