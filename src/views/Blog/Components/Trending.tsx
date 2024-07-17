import React from 'react';
import {Row, Flex , Col , Typography} from 'antd'
import {blogs } from '../blogData'
import MainCard from './MainCard'

const { Text , Title } = Typography



const Trending : React.FC = () => {
	return (
	<Row gutter={[16,16]} >
		<Col span ={24}>
		<Title level={1}> Trending </Title>
		</Col>
		<Col span = {7} > 
			<Flex vertical>

			</Flex>
		</Col>
		<Col span = {10} >

		<MainCard {...blogs[0]} /> 
		 </Col>

		< Col span = {7} > 
			<Flex vertical>
			</Flex>
		</Col>
	</Row>
	)
}

export default Trending;