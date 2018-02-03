const select = require(`unist-util-select`);

module.exports = ({markdownAST, files},
                  {maxWidth = 650}) => {
  const markdownImageNodes = select(markdownAST, `image`);

  const htmlImageNodes = markdownImageNodes
    .map(imageNode => convertContentfulImageNodeToImgTagWithSrcSet(imageNode, maxWidth));

  return markdownImageNodes.concat(htmlImageNodes)
    .filter(node => !!node);
};

function convertContentfulImageNodeToImgTagWithSrcSet(imageNode, maxWidth) {
  if (isContentfulImage(imageNode)) {
    return createImgTagWithSrcset(imageNode, maxWidth);
  } else {
    return undefined;
  }
}

function isContentfulImage(node) {
  return /contentful.com/.test(node.url);
}

function createImgTagWithSrcset(node, maxWidth) {
  const srcSet = generateSrcSet(node, maxWidth);

  const sizes = `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`;

  return replaceNodeContentsWithImgHtml(node, srcSet, sizes);
}

function generateSrcSet(node, maxWidth) {
  const widths = [maxWidth / 4, maxWidth / 2, maxWidth, maxWidth * 1.5, maxWidth * 2, maxWidth * 3]
    .map(Math.round);

  return widths
    .map(size => generateSrcSetPart(node, size))
    .join(`, `);
}

function generateSrcSetPart(node, size) {
  return `${node.url}?w=${size}&fm=jpg&fl=progressive ${size}w`;
}

function replaceNodeContentsWithImgHtml(node, srcSet, sizes) {
  const rawHtml = `<img src="${node.url}?fm=jpg&fl=progressive" srcset="${srcSet}" sizes="${sizes}" alt="${node.alt || ``}" title="${node.title || ``}"/>`;
  node.type = `html`;
  node.value = rawHtml;
  return node;
}
