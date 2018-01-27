import index from '../page/user/index.vue'
import Frame from '../frame/subroute.vue'
import login from '../page/user/login.vue'
import article from '../page/user/article.vue'
import lists from '../page/lists/lists.vue'
import list from '../page/lists/list.vue'
import write from '../page/write/write.vue'

export default [
{
	path: '/',
	//name: 'index',
	component: index
},{
	path: '/user',
	component: Frame,
	children: [
	{path: 'login',component: login},
	{path: 'life',component: lists},
	{path: 'article',component: article},
	{path: 'write',component: write}
	]
},{
	path: '/lists/:id',
	component: list
}]