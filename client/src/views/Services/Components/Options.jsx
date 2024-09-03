import { Flex, Typography } from "antd";
import paypal from "../assets/paypal.png";
import mpesa from "../assets/download.png";
import visa from "../assets/visa.png";

const Options = () => {
  return (
    <Flex wrap gap={"large"} vertical align="middle" justify="center">
      <img src={paypal} alt="" />
      <img src={visa} alt="" />
      <img src={mpesa} alt="" />
    </Flex>
  );
};

export default Options;
