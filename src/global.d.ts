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
interface ConfigParams {
  page_title?: string | undefined;
  page_location?: string | undefined;
  page_path?: string | undefined;
  send_page_view?: boolean | undefined;
}

interface GtagCommands {
  config: [targetId: string, config?: EventParams | ConfigParams | CustomParams];
  event: [eventName: 'page_view' | string, eventParams?: EventParams | CustomParams];
}

interface Gtag {
  <Command extends keyof GtagCommands>(command: Command, ...args: GtagCommands[Command]): void;
}

interface Window {
  gtag: Gtag;
}
