export {};
declare global {
  interface Window {
    requestIdleCallback: (arg1: () => void) => void;
    cancelIdleCallback: (arg1: () => void) => void;
  }
}
``;
