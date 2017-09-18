export default{
	increment: (state) => {
		state.count = !state.count;
	},
	decrement: (state) => {
		state.count = state.count - 3;
	}
} 

