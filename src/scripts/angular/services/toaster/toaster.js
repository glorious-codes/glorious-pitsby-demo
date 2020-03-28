export const toaster = () => {
  const _public = {};

  _public.pop = ({ message, theme }) => vanillaComponents.toaster.pop({ message, theme });

  return _public;
};
