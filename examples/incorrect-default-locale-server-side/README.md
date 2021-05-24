# Status

**Fixed** in version 10.0.2

https://github.com/vercel/next.js/issues/18970

# Bug report

Getting incorrect `defaultLocale` on server side domain routing.

## Describe the bug

Getting incorrect `defaultLocale` when accessing locale information via the `getServerSideProps`'s context. Seems like it is getting the fallback `defaultLocale` instead of the `defaultLocale` assigned to the domain.

## To Reproduce

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",

    domains: [
      {
        domain: "example.com",
        defaultLocale: "en",
      },
      {
        domain: "example.ae",
        defaultLocale: "ar",
      },
      {
        domain: "sa.example.com",
        defaultLocale: "ar",
      },
    ],
  },
};
```

```javascript
// when on domain "example.ae"
import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  // router.defaultLocale returns "ar" which is correct.
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // context.defaultLocale returns "en" which is incorrect.

  return {
    props: {},
  };
};

export default Home;

```
## Expected behavior

I would expect it to return the `defaultLocale` of the domain instead of the fallback `defaultLocale`.

## System information

- OS: macOS
- Browser: chrome
- Version of Next.js: 10.0.1
- Version of Node.js: 12.4.0

