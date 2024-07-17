import { Button, Col, Flex, Row, Typography } from "antd";
import signIn from "../assets/signIn.jpeg";
import SignInForm from "./SignInForm";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { primaryBrown } from "@/helpers/colors";
import useRouting from "@/hooks/useRouting";

const { Title, Text, Link } = Typography;
const SignIn: React.FC = () => {
  const { navigateTo } = useRouting();
  return (
    <Row className="sign-in" >
      <Col span={12} className="sign-in-pic">
        <img src={signIn} alt="" />
      </Col>
      <Col md={12} sm={24} lg={12} xl={12} className="form-side">
        <Title>
          Welcome to <span>Chang</span>ia
        </Title>
        <SignInForm />
        
        <Flex justify={"center"} vertical align="center" gap={"middle"}>
          <Text>
            <span style={{ color: primaryBrown }}>OR</span> Login with
          </Text>
          <Flex gap={"large"}>
            <FaFacebook size={24} color="blue" />
            <FcGoogle size={26} />
          </Flex>
          <Text>
            Don't have an account ?{" "}
            <Link
              style={{ color: primaryBrown }}
              onClick={() => navigateTo("/auth/sign-up")}
            >
              Sign Up
            </Link>
          </Text>
        </Flex>
      </Col>
    </Row>
  );
};

export default SignIn;
