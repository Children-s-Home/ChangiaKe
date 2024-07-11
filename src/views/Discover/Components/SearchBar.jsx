import { Input } from 'antd';

const { Search } = Input;
const SearchBar = () => {
  return (
    <Search
      placeholder='Enter the name or location of the place you are looking for'
      className='search'
      enterButton
      size='large'
    />
  );
};

export default SearchBar;
