import repeat from './assets/repeat.png'
import big from './assets/big.jpeg'

interface BlogCard {
	blogImg: string;
	title: string;
	summary?: string;
	date?:  string;
	author?: string;
	duration?: string;
}



const blogs : BlogCard[]  = [
{
	blogImg: big,
	title: 'I met my best friend while volunteering',
	summary: "I've always been a big believer in the power of volunteering. It's a great way to give back to your community, and it's also a great way...",
	duration: '10 min'
},
{
	blogImg: repeat,
	title: 'Donating made easy for everyone',
	author: 'Loise Mumbi',
	date:'24 March 2023'

}, 
{
	blogImg: repeat,
	title:  'The power of giving back to the community',
	author: 'Simon Muhia',
	date: '27 July 2025',
},
{
	blogImg: repeat,
	title: 'How to get the most out of your donation',
	author: 'Muthoni Kihia',
	date: '29 January 2022'
}, 
{
	blogImg: repeat,
	title: 'Benefits of giving back to the community',
	author: 'Leo Mambotela',
	date: '2nd June 2020'
},

	]

export {blogs, BlogCard }