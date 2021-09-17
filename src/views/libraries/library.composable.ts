/** shelf.composable */
import { computed, ref } from "vue"
import { store } from "../../store/store.vuex"
import { WorkType } from "../../types/book.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const libraryHook = () => {
	// ™ ____________
	const categories = [
		{ id: 'science_fiction', name: 'Science Fiction' },
		{ id: 'biography', name: 'Biography' },
		{ id: 'science', name: 'Science' },
		{ id: 'technology', name: 'Technology' },
	]
	
	const books = computed<WorkType[]>(() => store.state.bookList)
	// Monitors when a new book is added to the shelf
	const shelfSize = computed<number>(() => store.state.shelf.length)
	// returns the latest value of the category
	const currentCategory = ref<string>(store.state.currentCategory)
	
	async function loadBooks(): Promise<void> {
		// ™ ____________
		await store.dispatch('loadBookListAction', currentCategory.value)
	}
	
	function addBook(book: WorkType): void {
		// ™ ____________
		store.dispatch('addBookToShelfAction', book)
		.then()
	}
	
	// function loadBooksCallbackHook() {
	// 	return async (): Promise<void> => (
	// 	await loadBooks()
	// 	)
	// }
	
	async function loadBooksCallbackHook(): Promise<void> {
		return await loadBooks()
	}
	
	// Will disable button if you already added the book to the shelf
	function disableIfBookOnShelf(book: WorkType): WorkType | undefined {
		// ™ ____________
		return store.state.shelf.find((b) => b.key === book.key)
	}
	
	return {
		categories,
		currentCategory,
		books,
		shelfSize,
		loadBooks,
		addBook,
		disableIfBookOnShelf,
		loadBooksCallbackHook
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
