# Status
Pending

https://github.com/vercel/next.js/issues/25402

### What version of Next.js are you using?

10.0.5

### What version of Node.js are you using?

15.6.0

### What browser are you using?

Chrome

### What operating system are you using?

macOS

### How are you deploying your application?

Other platform

### Describe the Bug

Getting incorrect `href` (domain and locale) when there's a `i18n.domains` config in `next.config.js`.

It started breaking at version `10.0.5` and still happening at version `10.2.3-canary.0`.


### Expected Behavior

I expect the link to have the correct domain and locale.

### To Reproduce

1. Configure domains in `next.config.js` as written below.

```javascript
// next.config.js
module.exports = {
  env: "development",
  i18n: {
    localeDetection: false,
    locales: ["en", "ar"],
    defaultLocale: "en",
    domains: [
      {
        domain: "ae.example.com",
        defaultLocale: "en",
      },
      {
        domain: "sa.example.com",
        defaultLocale: "ar",
      },
      {
        domain: "sg.example.com",
        defaultLocale: "ar",
      },
    ],
  },
};
```
2.  The first link will have an href `ae.example.com` while the second link will have `sa.example.com` (where it should be `ae.example.com/ar`)
```javascript
// ae.example.com
<div>
  <Link
    href={{
      pathname: router.pathname,
      query: router.query,
    }}
    locale="en"
  >
    <a>English</a>
  </Link>
</div>

<div>
  <Link
    href={{
      pathname: router.pathname,
      query: router.query,
    }}
    locale="ar"
  >
    <a>Arabic</a>
  </Link>
</div>
```

I see a pattern where when you assign `locale` in the `<Link />` (i.e `ar` from my example above), it uses the `domain` of the first item that matches its `defaultLocale`. From the config below, it's `sa.example.com`.

```javascript
domains: [
  {
    domain: "ae.example.com",
    defaultLocale: "en",
  },
  {
    domain: "sa.example.com",
    defaultLocale: "ar",
  },
  {
    domain: "sg.example.com",
    defaultLocale: "ar",
  },
],
```
