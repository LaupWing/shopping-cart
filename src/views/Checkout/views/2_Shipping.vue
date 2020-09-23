<template>
	<div class="shipping">
		<global-field
			v-for="field in fields"
			:key="field.label"
			:value="field.value"
			:label="field.label"
		/>
	</div>
</template>

<script>
export default {
	name: 'Shipping',
	data(){
		return{
			fields:[
				{
					value: '',
					label: 'Voornaam'
				},
				{
					value: '',
					label: 'Achternaam'
				},
				{
					value: '',
					label: 'Email',
					type: 'email'
				},
			]
		}
	}
}
</script>

<style>

</style>