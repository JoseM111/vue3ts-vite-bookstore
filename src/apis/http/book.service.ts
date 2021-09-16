/** book.service.ts */
import axios from 'axios'
import { IBookResponse, WorkType } from "../../types/book.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type PromiseType = Promise<WorkType[] | undefined>

export const loadBooksByCategoryService = async (category: string): PromiseType => {
	// ™ ____________
	const url = `https://openlibrary.org/subjects/${category}.json`
	const result = await axios.get<IBookResponse>(url)
	
	return result.status === 200
	? result.data.works
	: undefined
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
