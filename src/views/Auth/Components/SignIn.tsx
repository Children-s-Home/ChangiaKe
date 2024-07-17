import { Col, Row, Typography } from "antd";
import signIn from '../assets/signIn.jpeg'
import SignInForm from "./SignInForm";

const {Title , Text} = Typography;
const SignIn: React.FC = () => <Row className="sign-in">
  <Col span={12} className="sign-in-pic">
    <img src={signIn} alt="" />
  </Col>
  <Col span={12} className="form-side">
    <Title>
      Welcome to <span>Chang</span>ia
    </Title>
    <SignInForm />

  </Col>
</Row>;

export default SignIn;
