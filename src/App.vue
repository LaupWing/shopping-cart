<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
import faker from 'faker'
export default {
	name: 'App',
	created(){
		
		this.$store.dispatch('fetchDummyData')
	}
}
</script>
<style>
:root{
	--highlight-color: orange;
	--border-color: #d6d6d6;
}
*{
	margin: 0;
	padding: 0;
}
#app{
	display: flex;
	justify-content: center;
	width: 100vw;
}
</style>