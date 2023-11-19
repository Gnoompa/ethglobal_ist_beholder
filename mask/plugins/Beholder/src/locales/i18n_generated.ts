// @ts-nocheck
/* eslint-disable */
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
function createProxy(initValue: (key: string) => any) {
    function define(key: string) {
        const value = initValue(key);
        Object.defineProperty(container, key, { value, configurable: true });
        return value;
    }
    const container = {
        __proto__: new Proxy({ __proto__: null }, {
            get(_, key) {
                if (typeof key === "symbol")
                    return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: () => null,
        setPrototypeOf: (_, v) => v === null,
        getOwnPropertyDescriptor: (_, key) => {
            if (typeof key === "symbol")
                return undefined;
            if (!(key in container))
                define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
export function useI18N(): {
    /**
      * `Example Plugin`
      */
    name(): string;
    /**
      * `🤔 Example`
      */
    __entry__(): string;
} { const { t } = useTranslation("testplugin4"); return useMemo(() => createProxy((key) => t.bind(null, key)), [t]); }
