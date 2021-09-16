/** routes.ts */
import { createRouter, createWebHistory } from "vue-router"
import Bookcase from '../views/bookcases/Bookcase.vue'
import Library from '../views/libraries/Library.vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const router = createRouter({
	// ™ ____________
	history: createWebHistory(),
	routes: [
		{ path: "/", component: Bookcase },
		{ path: "/add", component: Library },
	]
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
