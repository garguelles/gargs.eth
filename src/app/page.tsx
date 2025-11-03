import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { POAPGallery } from "@/components/POAPGallery";

export default function Page() {
	return (
		<main className="relative">
			<Hero />
			<Projects />
			<POAPGallery />
		</main>
	);
}
