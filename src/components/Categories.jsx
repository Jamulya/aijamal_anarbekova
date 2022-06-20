import React from 'react'

function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }
  return (
    <div className="categories">
    <ul className="d-flex text-uppercase">
      <li className={activeItem === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>All</li>
      {items.map((name,index) => ( <li className={activeItem === index ? 'active' : ''} onClick={()=> onSelectItem(index)} key={`${name}_${index}`}>{name}</li> 
      ))}
    </ul>
  </div>
  )
}

export default Categories