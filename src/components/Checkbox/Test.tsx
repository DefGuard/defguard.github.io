import { useStore } from '@nanostores/preact';
import { isChecked } from './isCheckedStore';

export default function Test() {
    const $isChecked = useStore(isChecked);

    return $isChecked ? <h1>Hurray</h1> : <h1>Nope</h1>;
}