import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPage = () => {
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
        const filteredArticles = response.data.items.filter(item =>
          item.title.toLowerCase().includes("wedding") ||
          item.title.toLowerCase().includes("birthday")
        );

        setBlogs(filteredArticles);
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Blogs on Event Planning, Birthdays, and Weddings</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.guid} className="medium-feed-item">
            {blog.thumbnail && (
              <p className="medium-feed-image">
                <a href={blog.link}>
                  <img src={blog.thumbnail} alt={blog.title} width="600" />
                </a>
              </p>
            )}
            <p className="medium-feed-snippet">{blog.description}</p>
            <p className="medium-feed-link">
              <a href={blog.link}>Continue reading on Medium »</a>
            </p>
          </div>
        ))
      ) : (
        <div>No blogs found.</div>
      )}
    </div>
  );
};

export default BlogPage;

