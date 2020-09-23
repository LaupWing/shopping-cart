<template>
	<button>
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
}
</style>