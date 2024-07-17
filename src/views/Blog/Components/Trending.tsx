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
		<Col span ={24}>
		<Title level={1}> Trending </Title>
		</Col>
		<Col span = {7} > 
			<Flex vertical gap={"middle"}>
			{blogs.slice(1,3).map(item => (
					<BlogCardSmall {...item} key ={uuidv4()} />
				))}
			</Flex>
		</Col>
		<Col span = {10} >

		<MainCard {...blogs[0]} /> 
		 </Col>

		< Col span = {7} > 
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