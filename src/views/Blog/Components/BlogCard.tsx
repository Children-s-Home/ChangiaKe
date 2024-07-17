import React from 'react'
import {Flex , Typography} from 'antd'
import {BlogCard} from '../blogData'
import {primaryBrown} from '../../../helpers/colors'


const {Title , Text} = Typography;


const BlogCardSmall : React.FC <BlogCard> = ({blogImg, title , date , author  }) => {
	return (
		<Flex vertical>
			<div className ={'blog-img'}>
				<img src={blogImg} alt={''} />
			</div>
		<Text> {date.toUpperCase} </Text>
	<Title level={4} style ={{ color: primaryBrown}}> {title} </Title >
		<Text > By {author} < /Text>
		</Flex>
	)
}

export default BlogCardSmall;