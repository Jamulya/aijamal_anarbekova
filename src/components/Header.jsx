import { Link } from 'react-router-dom';
import Categories from "./Categories";

function Header(props) {
  
    return(
        <header className="d-flex justify-between align-center p-40">
         
          <Categories onClick={(name)=>console.log(name)} items ={['Women','Men','Kids']}/>
      <Link to='/'>
      <div className="mainLogo">
        <img width={41} height={41} src="/img/logo.png" alt="logo"/>
        </div>
        </Link>
        
     <ul className="d-flex justify-between align-center">
        <li className="mr-25 cu-p">
          <img  width={45} height={25} src="/img/currency.svg" alt="currency"/>
        </li>
        <li className="mr-25 cu-p">
          <Link to="/favorites">
          <img width={20} height={20} src="/img/heart.svg" alt="favorite"/>
          </Link>
        </li>
        <li onClick={props.onClickCart} className="cu-p">
          <img width={20} height={20} src="/img/basket.svg" alt="basket"/>
        </li>
     </ul>
     
    </header>
    ); 
}

export default Header;