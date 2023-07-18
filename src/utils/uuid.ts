const UUID_PATTERN = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

export const uuid = (): string => (
  UUID_PATTERN.replace(/[xy]/g, (c) => {
    const r = (new Date().getTime() + Math.random() * 16) % 16 | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
);
