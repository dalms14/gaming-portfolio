/* Portfolio content and project details. */
const portfolio = {
  name: 'Daniel P. Almojera',
  handle: '@dalms14',
  email: 'daniel.almojera143@gmail.com',
  projects: {
    flux: {
      title: 'FLUX — Coffee Shop POS',
      description: 'For IT Capstone 1 and 2, I developed a point-of-sale and inventory management system for a coffee shop. My role covered full-stack development and database management. I designed system interfaces and page layouts in Figma and managed application data in MongoDB Atlas. The project brought React.js, Node.js, Express.js, and MongoDB Atlas together in one application.',
      tags: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Figma', 'GitHub']
    }
  }
};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroVisual = document.querySelector('.hero-visual');
const worldStage = document.querySelector('#world-stage');
const controller = document.querySelector('.controller');
const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const dialog = document.querySelector('#project-dialog');
let lastProjectButton;
let framePending = false;
document.querySelector('.profile-name').replaceChildren(document.createTextNode(portfolio.name.toUpperCase()), Object.assign(document.createElement('span'), { textContent: portfolio.handle }));
document.querySelector('footer > span:last-child').textContent = `© ${new Date().getFullYear()} ${portfolio.name}`;
if (portfolio.email) {
  const contactLink = document.querySelector('#contact-link');
  contactLink.href = `mailto:${portfolio.email}`;
  contactLink.hidden = false;
  document.querySelector('#contact-placeholder').hidden = true;
}
function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const position = window.scrollY;
  document.documentElement.style.setProperty('--scroll', maxScroll > 0 ? Math.min(1, Math.max(0, position / maxScroll)) : 0);
  if (!reducedMotion.matches && heroVisual.getBoundingClientRect().bottom > 0) heroVisual.style.setProperty('--visual-y', `${Math.min(position * 0.12, 85)}px`);
  if (worldStage && !reducedMotion.matches) {
    const bounds = worldStage.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
      const progress = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) / window.innerHeight;
      worldStage.style.setProperty('--world-shift', `${Math.max(-22, Math.min(22, progress * 45))}px`);
    }
  }
  let active = '';
  for (const section of sections) if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) active = section.id;
  navLinks.forEach(link => {
    const isActive = link.hash === `#${active}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  framePending = false;
}
function requestScrollUpdate() {
  if (!framePending) { framePending = true; requestAnimationFrame(updateScroll); }
}
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
updateScroll();
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.documentElement.classList.add('js-motion');
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
}
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    document.documentElement.classList.remove('js-motion');
    heroVisual.style.setProperty('--visual-y', '0px');
    worldStage?.style.setProperty('--world-shift', '0px');
    controller.style.setProperty('--tilt-x', '0deg');
    controller.style.setProperty('--tilt-y', '0deg');
  }
  requestScrollUpdate();
});
heroVisual.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType !== 'mouse') return;
  const bounds = heroVisual.getBoundingClientRect();
  controller.style.setProperty('--tilt-x', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -12}deg`);
  controller.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 15}deg`);
});
heroVisual.addEventListener('pointerleave', () => {
  controller.style.setProperty('--tilt-x', '0deg');
  controller.style.setProperty('--tilt-y', '0deg');
});
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = portfolio.projects[button.dataset.project];
    if (!project) return;
    lastProjectButton = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag => Object.assign(document.createElement('span'), { textContent: tag })));
    dialog.showModal();
  });
});
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => lastProjectButton?.focus({ preventScroll: true }));

// Keep both supplied portraits available without changing either source photo.
const portraits = {
  casual: { src: 'assets/dan-casual.png', alt: 'Dan in a checked cap and casual jacket' },
  professional: { src: 'assets/dan-professional.png', alt: 'Daniel Almojera in a black suit and tie' }
};
document.querySelectorAll('[data-portrait]').forEach(button => {
  button.addEventListener('click', () => {
    const portrait = portraits[button.dataset.portrait];
    if (!portrait) return;
    const image = document.querySelector('#profile-portrait');
    image.src = portrait.src;
    image.alt = portrait.alt;
    document.querySelectorAll('[data-portrait]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  });
});

// Five selectable, original game-inspired scenes. Native buttons support keyboard input.
const worlds = {
  'god-of-war': { name: 'God of War', kicker: 'STRENGTH IN THE STILLNESS', description: 'Frost, ancient stone, and the weight of a journey.', hud: 'FROST & FIRE', traits: ['Mythic', 'Cinematic', 'Resolute'] },
  'ghost-of-tsushima': { name: 'Ghost of Tsushima', kicker: 'FOLLOW THE WIND', description: 'A crimson sun. Drifting leaves. A moment before the blade.', hud: 'WIND & HONOR', traits: ['Quiet', 'Windswept', 'Fearless'] },
  'hollow-knight': { name: 'Hollow Knight', kicker: 'A LIGHT IN THE DARK', description: 'Quiet caverns, pale lanterns, and a small knight in a vast world.', hud: 'SILENCE & SOUL', traits: ['Mysterious', 'Delicate', 'Determined'] },
  minecraft: { name: 'Minecraft', kicker: 'ONE BLOCK AT A TIME', description: 'Build something from nothing. Keep exploring.', hud: 'BUILD & WANDER', traits: ['Creative', 'Open-ended', 'Curious'] },
  valorant: { name: 'Valorant', kicker: 'FOCUS. ADAPT. EXECUTE.', description: 'Sharp angles, quick decisions, and a little controlled chaos.', hud: 'PRECISION & INSTINCT', traits: ['Tactical', 'Bold', 'Focused'] }
};
let currentWorld = 'god-of-war';
const worldButtons = [...document.querySelectorAll('[data-world]')];
function selectWorld(key) {
  const world = worlds[key];
  if (!world || !worldStage || key === currentWorld) return;
  currentWorld = key;
  worldStage.dataset.activeWorld = key;
  worldButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.world === key)));
  document.querySelectorAll('[data-scene]').forEach(scene => { scene.hidden = scene.dataset.scene !== key; });
  document.querySelector('#world-name').textContent = world.name;
  document.querySelector('#world-kicker').textContent = world.kicker;
  document.querySelector('#world-description').textContent = world.description;
  document.querySelector('#world-hud-label').textContent = world.hud;
  document.querySelector('#world-traits').replaceChildren(...world.traits.map(trait => Object.assign(document.createElement('span'), { textContent: trait })));
  document.querySelector('#world-announcement').textContent = `${world.name} world selected. ${world.description}`;
  requestScrollUpdate();
}
worldButtons.forEach(button => button.addEventListener('click', () => selectWorld(button.dataset.world)));
document.querySelector('.world-next')?.addEventListener('click', () => {
  const keys = Object.keys(worlds);
  selectWorld(keys[(keys.indexOf(currentWorld) + 1) % keys.length]);
});
