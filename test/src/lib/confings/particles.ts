export const particles = {
	autoPlay: true,
	background: {
		color: {
			value: "hsla(0,100%,0,0)",
		},
		image: "",
		position: "",
		repeat: "",
		size: "",
		opacity: 0,
	},
	backgroundMask: {
		composite: "destination-out" as any,
		cover: {
			color: {
				value: "#fff",
			},
			opacity: 0.5,
		},
		enable: false,
	},
	defaultThemes: {},
	delay: 0,
	fullScreen: {
		enable: true,
		zIndex: 0,
	},
	detectRetina: true,
	duration: 0,
	fpsLimit: 120,
	manualParticles: [],
	particles: {
		bounce: {
			horizontal: {
				random: {
					enable: false,
					minimumValue: 0.1,
				},
				value: 1,
			},
			vertical: {
				random: {
					enable: false,
					minimumValue: 0.1,
				},
				value: 1,
			},
		},
		collisions: {
			absorb: {
				speed: 1,
			},
			bounce: {
				horizontal: {
					random: {
						enable: false,
						minimumValue: 0.1,
					},
					value: 1,
				},
				vertical: {
					random: {
						enable: false,
						minimumValue: 0.1,
					},
					value: 1,
				},
			},
			enable: false,
			maxSpeed: 1,
			mode: "bounce" as any,
			overlap: {
				enable: true,
				retries: 0,
			},
		},
		color: {
			value: "hsla(0, 100%, 100%,.15)",
			animation: {
				h: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					delay: 0,
					decay: 0,
					sync: true,
				},
				s: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					delay: 0,
					decay: 0,
					sync: true,
				},
				l: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					delay: 0,
					decay: 0,
					sync: true,
				},
			},
		},
		groups: {},
		move: {
			angle: {
				offset: 0,
				value: 90,
			},
			attract: {
				distance: 100,
				enable: false,
				rotate: {
					x: 3000,
					y: 3000,
				},
			},
			center: {
				x: 50,
				y: 50,
				mode: "percent" as any,
				radius: 0,
			},
			decay: 0.05,
			distance: {},
			direction: "top" as any,
			drift: 0,
			enable: true,
			gravity: {
				acceleration: 23.81,
				enable: true,
				inverse: false,
				maxSpeed: 10,
			},
			path: {
				clamp: true,
				delay: {
					random: {
						enable: false,
						minimumValue: 0,
					},
					value: 0,
				},
				enable: false,
				options: {},
			},
			outModes: {
				default: "destroy",
				bottom: "destroy",
				left: "destroy",
				right: "destroy",
				top: "none",
			} as any,
			random: false,
			size: false,
			speed: {
				min: 10,
				max: 50,
			},
			spin: {
				acceleration: 0,
				enable: false,
			},
			straight: false,
			trail: {
				enable: false,
				length: 10,
				fill: {},
			},
			vibrate: false,
			warp: false,
		},
		number: {
			limit: null as any,
			value: 50,
		},
		opacity: {
			random: {
				enable: false,
				minimumValue: 0.1,
			},
			value: 1,
			animation: {
				count: 0,
				enable: false,
				speed: 30,
				decay: 0,
				delay: 0,
				sync: false,
				mode: "auto" as any,
				startValue: "random" as any,
				destroy: "auto" as any,
			},
		},
		reduceDuplicates: false,
		shadow: {
			blur: 0,
			color: {
				value: "#000",
			},
			enable: false,
			offset: {
				x: 0,
				y: 0,
			},
		},
		shape: {
			close: true,
			fill: true,
			options: {},
			type: "triangle",
		},
		size: {
			random: {
				enable: false,
				minimumValue: 1,
			},
			value: {
				min: 0,
				max: 0.5,
			},
			animation: {
				count: 1,
				enable: true,
				speed: 500,
				decay: 0,
				delay: 0,
				sync: true,
				mode: "auto" as any,
				startValue: "min" as any,
				destroy: "auto" as any,
			},
		},
		stroke: {
			width: 0,
		},
		zIndex: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: 0,
			opacityRate: 1,
			sizeRate: 1,
			velocityRate: 1,
		},
		life: {
			count: 3,
			delay: {
				random: {
					enable: false,
					minimumValue: 0,
				},
				value: 0,
				sync: false,
			},
			duration: {
				random: {
					enable: false,
					minimumValue: 0.0001,
				},
				value: 0,
				sync: false,
			},
		},
		rotate: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: {
				min: 0,
				max: 360,
			},
			animation: {
				enable: true,
				speed: 30,
				decay: 0,
				sync: false,
			},
			direction: "random",
			path: false,
		},
		destroy: {
			bounds: {},
			mode: "none",
			split: {
				count: 1,
				factor: {
					random: {
						enable: false,
						minimumValue: 0,
					},
					value: 3,
				},
				rate: {
					random: {
						enable: false,
						minimumValue: 0,
					},
					value: {
						min: 4,
						max: 9,
					},
				},
				sizeOffset: true,
				particles: {},
			},
		},
		roll: {
			darken: {
				enable: true,
				value: 25,
			},
			enable: true,
			enlighten: {
				enable: false,
				value: 0,
			},
			mode: "vertical",
			speed: {
				min: 5,
				max: 15,
			},
		},
		tilt: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: {
				min: 0,
				max: 360,
			},
			animation: {
				enable: true,
				speed: 30,
				decay: 0,
				sync: false,
			},
			direction: "random",
			enable: true,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
		wobble: {
			distance: 30,
			enable: true,
			speed: {
				angle: {
					min: -7,
					max: 7,
				},
				move: 10,
			},
		},
		orbit: {
			animation: {
				count: 0,
				enable: false,
				speed: 0.5,
				decay: 0,
				delay: 0,
				sync: false,
			},
			enable: false,
			opacity: 1,
			rotation: {
				random: {
					enable: false,
					minimumValue: 0,
				},
				value: 45,
			},
			width: 1,
		},
		links: {
			blink: true,
			color: {
				value: "hsla(240, 2%, 59%,.3)",
			},
			consent: true,
			distance: 70,
			enable: true,
			frequency: 1,
			opacity: 0.3,
			shadow: {
				blur: 5,
				color: {
					value: "hsla(240, 2%, 59%,.8)",
				},
				enable: true,
			},
			triangles: {
				enable: false,
				frequency: 1,
				opacity: 0.2,
			},
			width: 1,
			warp: false,
		},
		repulse: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1,
		},
	},
	pauseOnBlur: true,
	pauseOnOutsideViewport: true,
	responsive: [],
	smooth: false,
	style: {},
	themes: [],
	zLayers: 100,
	emitters: [
		{
			autoPlay: true,
			fill: true,
			life: {
				wait: false,
			},
			rate: {
				quantity: 5,
				delay: 0.15,
			},
			shape: "square",
			startCount: 0,
			particles: {
				move: {
					direction: "top-right",
					outModes: {
						top: "none",
						left: "none",
						default: "destroy",
					},
				},
			},
			position: {
				x: 0,
				y: 30,
			},
		},
		{
			autoPlay: true,
			fill: true,
			life: {
				wait: false,
			},
			rate: {
				quantity: 5,
				delay: 0.15,
			},
			shape: "square",
			startCount: 0,
			particles: {
				move: {
					direction: "top-left",
					outModes: {
						top: "none",
						right: "none",
						default: "destroy",
					},
				},
			},
			position: {
				x: 100,
				y: 30,
			},
		},
	],
};
