import localFont from 'next/font/local';

export const monaSans = localFont({
  src: [
    {
      path: '../public/fonts/MonaSans-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans-Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-mona-sans',
  display: 'swap',
});

export const greatVibes = localFont({
  src: '../public/fonts/GreatVibes-Regular.ttf',
  variable: '--font-great-vibes',
  display: 'swap',
});
