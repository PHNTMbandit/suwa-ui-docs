import { createFileRoute } from "@tanstack/react-router"
import { Button, Slider } from "suwa-ui"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return (
		<div className="h-screen w-full">
			<Button>Click me</Button>
			<Button tone="error">Click me</Button>
			<Slider />
		</div>
	)
}
