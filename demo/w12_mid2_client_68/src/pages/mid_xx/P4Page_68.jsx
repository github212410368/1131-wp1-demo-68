import { useState, useEffect } from 'react'
import MenuItem_xx from '../../components/mid_xx/MenuItem_xx'
import { supabase } from '../../db/clientSupabase'
import P3Page_45 from './P3Page_68'

const Page_45 = () => {
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState('')

  const fetchMenuByCategoryFromSupabase = async () => {
    try {
      if (category === '') {
        let { data, error } = await supabase.from('menu_45').select('*')
        console.log(`supabase menus ${category}`, data)
        setMenu(data)
      } else {
        let { data, error } = await supabase
          .from('menu_45')
          .select('*')
          .eq('category', category)
        console.log(`supabase menus ${category}`, data)
        setMenu(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuByCategoryFromSupabase()
  }, [category])

  const changeMenuFilter = (category) => {
    setCategory(category)
  }

  return (
    <>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>Fetch Supabase By Category: lcq, 212410145</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                data-id='all'
                onClick={() => changeMenuFilter('')}
              >
                all
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='breakfast'
                onClick={() => changeMenuFilter('breakfast')}
              >
                breakfast
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='lunch'
                onClick={() => changeMenuFilter('lunch')}
              >
                lunch
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='dessert'
                onClick={() => changeMenuFilter('dessert')}
              >
                dessert
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='shakes'
                onClick={() => changeMenuFilter('shakes')}
              >
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

export default P4Page_45
