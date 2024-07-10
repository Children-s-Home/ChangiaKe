import { Flex, Typography } from "antd"

const {Title} = Typography
const Gallery = () => {
  return (
    <Flex vertical className="gallery-container">
        <Title >
            <span>
                Gallery
            </span>
        </Title>
    </Flex>
  )
}

export default Gallery