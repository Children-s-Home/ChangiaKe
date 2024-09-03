import { Flex } from "antd";
import SearchBar from "./Components/SearchBar";
import DiscoverContent from "./Components/DiscoverContent";

const Discover = () => {
  return (
    <Flex gap={30} vertical className="discover-container">
      <SearchBar />
      <DiscoverContent />
    </Flex>
  );
};

export default Discover;
