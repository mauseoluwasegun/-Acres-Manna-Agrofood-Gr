import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import enMessages from '../messages/en.json';
import chromeMessages from '../messages/_en.chrome.json';
import uiMessages from '../messages/_en.ui.json';
import pageMessagesA from '../messages/_en.pages-a.json';
import pageMessagesB from '../messages/_en.pages-b.json';

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

// Page, navigation and UI copy is maintained in focused message files. Build a
// complete English catalog before resolving the active locale, so no route can
// fall back to rendering its message key.
const defaultMessages = [chromeMessages, uiMessages, pageMessagesA, pageMessagesB]
  .reduce((messages, additions) => mergeDeep(messages, additions), enMessages);

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeMessages = (await import(`../messages/${locale}.json`)).default;
  const messages = locale === 'en'
    ? defaultMessages
    : mergeDeep(localeMessages, defaultMessages);

  return {
    locale,
    messages
  };
});
