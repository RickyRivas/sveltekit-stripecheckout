import * as server from '../entries/pages/donation/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/donation/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/donation/_page.svelte-1a7aee51.js';
export { server };
export const imports = ["_app/immutable/components/pages/donation/_page.svelte-1a7aee51.js","_app/immutable/chunks/index-ecc68775.js","_app/immutable/chunks/singletons-4f689c9a.js"];
export const stylesheets = [];
