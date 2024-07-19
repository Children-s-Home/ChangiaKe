import React from "react";
import { Flex, Typography, Card, Button } from "antd";
import { BlogCard } from "../blogData";
import { v4 as uuidv4 } from "uuid";
import { primaryBrown } from "../../../helpers/colors";

const { Title, Text, Paragraph } = Typography;

const MainCard: React.FC<BlogCard> = ({
  blogImg,
  summary,
  duration,
  title,
}) => {
  return (
    <Card
      key={uuidv4()}
      cover={<img alt="example" src={blogImg} />}
      className="blog-main-card"
      bordered={false}
    >
      <Flex vertical>
        <Title level={3} style={{ color: primaryBrown }}>
          {title}
        </Title>
        <Paragraph style={{ marginBottom: "5px" }}>{summary}</Paragraph>
        <Text style={{ color: "grey", fontSize: 12, marginBottom: "5px" }}>
          {duration} read{" "}
        </Text>
        <Button type="primary" style={{ alignSelf: "flex-start" }}>
          Read More
        </Button>
      </Flex>
    </Card>
  );
};

export default MainCard;
