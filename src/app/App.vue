<!-- @App -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
<script setup lang="ts">
import { computed } from "vue"
import { store } from "../store/store.vuex"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
const isBusy = computed(() => store.state.isBusy)
const error = computed(() => store.state.error)
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	<div class="container bg-white mx-auto p-2">
		<!---->
		<ul class="flex list-none">
			<li>
				<router-link to="/" class="linkBtn">Home</router-link>
			</li>
			<li>
				<router-link to="/add" class="linkBtn">Add to Library</router-link>
			</li>
		</ul>
		
		<div v-if="isBusy"
		     class="text-4xl text-yellow-600"
		     style="font-family: 'JetBrains Mono', sans-serif; font-weight: 700;"
		>Loading...
		</div>
		<!---->
		<div v-if="error" class="text-4xl text-red-500">
			{{ error }}
		</div>
		<!---->
		
		<router-view></router-view>
	</div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">
@import "App.styles.scss";
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
