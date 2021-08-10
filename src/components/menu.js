import MenuHeader from "./menu/MenuHeader";
import MenuItem from "./menu/MenuItem";
import MenuItemCatelog from "./menu/MenuItemCatelog";
import MenuLocalCalendar from "./menu/MenuLocalCalendar";
import MenuOtherItem from "./menu/MenuOtherItem";

import React, { useState } from "react";

function Menu() {
  const [activeTab, setActiveTab] = useState("lists");
  const [activeList, setActiveList] = useState("Personal");
  const [activeItemCatelog, setActiveItemCatelog] = useState("All");
  const [activeListCal, setActiveListCal] = useState(false);
  const [activeItem, setActiveItem] = useState("Completed");

  return (
    <div>
      <MenuHeader />
      <MenuItemCatelog
        activeItemCatelog={activeItemCatelog}
        setActiveItemCatelog={setActiveItemCatelog}
      />
      <MenuItem
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeList={activeList}
        setActiveList={setActiveList}
      />
      <MenuLocalCalendar
        activeListCal={activeListCal}
        setActiveListCal={setActiveListCal}
      />
      <MenuOtherItem activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  );
}

export default Menu;
