import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import client from "../sanity";
import { urlFor } from "../sanity";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type=="blog"]{
            ...,
            
          }
        `
      )
      .then((data) => [setBlog(data)]);
  }, []);

  // const blogs = {
  //   _id,
  //   title,
  //   description,
  //   image,
  // };

  return (
    <div>
      <Header />
      <div className="bg-sectionBgColor lg:space-x-6 md:flex md:flex-col-reverse md:text-start lg:flex lg:px-32 lg:py-14 items-center justify-between lg:h-650 tracking-widest">
        <div className="md:px-4 md:py-6">
          <div className="block space-y-6 lg:w-508 leading-loose">
            <h1
              className="font-semibold med:text-xl md:text-lg text-headingColor"
              style={{ lineHeight: 2 }}
            >
              Insights
            </h1>
            <div className="w-full bg-text-bg bg-cover bg-center">
              <h1
                className="font-bold med:text-2xl md:text-xl md:p-10 med:p-10 text-headingColor text-center"
                style={{ lineHeight: 2 }}
              >
                Our Blogs
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar leo .
            </p>
          </div>
        </div>
        <div className="relative lg:w-656">
          <img
            className="w-full lg:h-96 ml-auto mr-auto mb-12 object-cover"
            src={require("../images/blog-banner.jpg")}
            alt="Blog Banner"
          />
          <div className="absolute med:-bottom-6 med:-left-10 md:bottom-2 md:left-2 shadow-md p-5 bg-white rounded-md w-64 items-center justify-center">
            <div className="flex items-center space-x-6">
              <AiFillStar size={64} color="gold" />
              <div className="block space-y-2">
                <h2 className="font-bold text-4xl">Subscribe</h2>

                <h2>Get free updates</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-12">
          <div className="mt-6 ml-2 mr-2 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {blog.map((blog) => (
              <div
                key={blog._id}
                className="group items-center justify-center gap-2 p-4 border-gray-200 shadow mb-2 bg-white"
              >
                <div className="h-48 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 ">
                  <img
                    src={urlFor(blog.image).url()}
                    alt="Blog 1"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="block">
                  <h3 className="mt-6 text-lg font-bold text-gray-900">
                    <Link to="/blogg" state={blog}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-base text-gray-500">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
