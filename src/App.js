import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const allCategories = new Set(items.map(item => item.category));

  const [categories, setCategories] = useState(["all", ...allCategories]);

  const handleFilterItems = category => {
    if (category === "all") return setMenuItems(items);
    const newItems = items.filter(item => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>
            our menu
            <div className="underline"></div>
          </h2>
        </div>
        <Categories
          categories={categories}
          handleFilterItems={handleFilterItems}
          
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
