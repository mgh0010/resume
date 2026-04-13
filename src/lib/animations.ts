export function animateIn(selector: string, animationClass: string): void {
  const animationMap: Record<string, string> = {
    fadeInUp: "animate-fade-in-up",
    fadeIn: "animate-fade-in",
    flipInX: "animate-flip-in-x",
  };

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.classList.remove("invisible");
    element.classList.add(animationMap[animationClass] ?? animationClass);
  });
}
