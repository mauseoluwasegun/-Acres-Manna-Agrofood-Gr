import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import enMessages from '../messages/en.json';

function mergeDeep(target: any, source: any): any {
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      output[key] = mergeDeep(target[key], source[key]);
    } else if (!(key in target)) {
      output[key] = source[key];
    }
  }
  return output;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeMessages = (await import(`../messages/${locale}.json`)).default;
  const messages = locale === 'en' ? localeMessages : mergeDeep(localeMessages, enMessages);

  return {
    locale,
    messages
  };
});
