/** routes.ts */
import { createRouter, createWebHistory } from "vue-router"
import Shelf from '../views/shelf/Shelf.vue'
import Library from '../views/libraries/Library.vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const router = createRouter({
	// ™ ____________
	history: createWebHistory(),
	routes: [
		{ path: "/", component: Shelf },
		{ path: "/add", component: Library },
	]
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
