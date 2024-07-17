import React from 'react';
import {Row, Flex , Col , Typography} from 'antd'
import {blogs } from '../blogData'
import MainCard from './MainCard'
import BlogCardSmall from './BlogCard'
import {v4 as uuidv4} from 'uuid'

const { Text , Title } = Typography



const Other : React.FC = () => {
	return (
	<Row gutter={[24,16]}  style={{ marginTop: '40px'}}>
		<Col span ={24} >
		<Title level={1} style={{marginBottom: '0px	'}} > Other Posts </Title>
		</Col>
		{blogs.slice(5,14).map(item => (
			< Col md = {8}   sm ={ 12} xs= { 24}  > 
					<BlogCardSmall {...item} key ={uuidv4()} />
		</Col>
			))
		}
		
	</Row>
	)
}

export default Other;