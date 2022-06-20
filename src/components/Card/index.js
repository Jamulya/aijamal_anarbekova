import React from "react";
import styles from "./Card.module.scss";
import  AppContext  from '../../context';


function Card({id, imageUrl, title, price, onFavorite, onAddToCard, favorited=false}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickBasket = () => {
    onAddToCard({id, title, imageUrl, price});
  };
  
  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price})
    setIsFavorite(!isFavorite)
  }
  
    return(
        <div  className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/heart.svg' : '/img/heart.svg'} alt="heart"/>
        </div>
        <img width={354} height={330} src={imageUrl} alt="women"/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <img className={styles.button} onClick={onClickBasket} width={52} height={52} 
            src={isItemAdded(id) ? '/img/basket-icon.svg': '/img/basket-icon.svg' } alt="basket"/>
            <span>${price}</span>
          </div>
        </div>
      </div>   
      
    );
}

export default Card;