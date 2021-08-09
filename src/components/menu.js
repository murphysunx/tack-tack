import MenuHeader from "./menu/MenuHeader";
import MenuItem from "./menu/MenuItem";
import MenuItemCatelog from "./menu/MenuItemCatelog";
import MenuLocalCalendar from "./menu/MenuLocalCalendar";
import MenuOtherItem from "./menu/MenuOtherItem";

export function Menu() {
  return (
    <div>
      <MenuHeader />
      <MenuItemCatelog />
      <MenuItem />
      <MenuLocalCalendar />
      <MenuOtherItem />
    </div>
  );
}

export default Menu;
