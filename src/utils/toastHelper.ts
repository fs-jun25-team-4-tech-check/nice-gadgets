export const getNewToastId = (): string => {
  return `toast-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
};
