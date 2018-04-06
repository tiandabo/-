<template>
	<div class="input">
		<loginInput></loginInput>
	</div>
</template>

<script>
	import loginInput from "@/components/loginInput/loginInput"

	export default {
		components: {
			loginInput
		}
	}
</script>

<style>
	.input {
		overflow: hidden;
		width: 60%;
		margin: 50px auto;
	}
</style>