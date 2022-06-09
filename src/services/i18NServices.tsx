import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../assets/translation/en/en.json'
import French from '../assets/translation/fr/fr.json'
import flatten from "flat";

const initialState = {};

export const Context = React.createContext(initialState);
const local: string | null = sessionStorage.getItem('locale') ? sessionStorage.getItem('locale') : "en";
let lang: Object;

if (local == "en") {
    lang = English
} else {
    lang = French
}
// @ts-ignore: Object is possibly 'null'.
sessionStorage.setItem("locale", local);


const I18NWrapper: React.FC<any> = (props: any) => {
    const [locale, setLocale] = useState<any>(local);
    const [messages, setMessages] = useState<any>(lang);

    const selectLang = (e: any) => {
        const newLocale = e;
        sessionStorage.setItem("locale", e);

        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
        } else {
            setMessages(French);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLang }}>
            <IntlProvider messages={flatten(messages)} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default I18NWrapper;


