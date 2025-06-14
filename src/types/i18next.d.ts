import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        welcome: string;
        hello: string;
        nav: {
          home: string;
          about: string;
          contact: string;
        };
      };
    };
  }
}