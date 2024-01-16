import { useState } from 'react';
import menu from './data'
import Title from './Title';
import MenuItems from './MenuItems';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item)=>item.category))]

const App = () => {
  let [menuItems, setMenuItems] = useState(menu);
  let [categories, setCategories] = useState(allCategories);
  
  const filterItem = (category) =>{
    if (category ==='all'){
      setMenuItems(menu)
      return;
    }

    console.log(category);
    let newItems = menu.filter((item)=>item.category==category)
    setMenuItems(newItems);

  }
  
  
  // let tempCategories = menuItems.map((item)=>item.category)
  // let tempSet = new Set(tempCategories);
  // const tempItems = ['all', ...tempSet]
  
  

  return (
    <main>
      <Title title="Our Menu" />
      <Categories categories={categories} filterItem={filterItem}/>
      <Menu items={menuItems} />
    </main>

  )


};
export default App;
