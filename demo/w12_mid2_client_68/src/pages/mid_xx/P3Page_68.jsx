import { useState, useEffect } from 'react'
import MenuItem_xx from '../../components/mid_xx/MenuItem_xx'
import { supabase } from '../../db/clientSupabase'

const P3Page_45 = () => {
  const [menu, setMenu] = useState([])

  const fetchMenuFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('menu_45').select('*')
      // const response = await fetch(api_url)
      // const data = await response.json()
      console.log('supabase menus', data)
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuFromSupabase()
  }, [])

  return (
    <>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>Supabase: Hsingtai, 123456789</h2>
              <div className='underline'></div>
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
                const { id, img, title, price, category, descrip } = item
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
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default P3Page_45
