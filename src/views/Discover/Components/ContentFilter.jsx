import { Button, Checkbox, ConfigProvider, Divider, Flex, Input, Typography } from 'antd';
import { filters } from '../discoverData';
import { v4 as uuidv4 } from 'uuid';
import { primaryBrown } from '../../../helpers/colors';

const { Text } = Typography;

const ContentFilter = () => {
  const filtersComponents = filters.map((item) => (
    <Flex vertical key={uuidv4()} >
        <Text strong> {item.title} </Text>
      <Checkbox.Group options={item.checkboxes} className='checkboxes' />
      <Divider />
    </Flex>
  ));

  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            colorSplit: primaryBrown,
          },
        },
      }}
    >
      <Flex vertical className='filter' gap={15}>
        <Divider />
        <Text>Location</Text>
        <Input placeholder='type location here...' />
        {filtersComponents}
        <Button type='primary' size='large'>
          Show Results
        </Button>
      </Flex>
    </ConfigProvider>
  );
};

export default ContentFilter;
