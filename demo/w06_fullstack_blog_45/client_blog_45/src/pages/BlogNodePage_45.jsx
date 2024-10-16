import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa6";
import { FaMugSaucer } from "react-icons/fa6";

let api_url = `http://localhost:3000/api/blog_45`;

const BlogNodePage_45 = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromNodeServer = async () => {
    try{
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlogsFromNodeServer();
  }, []);
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>Latest Blogs from Node</h2>
        <h2>Chunchien Liu, 212410145</h2>
      </div>
      <div className="blogs-center">
        <article className="blog">
          <img
            src="/images/photo-1.jpg"
            alt="A steaming cup of coffee"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <FaMugSaucer /></span>
            <h3>Seven Reasons Why Coffee is Awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">Read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/photo-2.jpg"
            alt="Eiffel Tower in Paris"
            className="img `b`log-img"
          />
          <div className="blog-content">
            <span>travel <FaGlobe /></span>
            <h3>Travel to Paris</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">Read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/photo-3.jpg"
            alt="Another coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <FaMugSaucer /></span>
            <h3>Coffee: The Best Way to Start Your Day</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">Read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/photo-4.jpg"
            alt="A cozy coffee moment"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <FaMugSaucer /></span>
            <h3>Coffee Culture: A Global Phenomenon</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">Read more</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogNodePage_45;
