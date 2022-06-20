import React from 'react'
import Card from '../components/Card';
import  AppContext  from '../context';

function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContext);
  
  return (
    <div className="content p-40">
    <h2>Favorites</h2>

    <div className="d-flex flex-wrap"> 
    {favorites.map((item,index) => (
    <Card 
    key={index}
    favorited={true}
    onFavorite={onAddToFavorite}
    {...item}
    />
    ))}
    </div>
  </div>
  )
}

export default Favorites;
