> **Total Training Center fork.** This is the copy of [bae-sh/tiptap-extension-resize-image](https://github.com/bae-sh/tiptap-extension-resize-image) (MIT) that [Total Training Center](https://training-center.org) uses in its editors. All credit for the extension goes to the original author. Its companion for video is [tiptap-extension-resize-video](https://github.com/TotalTrainingCenter/tiptap-extension-resize-video).
>
> **What is different from upstream v1.3.1**
> - Built for **Tiptap 3** (`@tiptap/core`, `@tiptap/extension-image`, `@tiptap/pm` ^3).
> - Handles Tiptap 3's `getPos()` returning `undefined` (the node was removed) instead of throwing.
> - In read-only editors the image keeps its size and alignment; only the resize/align controls are hidden.
> - Typed `addOptions()` and a Rollup build with `@rollup/plugin-typescript`.
>
> Install from this repository (it is not published to npm under a separate name):
>
> ```bash
> npm install github:TotalTrainingCenter/tiptap-extension-resize-image
> ```
>
> Upstream has gained features since this fork (figure/caption node, inlined alignment icons, style sanitizer). If you do not need Tiptap 3 specifically, prefer the [original package](https://www.npmjs.com/package/tiptap-extension-resize-image).
>
> 한국어: 종합 훈련 센터 에디터에서 쓰는 포크입니다. 원본(MIT, bae-sh)을 Tiptap 3 에 맞게 고쳤고(노드 위치가 없을 때 오류 대신 무시, 읽기 전용에서 크기·정렬 유지), 저작권과 공은 원작자에게 있습니다.

---

# `tiptap-extension-resize-image`

![tiptap-extension-resize-image](https://github.com/bae-sh/tiptap-extension-resize-image/assets/37887690/e79f3d2a-c2df-4506-ac4a-fb71918569b4)

[Tiptap](https://tiptap.dev/) is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.

This package provides the ability to adjust the size of the tip tab image. It has been tested in [React](https://codesandbox.io/p/devbox/react-tiptap-image-extension-3ztv5s?file=%2Fsrc%2Ftiptap.tsx%3A5%2C26-5%2C55), [Vue](https://codesandbox.io/p/devbox/vue-tiptap-image-extension-tvxx62?file=%2Fsrc%2FTiptap.vue%3A9%2C1), and [NextJS](https://codesandbox.io/p/devbox/nextjs-tiptap-image-extension-nk6v7p?file=%2Fapp%2Ftiptap.tsx%3A17%2C1), and stability in VanillaJS may not be guaranteed. Additionally, it can align the image position.

## Installation

You can install it using npm:

```bash
$ npm install tiptap-extension-resize-image
```

## Usage

```javascript
import StarterKit from '@tiptap/starter-kit';
import ImageResize from 'tiptap-extension-resize-image';
import { EditorContent, useEditor } from '@tiptap/react';

const editor = useEditor({
  extensions: [StarterKit, ImageResize],
  content: `<img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />`,
});
```

### Use as inline

If you want to render images as inline elements, you can configure the extension like this:

```javascript
const editor = useEditor({
  extensions: [
    StarterKit,
    ImageResize.configure({
      inline: true,
    }),
  ],
  content: `<img src="..."/>`,
});
```
