export default function updateState(initialValue: any) {
	let state = initialValue;
	const setState = (newValue: any) => {
		state = newValue;
	};
	const getState = () => state;

	return [getState, setState];
}
