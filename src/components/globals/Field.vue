<template>
	<div 
		:class="`field ${focus ? 'focus': ''}`"
	>
		<label>{{label}}</label>
		<input 
			@focus="focus=true" 
			@blur="focus=false" 
			:type="inputType"
		/>
	</div>
</template>

<script>
export default {
	name: 'Field',
	props:{
		inputType: {
			type: String,
			default: 'text'
		},
		label:{
			type: String,
			required: true
		},
		value:{
			type: String,
			required: true
		}
	},
	computed:{
		inputProxy:{
			get(){
				return this.value ? this.value : this.$store.getters[label]
			},
			set(value){
				return this.value ? this.$emit('update:value', value) : this.$store.commit(`SET_${value.toUpperCase()}`, value)
			}
		}
	},
	data(){
		return{
			focus: false
		}
	}
}
</script>

<style scoped>
.field{
	display: flex;
	align-items: center;
	position: relative;
	margin: 10px 0;
	min-width: 300px;
}
.focus{
	border-color: var(--highlight-color);
}
label{
	position: absolute;
	left: 10px;
	user-select: none;
	pointer-events: none;
	transition: .25s;
	background: var(--background-color);
}
.focus label{
	font-size: .8rem;
	top: 0;
	left: 10px;
	transform: translateY(-50%);
}
input{
	width: 100%;
	padding: 5px;
}
</style>