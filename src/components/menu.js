import MenuHeader from "./menu/MenuHeader";
import MenuItem from "./menu/MenuItem";
import MenuItemCatelog from "./menu/MenuItemCatelog";
import MenuLocalCalendar from "./menu/MenuLocalCalendar";
import MenuOtherItem from "./menu/MenuOtherItem";

import React, { useState } from "react";

function Menu() {
  const [activeTab, setActiveTab] = useState("lists");

  return (
    <div>
      <MenuHeader />
      <MenuItemCatelog />
      <MenuItem activeTab={activeTab} setActiveTab={setActiveTab} />
      <MenuLocalCalendar />
      <MenuOtherItem />
    </div>
  );
}

export default Menu;
