import React from 'react'
import Card from '../components/Card'


function Home({items, onAddToFavorite,onAddToBasket}) {

  return (
    <div className="content p-40">
    <h2>Category name</h2>

    <div className="d-flex flex-wrap"> 
    {items.map((item,index) => (
    <Card 
    key={index}
  
    onFavorite={(obj) => onAddToFavorite(obj)}
    onAddToCard={(obj) => onAddToBasket(obj)}
    {...item}
    />
    ))}
    </div>
  </div>
  )
}

export default Home;
