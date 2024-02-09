import { forwardRef, useImperativeHandle, useRef } from "react"


interface ISomeCompoment {
	someText?: string
}

export type SomeComponentHandle = {
	validate: () => void;
}

const SomeComponent = forwardRef(({someText} : ISomeCompoment, ref) => {
	const localInputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => {
		return {
			validate: () => {
				const current = localInputRef.current;
				if(current && current.value.length > 3) {
					current.value = '';
				}
			}
		}
	});

	return (
		<div>
			<p>Insita no máximo 3 caracteres.</p>
			<input type="text" placeholder={someText} ref={localInputRef} />
		</div>
	)
});
export default SomeComponent