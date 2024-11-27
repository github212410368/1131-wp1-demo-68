import { useState, useEffect } from 'react';
import MenuItem_xx from '../../components/mid_xx/MenuItem_xx';
let api_url = `http://localhost:3000/api/menu_xx`;

const P2Page_xx = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenuFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('menu', data);
      setMenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuFromNodeServer();
  }, []);

  return (
    <>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div class='title'>
              <h2>MidP2Page: Hsingtai, 123456789</h2>
              <div class='underline'></div>
            </div>
            <div className='btn-container'>
              <button type='button' className='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' className='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' className='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' className='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' className='filter-btn' data-id='shakes'>
                shakes
              </button>
            </div>
            <div className='section-center'>
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item;
                return (
                  <MenuItem_xx
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default P2Page_xx;
