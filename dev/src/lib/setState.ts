export default function setState<T>(
	initialValue: T
): [T, (newValue: T) => void] {
	let value = initialValue;
	function setValue(newValue: T) {
		value = newValue;
	}
	return [value, setValue];
}
