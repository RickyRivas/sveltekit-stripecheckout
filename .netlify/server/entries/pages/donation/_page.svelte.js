import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let amounts = [{ amount: 5 }, { amount: 15 }, { amount: 20 }, { amount: 25 }];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `
<form method="${"POST"}" action="${"?/donate"}"><input type="${"number"}" min="${"5"}" name="${"amount"}" inputmode="${"decimal"}"${add_attribute("value", (form == null ? void 0 : form.amount) ?? "", 0)}>
	<button>Pay</button></form>
<form action="${"?/donate"}" method="${"POST"}">${each(amounts, ({ amount }) => {
    return `<button type="${"submit"}" name="${"amount"}"${add_attribute("value", amount, 0)}>${escape(amount)}</button>`;
  })}</form>

${(form == null ? void 0 : form.error) ? `<p>Error! ${escape(form == null ? void 0 : form.message)}</p>` : ``}`;
});
export {
  Page as default
};
