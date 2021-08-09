import { Nav } from "react-bootstrap";
import React, { useState } from "react";

import MenuItemCatelog from "./MenuItemCatelog";

function MenuItem() {
  const [activeTab, setActiveTab] = useState("lists");

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
      {/* <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Lists
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tags
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Filters
            </a>
          </li>
        </ul>
      </div> */}

      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A fourth link item
        </a>
      </div>
    </>
  );
}

export default MenuItem;
