<!-- @BookcaseView -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
<script setup lang="ts">
import { onMounted } from "vue"
import { libraryHook } from "./library.composable"
import BookComponent from "../../components/book/Book.component.vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀

const {
	categories,
	currentCategory,
	books,
	shelfSize,
	loadBooks,
	addBook,
	disableIfBookOnShelf,
	loadBooksCallbackHook
} = libraryHook()

onMounted(loadBooksCallbackHook)
/**/
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	<div class="BookcaseViewContainer">
		<h1>My Bookcase</h1>
		
		<div>
			<label>Book Categories</label>
			<select
				id="categories"
				@change="loadBooks()"
				v-model="currentCategory"
				class="dropDown"
			>
				<option v-for="category in categories"
				        :key="category.id"
				        :value="category.id"
				>
					{{ category.name }}
				</option>
			</select>
		</div>
		
		<div>Shelf size: {{ shelfSize }}</div>
		
		<div class="flexContainer">
			<!---->
			<div v-for="book in books"
			     :key="book.key"
			>
				
				<div class="forBook">
					<!--⚫️ Book-Components ⚫️-->
					<BookComponent :book="book"/>
				</div>
				
				<button
					@click="addBook(book)"
					:disabled="disableIfBookOnShelf(book)"
					class="addBookBtn"
				>
					Add to Shelf
				</button>
			</div>
			<!---->
		</div>
		
	</div>
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">
@import "src/views/libraries/Library.styles";
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
