export const gaEvent = (eventName: string, mainEvent: string) => {
  window.gtag('event', eventName, {
    main_event: mainEvent,
  });
};
