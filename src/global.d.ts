interface CustomParams {
  [key: string]: string;
}

interface EventParams {
  description?: string | undefined;
  screen_name?: string | undefined;
  value?: number | undefined;
  event_label?: string | undefined;
  event_category?: string | undefined;
  transport_type?: 'image' | 'xhr' | 'beacon' | undefined;
}

interface Window {
  gtag: (
    command: 'event',
    ...args: [eventName: 'page_view' | string, eventParams?: EventParams | CustomParams]
  ) => void;
}
