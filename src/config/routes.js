import index from '../page/user/index.vue'
import Frame from '../frame/subroute.vue'
import userIndex from '../page/user/login.vue'
import article from '../page/user/article.vue'

export default [
{
	path: '/',
	component: index
},{
	path: '/user',
	component: Frame,
	children: [
	{path: '/',component: userIndex},
	{path: 'info',component: article}
	]
}]