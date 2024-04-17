import { Link } from 'react-router-dom';

const Blogs = () => {
  const data = [
    {
      id: 1,
      title: "A guide to tech careers",
      image: "src/assets/image 1.png",
      author: "Harry Potter",
      language: "JavaScript",
      description: "Dive into the differences between bootcamps, university education, and self-learning to make an informed decision about your educational journey. Explore each option’s advantages and considerations. Which path suits your learning style and goals?",
      date: "2022-01-01",

    },
    {
      id: 2,
      title: "Unlock your LEarning Journey",
      image: "src/assets/router.png",
      author: "Eliud Tenda",
      language: "Data science",
      description: "Explore high-paying tech careers like software engineering, data science, cybersecurity, and more. Discover salary insights, factors affecting earnings, and tips for finding the right tech career for you.",
      date: "2022-02-04",


    },
    {
      id: 3,
      title: "Love for what you want",
      image: `src/assets/javascript.jpg`,
      author: "Nancy Helar",
      language: "JavaScript",
      description: "New to the world of data? Learn the difference between data science and data analysis in this beginner-friendly blog post. Explore data analysis basics and uncover the interdisciplinary nature of data science. Ready to dive deeper?",
      date: "2022-03-05",


    },
    {
      id: 4,
      title: "Updates on the learning",
      image: "src/assets/software dev.jpg",
      author: "Jonathan Nelson",
      language: "python",
      description: "Introduction In the ever-evolving landscape of technology, the demand for skilled coders continues to soar. As we step into 2024,…",
      date: "2022-04-06",


    },
    {
      id: 5,
      title: "Lessons Learnt in the career",
      image: "src/assets/boomplay.jpg",
      author: "Sonie Badu",
      language: "General",
      description: "Coding interviews can be intense and being prepared is the only way to reduce tension, stay confident, and increase your…",
      date: "2022-01-01",

    },

  ];
  return (
    <div className='grid grid-cols-3 gap-4 mx-10 mt-8 mb-8'>
      {data.map((blog) => (
        <div key={blog.id} className='border p-4'>
          <div className='text-xl font-bold text-red'>{blog.title}</div>
          <div><img src={blog.image} alt={{ width: 200, height: 200 }} /></div>
          <div className="font-bold text-red font ">{blog.author}</div>
          <div>{blog.language}</div>
          <div>{blog.description}</div>
          <div>{blog.date}</div>
          <Link to={`/blogs/${blog.id}`} state={blog}>
            <button className="font-serif text-center bg-red-500 mt-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg">View blog</button>
          </Link>


        </div>
      ))}
    </div>
  );
};
export default Blogs;
