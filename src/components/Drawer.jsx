function Drawer({onClose, onRemove, items = [] }) {
    return(
        <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between">My Bag, <span>3 items</span>
        <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"/>
        </h2>
        <div className="drawer__inner">
        {
          items.map((obj) => (  <div className="cart1">
          <div key={obj.id} className="cart__left">
              <div className="cart__left__item">
                <div className="cart__left__title">
                  <h2>{obj.title}</h2>
                  <span>${obj.price}</span></div>
                  <div className="cart__left__size">
                    <h2>Size:</h2>
                    <div className="size__items">
                      <ul className="size__list d-flex justify-between ">
                        <li className="size__left">S</li>
                        <li className="size__right">M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="cart__left__color">
                    <h2>Color:</h2>
                    <div className="color">
                      <ul className="colors d-flex ">
                        <li className="color1"></li>
                        <li className="color2"></li>
                        <li className="color3"></li>
                      </ul>
                    </div>
                  </div>
               
              </div>
                <div className="counter">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                  </div>
                 
                <div className="product__item">
                  <img style={{backgroundImage: `url(${obj.imageUrl})`}}/>
                </div>
                
                <div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/remove.svg" alt="Remove" />
                </div>
          </div>
        </div>
        ))
        }

          <div className="total__cart">
            <li className="total__price">
                <span>Total</span>
                <div></div>
                <b>$200.00</b>
            </li>
          </div>

          <div className="button__checkout">
            <div className="view__bag">
              <button>View bag</button>
            </div>
            <div className="check__out">
              <button>check out</button>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
}

export default Drawer;