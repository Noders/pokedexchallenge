declare global {
  interface Window {
    requestIdleCallback: () => void;
    cancelIdleCallback: () => void;
  }
}
