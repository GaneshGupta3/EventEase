import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainBlogPage.css";

const MainBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/wedding&api_key=po7gxdtlvebitgenuublsiohnzn4heuwqimo0umh`
        );

        // Filter articles based on specific keywords in the title or description
        const filteredArticles = response.data.items.filter((item) =>
          item.title.toLowerCase().includes("wedding") ||
          item.title.toLowerCase().includes("birthday")
        );

        setBlogs(filteredArticles);
      } catch (err) {
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <div className="frame">
        <div className="header-header">
          <div className="div">
            <div className="frame-wrapper">
              <div className="frame-2" />
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper">Home</div>
                <img
                  className="img"
                  alt="Icon arrow down"
                  src="/img/icon-16px-arrow-down.svg"
                />
              </div>
              <div className="frame-4">
                <div className="text-wrapper">Listing</div>
                <img
                  className="img"
                  alt="Icon arrow down"
                  src="/img/icon-16px-arrow-down-1.svg"
                />
              </div>
              <div className="frame-4">
                <div className="text-wrapper">Agents</div>
                <img
                  className="img"
                  alt="Icon arrow down"
                  src="/img/icon-16px-arrow-down-2.svg"
                />
              </div>
              <div className="text-wrapper-2">Property</div>
              <div className="text-wrapper">Blog</div>
            </div>
            <div className="frame-5">
              <div className="button-anchor-text">
                <img
                  className="img-2"
                  alt="Icon search"
                  src="/img/icon-24px-search.svg"
                />
                <div className="icon-after">Search</div>
              </div>
              <div className="button-small-v">
                <div className="text-wrapper-3">Log in</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="frame-6">
            <div className="title">
              <p className="real-estate-news">Real Estate News & Blogs</p>
            </div>
            <div className="frame-8">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div key={blog.guid} className="frame-10">
                    <div className="frame-11">
                      <div className="rectangle" />
                      <div className="frame-12">
                        <div className="button-tag-v">
                          <div className="active-3">Blog</div>
                        </div>
                        <div className="title-date">
                          <p className="p">{blog.title}</p>
                          <div className="time-date">
                            <div className="div-2">
                              <div className="ellipse" />
                              <div className="text-wrapper-4">
                                {new Date(blog.pubDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="medium-feed-snippet">
                          {blog.description}
                        </p>
                        <div className="medium-feed-link">
                          <a href={blog.link}>Continue reading on Medium »</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No blogs found.</div>
              )}
            </div>
            <div className="div">
              <div className="pagination-buttons">
                <div className="pagination-button">
                  <div className="text-wrapper-2">1</div>
                </div>
                {/* Additional pagination can be added here */}
              </div>
              <div className="button-medium-v">
                <div className="frame-13">
                  <div className="text-wrapper">Next Page</div>
                  <img
                    className="img"
                    alt="Icon arrow"
                    src="/img/icon-16px-arrow-right.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="frame-14">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
};

export default MainBlogPage;
