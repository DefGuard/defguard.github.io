import { useSignal, useSignalEffect } from "@preact/signals";
import { unescape } from "lodash-es";
import { createContext, type ComponentChildren } from "preact";
import { useCallback, useEffect } from "preact/hooks";

type Props = {
    contextId: string;
    children: ComponentChildren;
};

type FeatureContext = {   
    openFeature?: number;
    setOpen: (id: number | undefined) => void;
};

export const FeatureContext = createContext<FeatureContext>({setOpen: () => {}, openFeature: undefined});

const ProductFeatureContext = ({children, contextId}: Props) => { 
    const openFeature = useSignal<undefined | number>(undefined);

    const setOpen = useCallback((val: number | undefined) => {
        openFeature.value = val;
    }, []);

    useSignalEffect(() => {
        if(openFeature.value !== undefined) {
            sessionStorage.setItem(`feature-open-context-${contextId.toLowerCase().trim()}`, openFeature.value.toString());
        }
    });

    useEffect(() => {
        if(openFeature.value === undefined) {
            const storageValue = sessionStorage.getItem(`feature-open-context-${contextId.toLowerCase().trim()}`);
            if(storageValue && storageValue.length) {
                openFeature.value = parseInt(storageValue);
            }
        }
    }, [contextId]);

    return (<FeatureContext.Provider value={{
        openFeature: openFeature.value,
        setOpen,
    }}>
    {children}
    </FeatureContext.Provider>);
}

export default ProductFeatureContext;