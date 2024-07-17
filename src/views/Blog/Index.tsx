import React from 'react';
import {Flex} from 'antd'
import Trending from './Components/Trending'
import OtherPosts from './Components/OtherPosts'

const Bio : React.FC = () => {
	return (

		<Flex vertical className= 'blog'>
			<Trending />
			<OtherPosts />
		</Flex>

	)
}


export default Bio;