require('whatwg-fetch');

export const onClientEntry = () => {
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`);
    }
  };
