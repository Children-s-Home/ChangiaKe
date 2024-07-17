import { Flex, Row } from "antd";
import { useParams } from "react-router-dom";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import React from "react";

const Auth : React.FC = () => {
  const params = useParams();
  const { type } = params;

  return <Row className="auth">{type === "sign-in" ? <SignIn /> : <Register />}</Row>;
};

export default Auth;
