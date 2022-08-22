/** @jsx h */
	import { h } from "preact";
	import SearchBar from "../../islands/SearchBar.tsx"
	
	export default function Page() {
		return (
			<div style="padding: 10px; width: 90%; margin: 0 auto;">
					<SearchBar ></SearchBar>
					<h1 id="first-post">First Post</h1>
<p>Its the obligatory first post.</p>

			</div>
		);
	}
