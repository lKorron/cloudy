export default function isMobile() {
  const touchDevice = "ontouchstart" in document.documentElement;

  return touchDevice;
}
