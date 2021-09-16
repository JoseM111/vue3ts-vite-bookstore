/** store.vuex.ts */
import { createStore } from "vuex"
import { loadBooksByCategoryService } from "../apis/http/book.service"
import { WorkType } from "../types/book.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type StateType = {
	bookList: Array<WorkType>
	shelf: Array<WorkType>
	isBusy: boolean
	currentCategory: string
	error: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const store = createStore<StateType>({
	// ™ STATE ____________
	state: {
		bookList: new Array<WorkType>(),
		shelf: new Array<WorkType>(),
		isBusy: false,
		currentCategory: 'science_fiction',
		error: ''
	},
	// ™ MUTATIONS ____________
	mutations: {
		mutSetBookList: (state: StateType, list: Array<WorkType>) => state.bookList = list,
		//..........
		mutAddToShelf: (state: StateType, book: WorkType): void => {
			// ™ ____________
			if ( !state.shelf.find((b) => b.key === book.key) ) state.shelf.push(book)
		},
		//..........
		mutSetCurrentCategory: (state: StateType, category: string) => state.currentCategory = category,
		//..........
		mutSetError: (state: StateType, error: string) => state.error = error,
		//..........
		mutSetIsBusy: (state: StateType) => state.isBusy = true,
		//..........
		mutResetIsBusy: (state: StateType) => state.isBusy = false,
		//..........
	},
	// ™ ACTIONS ____________
	actions: {
		addBookToShelfAction: ({ commit }, book: WorkType): void => (
		commit("mutAddToShelf", book)
		),
		//..........
		loadBookListAction: async ({ state, commit }, category: string): Promise<void> => {
			//..........
			/** @state.category:
			 *  state.category-->Only load if we don't have a book list already. */
			if ( state.currentCategory !== category || state.bookList.length === 0 ) {
				// MAKE SURE TO SET THE CURRENT CATEGORY
				commit('mutSetCurrentCategory', category)
				// clearing any errors to start
				commit('mutSetError', '')
				// setting isBusy to true
				commit('mutSetIsBusy')
				
				try {
					const results = await loadBooksByCategoryService(
					category
					)
					
					results
					? commit('mutSetBookList', results)
					: commit('mutSetError', '[ERROR].. Failed to set any books...')
					
				} catch ( _ ) {
					commit(
					'mutSetError',
					'[ERROR].. Exception thrown while fetching books...'
					)
					//..........
				} finally {
					commit('mutResetIsBusy')
				}
			}
		},
	}
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
