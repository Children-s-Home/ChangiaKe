import { ConfigProvider, Tabs } from "antd";
import { primaryBrown } from "../../../helpers/colors/";
import Donation from "./Donation";
import Volunteering from "./Volunteering";
import Fundraising from "./Fundraising";

const ServicesContent = () => {
  const items = [
    {
      key: "Donation",
      label: "Donation",
      children: <Donation />,
    },
    {
      key: "Volunteering",
      label: "Volunteering",
      children: <Volunteering />,
    },
    {
      key: "Fundraising",
      label: "Fundraising",
      children: <Fundraising />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: primaryBrown,
            itemHoverColor: primaryBrown,
            inkBarColor: primaryBrown,
            itemActiveColor: primaryBrown,
            horizontalItemPaddingLG: 5,
          },
        },
      }}
    >
      <Tabs
        className="tabs"
        defaultActiveKey="1"
        animated={true}
        // tabBarGutter='2.5em'
        tabBarStyle={{ borderBottom: "0 !important" }}
        size="large"
        indicator={{
          size: (origin) => origin - 50,
          align: "center",
        }}
        centered
        items={items}
      />
    </ConfigProvider>
  );
};

export default ServicesContent;
