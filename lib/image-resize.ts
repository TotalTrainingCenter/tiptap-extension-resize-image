import Image, { ImageOptions } from '@tiptap/extension-image';
import { ImageNodeView } from './controllers/image-node-view';
import { StyleManager } from './utils/style-manager';

export const ImageResize = Image.extend({
  name: 'imageResize',

  addOptions(): ImageOptions {
    return {
      ...(this.parent?.() as ImageOptions),
      inline: false,
    };
  },

  addAttributes() {
    const inline = this.options.inline;
    return {
      ...this.parent?.(),
      containerStyle: {
        default: StyleManager.getContainerStyle(inline),
        parseHTML: (element) => {
          const containerStyle =
            element.getAttribute('containerstyle') || element.getAttribute('style');
          if (containerStyle) {
            return containerStyle;
          }

          const width = element.getAttribute('width');
          return width
            ? StyleManager.getContainerStyle(inline, `${width}px`)
            : `${element.style.cssText}`;
        },
      },
      wrapperStyle: {
        default: StyleManager.getWrapperStyle(inline),
      },
    };
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const inline = this.options.inline;
      const context = {
        node,
        editor,
        view: editor.view,
        getPos: typeof getPos === 'function' ? getPos : undefined,
      };

      const nodeView = new ImageNodeView(context, inline);
      return nodeView.initialize();
    };
  },
});
