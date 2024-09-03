import { Col, Flex, List, Row, Typography } from "antd";
import { blog } from "../HomeData/blog";
import { primaryBrown, secondaryDullBrown } from "../../../helpers/colors";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

const { Title, Link, Paragraph, Text } = Typography;
const HomeBlog = () => {
  console.log(blog[0].pic);
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  return (
    <Row className="home-blog">
      <Title>
        Read more articles on our <span>Blog</span>{" "}
      </Title>
      <Row gutter={isMobile ? [0, 20] : 20}>
        <Col span={isMobile ? 24 : 13}>
          <Row className="card-container" gutter={20}>
            <Col vertical className="card-content" md={14} sm={24}>
              <Title level={4}>{blog[0].title}</Title>
              <Paragraph>{blog[0].description}</Paragraph>
              <Text style={{ color: secondaryDullBrown }}>
                <IoIosHeartEmpty /> 3 Likes
              </Text>
            </Col>
            <Col
              className="card-pic"
              md={10}
              sm={0}
              xs={0}
              style={{
                backgroundImage: blog[0]?.pic ? `url(${blog[0].pic})` : "none",
              }}
            />
          </Row>
        </Col>
        <Col span={isMobile ? 24 : 10} offset={1}>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={blog.slice(1)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Title
                      level={5}
                      style={{ color: primaryBrown, fontSize: 18 }}
                    >
                      {item.title}
                    </Title>
                  }
                  description={
                    <Flex vertical>
                      <Paragraph>{item.description}</Paragraph>
                      <Link
                        style={{ color: secondaryDullBrown }}
                        key="list-loadmore-edit"
                      >
                        Read More
                      </Link>
                    </Flex>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default HomeBlog;
