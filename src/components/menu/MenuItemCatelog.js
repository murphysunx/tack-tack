import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";

function MenuItemCatelog(props) {
  const { activeItemCatelog, setActiveItemCatelog } = props;

  return (
    <div>
      <ListGroup as="ul" activeKey={activeItemCatelog}>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("All")}
          eventKey="All"
        >
          All
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("Today")}
          eventKey="Today"
        >
          Today
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("Tomorrow")}
          eventKey="Tomorrow"
        >
          Tomorrow
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("Next 7 Days")}
          eventKey="Next 7 Days"
        >
          Next 7 Days
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("Calendar")}
          eventKey="Calendar"
        >
          Calendar
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveItemCatelog("Inbox")}
          eventKey="Inbox"
        >
          Inbox
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MenuItemCatelog;
