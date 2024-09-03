import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Form,
  Input,
  List,
  Row,
  Tooltip,
  Typography,
} from "antd";
import { useSelector } from "react-redux";
import { primaryBlack, primaryBlue, primaryBrown } from "../../helpers/colors";
import { importantLinks, navItems, socialLinks } from "../layoutData";
import { v4 as uuidv4 } from "uuid";

const { Text, Title, Link } = Typography;

const FooterContent = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: primaryBlack,
            hoverBorderColor: primaryBlack,
            borderRadius: 50,
            colorBorder: primaryBrown,
          },
        },
      }}
    >
      <Row className="footer-row">
        <Col span={isMobile ? 24 : 16} className="footer-links">
          {!isMobile ? (
            <>
              <List
                size="small"
                split={false}
                dataSource={navItems.slice(1, 5)}
                renderItem={(item) => <List.Item>{item.label}</List.Item>}
              />
              <List
                size="small"
                split={false}
                dataSource={importantLinks}
                renderItem={(item) => <List.Item>{item.label}</List.Item>}
              />
            </>
          ) : (
            <Flex wrap gap="large" style={{ marginBottom: 15 }}>
              {[...importantLinks].map((item) => (
                <Text key={uuidv4()}>{item.label}</Text>
              ))}
            </Flex>
          )}
        </Col>
        <Col span={isMobile ? 24 : 8} className="newsletter">
          <Flex vertical>
            <Title level={4} style={{ fontWeight: "500", color: primaryBlue }}>
              Sign Up for the Newsletter
            </Title>
            <Text>
              This newsletter gives you a reminder of the events you reserved
              and the upcoming events that may interest you.
            </Text>
            <Form
              autoComplete="off"
              style={{ display: "flex", gap: "10px", marginTop: "10px" }}
            >
              <Form.Item
                style={{ flex: "1" }}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                  {
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  style={{ borderWidth: 2 }}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </Form.Item>
            </Form>
            <Flex gap={60}>
              {socialLinks.map((item) => (
                <Tooltip key={uuidv4()} title={item.title}>
                  <Link
                    className="footer-social"
                    style={{
                      fontSize: 20,
                      color: primaryBlack,
                    }}
                    href={item.link}
                    target="_blank"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </Flex>
          </Flex>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default FooterContent;
