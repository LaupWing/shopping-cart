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
					label: 'voornaam'
				},
				{
					label: 'achternaam'
				},
				{
					label: 'email',
					type: 'email'
				},
				{
					label: 'woonplaats'
				},
				{
					label: 'straat'
				},
				{
					label: 'huisnummer'
				},
			]
		}
	}
}
</script>

<style>

</style>