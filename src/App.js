import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios  from 'axios';
import Header from './components/Header'
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

 React.useEffect(() => {
 async function fetchData() {
  const itemsResponse = await axios.get('https://62ac5159bd0e5d29af1ffc6c.mockapi.io/item');
  const cartResponse = await axios.get('https://62ac5159bd0e5d29af1ffc6c.mockapi.io/cart');
  const favoritesResponse = await axios.get('https://62ac5159bd0e5d29af1ffc6c.mockapi.io/favorites');

    setItems(itemsResponse.data)
    setCartItems(cartResponse.data)
    setFavorites(favoritesResponse.data)
  }
  fetchData();
 }, []);

 const onAddToBasket = (obj) => {
  if(cartItems.find((item) => Number(item.id) === Number(item.id))) {
    axios.delete(`https://62ac5159bd0e5d29af1ffc6c.mockapi.io/cart/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(item.id)));
  }else{
    axios.post('https://62ac5159bd0e5d29af1ffc6c.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  }
 };
 const onRemoveItem = (id) => {
  axios.delete(`https://62ac5159bd0e5d29af1ffc6c.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id))
 };
 const onAddToFavorite = async (obj) => {
  try {
    if(favorites.find((obj) => Number(obj.id) === Number(obj.id))) {
      axios.delete(`https://62ac5159bd0e5d29af1ffc6c.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(item.id)));

    } else {
      const {data} = await axios.post('https://62ac5159bd0e5d29af1ffc6c.mockapi.io/favorites', obj);
  
      setFavorites((prev) => [...prev, data])
     };
  } catch (error) {
    alert('dont get')
  }
  }


const isItemAdded = (id) => {
  return cartItems.some(obj => Number(obj.id) === Number(id))
}

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite}}>
        <div className="wrapper clear">
  {cartOpened && <Drawer items={cartItems} onClose ={() => setCartOpened(false)} onRemove ={onRemoveItem}/>}
    <Header onClickCart={()=> setCartOpened(true)} />
   <Routes>
    <Route path='/' exact element={<Home 
      items={items} cartItems={cartItems} onAddToBasket={onAddToBasket} favorites={favorites} onAddToFavorite={onAddToFavorite}
      />}>
    </Route>
    <Route path='/favorites' exact element={<Favorites/>} >
    </Route>
    </Routes>
  </div>
    </AppContext.Provider>
  )
  }

export default App;
