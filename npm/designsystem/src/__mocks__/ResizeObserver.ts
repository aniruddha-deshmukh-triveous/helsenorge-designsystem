class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
}

Object.defineProperty(window, 'ResizeObserver', {
  value: ResizeObserver,
});

export default ResizeObserver;
