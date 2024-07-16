import { Flex } from "antd";
import { useParams } from "react-router-dom";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";

const Auth = () => {
  const params = useParams();
  const { type } = params;

  return <Flex>{type === "sign-in" ? <SignIn /> : <Register />}</Flex>;
};

export default Auth;
