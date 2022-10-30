import * as server from '../entries/pages/movies/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/movies/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/movies/_page.svelte-0570f8ff.js';
export { server };
export const imports = ["_app/immutable/components/pages/movies/_page.svelte-0570f8ff.js","_app/immutable/chunks/index-ecc68775.js","_app/immutable/chunks/stores-7538b6ed.js","_app/immutable/chunks/singletons-4f689c9a.js"];
export const stylesheets = [];
