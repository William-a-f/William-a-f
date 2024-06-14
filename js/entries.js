const entries = document.querySelectorAll('.main__data-bio');

entries.forEach(entry => {
  let entryMedia = entry.querySelector('.bio__img-container');
  let entryMeta = entry.querySelector('.bio__text-container');

  let tl =gsap.timeline({
    scrollTrigger: {
      trigger: entry,
      start: 'top bottom',
      end: 'bottom 106%',
      scrub: true
    }
  })

  tl.fromTo(entryMeta, { xPercent: 100, opacity: 0}, { xPercent: 0, opacity: 1 });
  tl.fromTo(entryMedia, { xPercent: -100, opacity: 0}, { xPercent: 0, opacity: 1 }, '<');

});