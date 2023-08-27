import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { particles } from "@default/lib/confings/particles";

export default function ParticlesWrapper() {
	const particlesInit = async (main: any) => {
		console.log(main);
		await loadFull(main);
	};

	return (
		<Particles id="tsparticles" init={particlesInit} options={particles} />
	);
}
