import { Col, Row, Typography, Flex } from "antd";
import { primaryBrown } from "@/helpers/colors";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import registerPic from "../assets/register.jpeg";
import RegisterForm from "./RegisterForm";

const { Title, Text, Link } = Typography;
const Register = () => {
  return (
    <Row className="sign-in">
      <Col span={12} className="sign-in-pic">
        <img src={registerPic} alt="" />
      </Col>
      <Col md={12} sm={24} lg={12} xl={12} className="form-side">
        <Title>
          Welcome to <span>Chang</span>ia
        </Title>
        <RegisterForm />

        <Flex justify={"center"} vertical align="center" gap={"middle"}>
          {/* <Text>
            <span style={{ color: primaryBrown }}>OR</span> Login with
          </Text>
          <Flex gap={"large"}>
            <FaFacebook size={24} color="blue" />
            <FcGoogle size={26} />
          </Flex>*/}
          <Text>
            Already have an account ?{" "}
            <Link
              style={{ color: primaryBrown }}
              onClick={() => navigateTo("/auth/sign-in")}
            >
              Sign In
            </Link>
          </Text>
        </Flex>
      </Col>
    </Row>
  );
};

export default Register;
