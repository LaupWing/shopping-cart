<template>
	<button :style="{
		...extraStyling
	}">
		{{text}}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props:{
		text:{
			type: String,
			required: true
		},
		extraStyling:{
			type: Object
		}
	}
}
</script>

<style scoped>
button{
	width: 100%;
	padding: 10px;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 1px;
	max-width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
	cursor: pointer;
}
</style>