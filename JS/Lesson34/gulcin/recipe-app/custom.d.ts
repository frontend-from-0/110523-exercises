/* This is needed to resolve the TS error caused by image import ('../../Assets/pizzaa.png')
This code declares a module pattern for all files ending in .png, allowing them to be imported into your TypeScript files. The value exported is typed as any, which is sufficient for image imports as you typically don't need to interact with the image file directly in your code beyond passing its path to an <img> tag's src attribute or similar uses.
*/
declare module '*.png' {
  const value: any;
  export = value;
}