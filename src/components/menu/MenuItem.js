import { Nav } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";

function MenuItem(props) {
  const [activeList, setActiveList] = useState("Personal");
  const { activeTab, setActiveTab } = props;

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="lists" activeKey={activeTab}>
        <Nav.Item onClick={() => setActiveTab("lists")}>
          <Nav.Link eventKey="lists">Lists</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("tags")}>
          <Nav.Link eventKey="tags">Tags</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("filters")}>
          <Nav.Link eventKey="filters">Filters</Nav.Link>
        </Nav.Item>
      </Nav>

      <ListGroup as="ul" activeKey={activeList}>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveList("Personal")}
          eventKey="Personal"
        >
          Personal
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveList("Ausmed")}
          eventKey="Ausmed"
        >
          Ausmed
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveList("Career")}
          eventKey="Career"
        >
          Career
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => setActiveList("Learning")}
          eventKey="Learning"
        >
          Learning
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default MenuItem;
