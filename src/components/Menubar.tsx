import { useState } from 'react';
import { menubarItems } from './menubarItems';
// import MenuTitle from './MenuTitle';
import Menu from './Menu';
import MenuItem from './MenuItem';
import styles from './Menubar.module.css';

export default function Menubar({ mode, handleAction }) {

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const toggleMenu = (index: number) => {
    if (selectedMenuIndex === index) {
      setSelectedMenuIndex(null);
      return;
    }
    setSelectedMenuIndex(index);
  }

  return (

    <div className={`${styles.menubar} ${mode && styles.backgroundMode}`}>

      {menubarItems.map( (menu, i) =>
        (
        <div key={i} onMouseLeave={() => setSelectedMenuIndex(null)} onClick={() => toggleMenu(i)}>
          <Menu title={menu.label} isActive={i === selectedMenuIndex}>
          {menu.items?.map( (item, j) => 
            <MenuItem key={j} title={item.label} />
          )}
        </Menu>
       </div>
        )
      )}

    </div>
  )
}