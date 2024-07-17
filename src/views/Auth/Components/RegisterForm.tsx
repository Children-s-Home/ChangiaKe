import React from 'react'
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
} from "antd";

type FieldType = {
  username: string;
  password: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  confirmPassword: string;
  remember?: string;
};

const RegisterForm : React.FC = () => {
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
          name="fullName"
          rules={[{ required: true, message: "Please input your fullname!" }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item><Form.Item<FieldType>
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
         <Form.Item<FieldType>
          name="confirmPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
       
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default RegisterForm;