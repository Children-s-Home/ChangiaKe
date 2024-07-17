import React from 'react';
import {Flex} from 'antd'
import Trending from './Components/Trending'

const Bio : React.FC = () => {
	return (

		<Flex vertical className= 'blog'>
			<Trending />
		</Flex>

	)
}


export default Bio;