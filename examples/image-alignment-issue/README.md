# Status

No Action Taken

https://github.com/vercel/next.js/issues/19586

# Bug report

## Describe the bug

It renders an additional space on top of every image on **mobile** when using `next/image` with `priority` property and cloudinary loader config.

## To Reproduce

[CodeSandbox](https://codesandbox.io/s/nextjs-image-priority-issue-22f17?file=/pages/index.js)
1. Configure loader in `next.config.js` as written below.
2. Render Image using `next/image` with priority property above the fold and another image without priority property, below the fold.
3. **On mobile**, images will have extra space on top of it. https://22f17.sse.codesandbox.io/

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ["assets.wego.com"],
    loader: "cloudinary",
    path: "https://assets.wego.com/image/upload/"
  }
};
```

```javascript
import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <div>
        <Image
          width="100"
          height="40"
          src="/v1/makalu/wego.png"
          alt="logo"
          priority
        />
      </div>

      <div style={{ paddingTop: "800px" }}></div>

      <div>
        This image has empty space on top of it.
        <Image
          width="100"
          height="40"
          src="/v1/makalu/wego.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
```

## Expected behavior

Images should not have an extra space on top of it.

## Screenshots

<img width="390" alt="Screenshot 2020-11-27 at 12 58 11" src="https://user-images.githubusercontent.com/275230/100412833-b1c83f00-30b0-11eb-9a93-e540152b4f08.png">


## System information

- OS: macOS
- Browser chrome mobile, chrome device toolbar
- Version of Next.js: 10.0.3
- Version of Node.js: 12.4.0
