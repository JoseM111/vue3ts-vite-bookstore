/** book.type.ts */
	// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
	
export interface IBookResponse {
	key: string
	name: string
	subject_type: string
	work_count: number
	works: WorkType[]
	ebook_count: number
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
export type WorkType = {
	key: string
	title: string
	edition_count: number
	cover_id: number
	cover_edition_key: string
	subject: string[]
	ia_collection: string[]
	lendinglibrary: boolean
	printdisabled: boolean
	lending_edition: string
	lending_identifier: string
	authors: AuthorType[]
	first_publish_year?: any
	ia: string
	public_scan: boolean
	has_fulltext: boolean
	availability: AvailabilityType
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type AvailabilityType = {
	status: string
	available_to_browse: boolean
	available_to_borrow: boolean
	available_to_waitlist: boolean
	is_printdisabled: boolean
	is_readable: boolean
	is_lendable: boolean
	identifier: string
	isbn?: any
	oclc?: any
	openlibrary_work: string
	openlibrary_edition: string
	last_loan_date?: any
	num_waitlist?: any
	last_waitlist_date?: any
	collection: string
	is_restricted: boolean
	is_browseable: boolean
	__src__: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type AuthorType = {
	key: string
	name: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
