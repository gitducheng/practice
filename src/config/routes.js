import index from '../page/index.vue'
import Frame from '../frame/subroute.vue'
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'

export default [
{
	path: '/',
	component: index
},{
	path: '/user',
	component: Frame,
	children: [
	{path: '/',component: userIndex},
	{path: 'info',component: userInfo}
	]
}]