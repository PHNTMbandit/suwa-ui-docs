import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return <div>Welcome to Strata UI Docs!</div>
}
