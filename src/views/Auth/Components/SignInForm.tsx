import { primaryBlack, primaryBrown } from "@/helpers/colors";
import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Typography,
} from "antd"

import React from "react";

type FieldType = {
  username: string;
  password: string;

  
  remember?: string;
};

const { Text } = Typography;

const SignInForm: React.FC = () => {
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
      <Form>
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Row style={{ width: "100%", marginBottom: "5px" }} justify={"end"}>
          <Button type="link" style={{ color: primaryBrown }}>
            Forgot password ?
          </Button>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default SignInForm;
