jest.mock('../hooks/useHover', () => ({
  useHover: jest.fn().mockImplementation(ref => {
    return { hoverRef: ref || { current: undefined }, isHovered: false };
  }),
}));

export {};
