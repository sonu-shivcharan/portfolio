export const gaEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
