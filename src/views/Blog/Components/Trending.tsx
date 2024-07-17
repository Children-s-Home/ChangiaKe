import React from 'react';
import {Row, Flex , Col , Typography} from 'antd'
import {blogs } from '../blogData'
import MainCard from './MainCard'
import BlogCardSmall from './BlogCard'
import {v4 as uuidv4} from 'uuid'

const { Text , Title } = Typography



const Trending : React.FC = () => {
	return (
	<Row gutter={[16,16]} >
		<Col span ={24} >
		<Title level={1} style={{marginBottom: '0px	'}} > Trending </Title>
		</Col>
		<Col md = {{span: 7, order: 1}}  lg={7} sm ={ {order: 4 ,	span: 12}} xs= { {order: 4, span: 24}}	> 
			<Flex vertical gap={"middle"}>
			{blogs.slice(1,3).map(item => (
					<BlogCardSmall {...item} key ={uuidv4()} />
				))}
			</Flex>
		</Col>
		<Col md = {{span: 10, order: 2}}  sm={{span: 24, order: 1}} >

		<MainCard {...blogs[0]} /> 
		 </Col>

		< Col md = {{span: 7, order: 3}}  lg={7} sm ={ {order: 3, span: 12}} xs= { {order: 3, span: 24}}  > 
			<Flex vertical gap={"middle"}>
			{blogs.slice(3,5).map(item => (
					<BlogCardSmall {...item} key ={uuidv4()} />
				))}
			</Flex>
		</Col>
	</Row>
	)
}

export default Trending;