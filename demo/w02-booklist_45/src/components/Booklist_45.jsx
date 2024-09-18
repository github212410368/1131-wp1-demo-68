import Book_45 from "./Book_45";
import books_data from './data/booklist_data'

console.log(`Books_data`, books_data);

const Booklist_45 = () => {
  return (
    <section className="booklist">
    {books_data.map((book) => {
    const {id, img, title, author} = book
    return <Book_45 key={id} img={img} title={title} author={author}/>
    })}
    </section>
  )
}

export default Booklist_45
