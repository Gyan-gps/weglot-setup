/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  // i18n: {
  //   locales: ['en', 'fr', 'it', 'es', 'ja', 'ko'], // Supported languages
  //   defaultLocale: 'en',
  //   localeDetection: true,
  //   domains: [
  //     {
  //       domain: 'weglot-setup.vercel.app',
  //       defaultLocale: 'en',
  //       locales: ['en'],
  //     },
  //     {
  //       domain: 'weglot-setup.vercel.app/fr',
  //       defaultLocale: 'fr',
  //       locales: ['fr'],
  //     },
  //     {
  //       domain: 'weglot-setup.vercel.app/it',
  //       defaultLocale: 'it',
  //       locales: ['it'],
  //     },
  //     {
  //       domain: 'weglot-setup.vercel.app/es',
  //       defaultLocale: 'es',
  //       locales: ['es'],
  //     },
  //     {
  //       domain: 'weglot-setup.vercel.app/ja',
  //       defaultLocale: 'ja',
  //       locales: ['ja'],
  //     },
  //     {
  //       domain: 'weglot-setup.vercel.app/ko',
  //       defaultLocale: 'ko',
  //       locales: ['ko'],
  //     }
  //   ]
  // },
};

export default nextConfig;
