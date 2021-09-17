<!-- @Bookcase -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
<script setup lang="ts">
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
import { ref } from "vue"
import BookComponent from "../../components/book/Book.component.vue"
import { store } from "../../store/store.vuex"
import { WorkType } from "../../types/book.type"
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
const shelf = ref<WorkType[]>(store.state.shelf)

function removeBook(book: WorkType) {
	store.dispatch(
		'removeFromBookShelfAction',
		book
	)
}
/**/
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	
	<div class="bookcaseContainer ">
		<!---->
		<!--⚫️ Page-Title ⚫️-->
		<h1>My Bookshelf</h1>

		<div class="flexContainer">
			<div v-for="book in shelf"
			     :key="book.key"
			>
				
				<!--⚫️ Book-Components ⚫️-->
				<div class="forBook">
					<BookComponent :book="book"/>
				</div>
				
				<button
					@click="removeBook(book)"
					class="removeBookBtn"
				>
					Remove from Shelf
				</button>
			</div>
		</div>
			<!---->
	</div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">
@import 'Shelf.styles';
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
