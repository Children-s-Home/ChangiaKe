import { Button, Col, Flex, Row, Typography } from "antd";
import { needs } from "../DetailsData/detailsData";
import { v4 as uuidv4 } from "uuid";

const { Title } = Typography;

const Needs = () => {
  return (
    <Flex className="needs" vertical>
      <Title>
        What we
        <span> need </span>
      </Title>

      <Row className="banner" gutter={[24, 24]}>
        {needs.map((need) => (
          <Col
            key={uuidv4()}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="need-card"
          >
            <div className="img-div">
              <img src={need.icon} alt="" />
            </div>
            <Title level={5}> {need.title} </Title>
          </Col>
        ))}

        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary">Support us</Button>
        </Col>
      </Row>
    </Flex>
  );
};

export default Needs;
