import path from 'node:path';
import url from 'node:url';

export const fileToUrl = (metaUrl) => path.dirname(url.fileURLToPath(metaUrl));

export const getFileName = (metaUrl) => url.fileURLToPath(metaUrl);