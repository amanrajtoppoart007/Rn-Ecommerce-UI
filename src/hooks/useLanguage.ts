import {useEffect, useState} from 'react';
import {I18n} from 'i18n-js';
import translations from '../locale/translations.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../state/store';
import {setLanguage} from '../state/reducers/locale.slice';
const i18n = new I18n();
i18n.translations = translations;
export default function useLanguage() {
  const dispatch = useDispatch();
  const {language, languages} = useSelector((state: RootState) => state.locale);
  const [lang, setLang] = useState<string>('');
  useEffect(() => {
    i18n.locale = language;
    setLang(language);
  }, [dispatch, language]);

  const setLanguageHandler = (value: string | void) => {
    dispatch(setLanguage(value));
  };

  const t = (key: string, options?: object) => {
    return i18n.t(key, options);
  };

  return {
    language: lang,
    languages,
    setLanguage: setLanguageHandler,
    translate: t,
  };
}
