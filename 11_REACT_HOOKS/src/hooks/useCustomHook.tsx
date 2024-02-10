import { useEffect, useRef } from "react";

// export function usePrevious<T> (value: T): [T, (value: T) => void] {
// 	const [state, setState] = useState<T>(value);
// 	const setValue = (value: T) => {
// 		setState(value);
// 	  };
// 	return [state, setValue];
// }

export function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
