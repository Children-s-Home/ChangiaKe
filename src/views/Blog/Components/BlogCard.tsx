import React from 'react'
import {Flex , Typography} from 'antd'
import {BlogCard} from '../blogData'

const {Title , Text} = Typography;


const BlogCard : React.FC <BlogCard> = ({blogImg, title , date , author  }) => {
	return (
		<Flex vertical>
			<div className ={'blog-img'}>
				<img src={blogImg} alt={''} />
			</div>
		<Text> {date.toUpperCase} </Text>
		<Title level={4} > {title} </Title >
		<Text > By {author} < /Text>
		</Flex>
	)
}