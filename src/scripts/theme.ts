// Respect preferred browser theme

if (document.documentElement) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    // when setting dark we need to flip inverted sections from dark to light and vice versa
    document.documentElement.dataset.theme = "dark";
    const lightElements = document.querySelectorAll('body [data-theme="light"]');
    const darkElements = document.querySelectorAll('body [data-theme="dark"]');

    // swap values

    lightElements.forEach((el) => {
      (el as HTMLElement).dataset.theme = "dark";
    });

    darkElements.forEach((el) => {
      (el as HTMLElement).dataset.theme = "light";
    });
  } else {
    document.documentElement.dataset.theme = "light";
  }
}
