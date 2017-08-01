import index from '../page/user/index.vue'
import Frame from '../frame/subroute.vue'
import login from '../page/user/login.vue'
import article from '../page/user/article.vue'

export default [
{
	path: '/',
	component: index
},{
	path: '/user',
	component: Frame,
	children: [
	{path: '/',component: login},
	// {path: 'info',component: 'info'},
	{path: 'article',component: article}
	]
}]