<template>
	<div 
		:class="`field ${focus}`"
	>
		<label>{{label}}</label>
		<input @focus="focus=true" :type="inputType">
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
			type: String
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
}
.focus{
	border-color: var(--highlight-color);
}
label{
	position: absolute;
	left: 0;
}
.focus label{
	font-size: .8rem;
	top: 0;
	left: 0;
	transform: translateY(-50%);
}
</style>