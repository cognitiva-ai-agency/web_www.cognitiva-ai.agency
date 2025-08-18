// Utilidades muy simples para animación on-scroll
export const inViewClass = "is-visible";

export function addInViewOnIntersect(el, options = { threshold: 0.12 }) {
  if (!el) return;
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.classList.add(inViewClass);
      obs.disconnect();
    }
  }, options);
  obs.observe(el);
}
