import { c as create_ssr_component, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page);
  $$unsubscribe_page();
  return ``;
});
export {
  Page as default
};
