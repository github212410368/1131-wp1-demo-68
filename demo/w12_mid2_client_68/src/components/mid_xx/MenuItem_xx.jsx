const MenuItem_xx = ({ id, title, img, price, descrip }) => {
  return (
    <article key={id} className='menu-item'>
      <img src={img} alt='buttermilk' pancakes='' className='photo' />
      <div className='item-info'>
        <header>
          <h4>
            {id}-{title}
          </h4>
          <h4 className='price'>${price}</h4>
        </header>
        <p className='item-text'>{descrip}</p>
      </div>
    </article>
  );
};

export default MenuItem_xx;
