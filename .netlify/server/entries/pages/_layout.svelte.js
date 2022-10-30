import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1tukavd_START -->${``}<!-- HEAD_svelte-1tukavd_END -->`, ""}

<a href="${"/"}">Home</a>
<a href="${"/shop"}" data-sveltekit-prefetch>shop</a>
<a href="${"/movies"}" data-sveltekit-prefetch>movies</a>
<a href="${"/donation"}" data-sveltekit-prefetch>Donate</a>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
