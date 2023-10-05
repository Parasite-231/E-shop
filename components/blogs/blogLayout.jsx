import { Card, Col, Row } from "antd";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(res)
    const data = await res.json();
    console.log(data)

  return {
    props: { blogs: data },
  };
};

const BlogPosts = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <Row gutter={16}>
        {blogs &&
          blogs.map((blog) => (
            <Col span={8} key={blog.id}>
              <Card title={blog.title} bordered={false}>
                {blog.body}
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BlogPosts;
