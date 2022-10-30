import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { products } = data;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Welcome to shop!</h1>
${each(products, (p) => {
    return `<p>${escape(p.title)}</p>
	<span>${escape(p.description)}</span>`;
  })}`;
});
export {
  Page as default
};
