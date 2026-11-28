/* THE WATCHER: a pixel creature that travels between spaces reserved in the page layout. */
(() => {
  'use strict';
  if (document.querySelector('.void-eye')) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const eye = document.createElement('div');
  eye.className = 'void-eye';
  eye.dataset.phase = 'dormant';
  eye.setAttribute('aria-hidden', 'true');
  const aperture = 'M48 92h8v-8h12v-8h20v-8h20v-4h24v4h20v8h20v8h12v8h8v8h-8v8h-12v8h-20v8h-20v4h-24v-4H88v-8H68v-8H56v-8h-8z';
  eye.innerHTML = `<svg viewBox="0 0 240 192" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <defs><clipPath id="void-eye-mask"><path d="${aperture}"/></clipPath></defs>
    <g class="void-eye-orbit void-eye-orbit-back" fill="#8671ba">
      <path d="M56 20h24v4H56zM28 40h4v16h-4zM12 76h4v20h-4zM160 24h20v4h-20zM208 56h4v20h-4zM216 112h4v20h-4zM172 164h20v4h-20zM48 156h20v4H48zM96 176h24v4H96z"/>
      <path fill="#bca0fa" d="M36 24h8v8h-8zM196 32h8v8h-8zM224 96h4v4h-4zM28 136h8v8h-8zM148 172h8v8h-8z"/>
    </g>
    <g class="void-eye-motes void-eye-motes-back" fill="#b297f4"><path d="M16 44h4v4h-4zM76 8h4v4h-4zM208 148h4v4h-4zM60 176h4v4h-4zM228 60h4v4h-4z"/></g>
    <g class="void-eye-rift">
      <path class="void-eye-rim" d="M20 88h12V68h16V52h20V36h28V24h16V12h16v16h24v12h28v16h20v20h16v16h8v16h-16v20h-20v20h-28v16h-24v16h-16v-12H92v-12H68v-16H48v-16H32v-20H20z"/>
      <path fill="#06040b" d="M24 92h12V72h16V56h20V40h28V28h16V16h8v16h24v12h28v16h20v20h16v16h8v8h-16v20h-20v20h-28v16h-24v16h-8v-12H96v-12H72v-16H52v-16H36v-20H24z"/>
      <path class="void-eye-inner-rim" d="M40 88h12V72h20V56h28V44h16V36h12v12h24v12h24v16h16v16h8v12h-16v16h-20v16h-28v12h-20v-8H92v-12H72v-12H52v-12H40z"/>
      <path fill="#0c0715" d="M48 88h12V76h16V60h28V48h12v-4h8v12h24v8h24v16h12v12h8v8h-16v16h-16v16h-28v8h-12v-8H96v-8H76v-12H56v-12h-8z"/>
      <g class="void-eye-fissure" fill="#91e0dd"><path d="M32 88h4V72h16v-4H40v12h-8zM100 28h12v-8h4v12h-16zM188 124h8v-12h8v-8h4v12h-8v12h-12zM100 152h16v8h-4v-4h-12z"/></g>
      <g class="void-eye-echo" fill="#9a68f5"><path d="${aperture}" transform="translate(-8 0)"/></g>
      <g class="void-eye-aperture">
        <path fill="#a58adc" d="${aperture}"/>
        <path fill="#e7def8" d="M56 92h8v-8h12v-4h20v-8h16v-4h16v4h20v8h20v8h12v8h4v4h-12v8h-16v8h-24v8h-20v-4H92v-8H72v-8H60v-8h-4z"/>
        <path fill="#bca8df" d="M56 96h8v8h12v8h20v8h16v4h20v-8h24v-8h16v-8h12v8h-12v8h-20v8h-20v4h-24v-4H88v-8H68v-8H56z"/>
        <g clip-path="url(#void-eye-mask)"><g class="void-eye-pupil">
          <g class="void-eye-iris">
            <path fill="#34204d" d="M108 60h24v8h12v12h8v32h-8v12h-12v8h-24v-8H96v-12h-8V80h8V68h12z"/>
            <path fill="#9572e5" d="M108 68h24v8h8v12h4v20h-8v12h-12v4h-16v-8H100v-12h-4V84h8V76h4z"/>
            <path fill="#c9a5ff" d="M108 72h8v8h-8zM100 84h8v16h-8zM104 108h8v8h-8zM132 92h8v12h-8zM124 116h8v4h-8z"/>
            <path fill="#8ee6dc" d="M116 72h12v4h-12zM132 80h4v8h-4zM104 100h4v8h-4zM112 116h12v4h-12z"/>
            <path fill="#08050e" d="M116 76h12v8h4v24h-4v12h-12v-12h-4V84h4z"/>
            <path fill="#221333" d="M120 84h4v24h-4z"/>
            <path fill="#fcf6ff" d="M104 80h8v8h-8zM112 76h4v4h-4zM132 108h4v4h-4z"/>
          </g>
        </g></g>
        <path fill="#ad8aff" d="M64 68h20v-4h20v-4h8v-4H96v4H80v4H64zM156 64h16v8h12v8h-4v-4h-12v-8h-12z"/>
      </g>
      <g class="void-eye-motes" fill="#c4a8ff"><path d="M76 44h4v4h-4zM160 48h4v4h-4zM44 104h4v4h-4zM172 128h4v4h-4zM96 140h4v4h-4z"/></g>
    </g>
    <g class="void-eye-orbit" fill="#b496fa"><path d="M48 36h12v4H48zM24 64h4v12h-4zM188 40h12v4h-12zM212 88h4v12h-4zM184 152h12v4h-12zM72 164h12v4H72z"/><path fill="#a8e6d5" d="M44 120h4v12h-4zM204 48h4v8h-4zM144 16h8v4h-8z"/></g>
    <g class="void-eye-motes" fill="#c3f98a"><path d="M16 112h4v4h-4zM184 16h4v4h-4zM220 136h4v4h-4zM80 184h4v4h-4z"/><path fill="#e4d9ff" d="M216 28h4v-4h4v4h4v4h-4v4h-4v-4h-4zM16 156h4v-4h4v4h4v4h-4v4h-4v-4h-4z"/></g>
    <g class="void-eye-impact" fill="#c0a0ff"><path d="M112 12h16v4h-16zM112 176h16v4h-16zM12 88h4v16h-4zM224 88h4v16h-4zM36 36h8v8h-8zM196 36h8v8h-8zM36 148h8v8h-8zM196 148h8v8h-8z"/></g>
  </svg>`;
  const docks = [...document.querySelectorAll('.void-eye-dock')];
  if (!docks.length) return;
  const trail = document.createElement('div');
  trail.className = 'void-eye-trail';
  trail.setAttribute('aria-hidden', 'true');
  document.body.append(trail);
  const pupil = eye.querySelector('.void-eye-pupil');
  const timers = { idle: 0, arrive: 0, cleanup: 0, open: 0, blink: 0, unblink: 0, reaction: 0 };
  let currentDock;
  let pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  let scrolling = false;
  let gazeFrame = 0;
  function clearTimer(name) { clearTimeout(timers[name]); timers[name] = 0; }
  function inView(dock, full = false) {
    const box = dock.getBoundingClientRect();
    return full ? box.top >= 16 && box.bottom <= innerHeight - 16
      : box.bottom > 0 && box.top < innerHeight;
  }
  function destination() {
    const visible = docks.filter(dock => inView(dock, true));
    const distance = dock => { const box = dock.getBoundingClientRect(); return Math.abs(box.top + box.height / 2 - innerHeight * .52); };
    const closest = visible.sort((a, b) => distance(a) - distance(b))[0];
    // A small margin avoids flickering between adjacent slots at their midpoint.
    if (closest && currentDock && inView(currentDock, true) && distance(currentDock) <= distance(closest) + 64) return currentDock;
    return closest;
  }
  function mount(dock) {
    if (currentDock) currentDock.dataset.occupied = 'false';
    currentDock = dock;
    currentDock.dataset.occupied = 'true';
    eye.dataset.dock = dock.id;
    dock.append(eye);
  }
  function aim() {
    gazeFrame = 0;
    if (scrolling || document.hidden || !currentDock || !inView(currentDock) || !['watching', 'awakening'].includes(eye.dataset.phase)) return;
    const box = eye.getBoundingClientRect();
    const dx = pointer.x - box.left - box.width / 2, dy = pointer.y - box.top - box.height / 2;
    const distance = Math.hypot(dx, dy), strength = Math.min(distance / 180, 1);
    eye.dataset.attention = distance < 240 ? 'near' : 'far';
    pupil.setAttribute('transform', `translate(${distance ? dx / distance * 24 * strength : 0} ${distance ? dy / distance * 11 * strength : 0})`);
  }
  function queueAim() { if (!gazeFrame) gazeFrame = requestAnimationFrame(aim); }
  function scheduleBlink() {
    clearTimer('blink');
    if (motion.matches || document.hidden) return;
    timers.blink = setTimeout(() => {
      if (!scrolling && inView(currentDock) && eye.dataset.phase === 'watching') {
        eye.dataset.phase = 'blinking';
        timers.unblink = setTimeout(() => { eye.dataset.phase = 'watching'; queueAim(); scheduleBlink(); }, 240);
      } else scheduleBlink();
    }, 4800 + Math.random() * 4200);
  }
  function open() {
    eye.dataset.phase = motion.matches ? 'watching' : 'awakening';
    queueAim(); clearTimer('open');
    timers.open = setTimeout(() => {
      if (eye.dataset.phase === 'awakening') eye.dataset.phase = 'watching';
      queueAim(); scheduleBlink();
    }, motion.matches ? 0 : 1120);
  }
  function clearTrail() {
    trail.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    trail.replaceChildren();
  }
  function cancelTravel() {
    clearTimer('arrive'); clearTimer('cleanup'); clearTrail();
    if (eye.dataset.phase === 'transferring') eye.dataset.phase = 'watching';
  }
  function transfer(target) {
    if (!target || target === currentDock || scrolling || document.hidden) return;
    clearTimer('open'); clearTimer('blink'); clearTimer('unblink');
    clearTimer('cleanup'); clearTrail();
    if (motion.matches) { mount(target); open(); return; }
    const from = currentDock.getBoundingClientRect(), to = target.getBoundingClientRect();
    const start = { x: Math.max(12, Math.min(innerWidth - 12, from.left + from.width / 2)), y: Math.max(-12, Math.min(innerHeight + 12, from.top + from.height / 2)) };
    const end = { x: to.left + to.width / 2, y: to.top + to.height / 2 };
    const bend = Math.max(16, Math.min(innerWidth - 16, (start.x + end.x) / 2 + (end.x < start.x ? -1 : 1) * Math.min(100, innerWidth * .15)));
    const point = t => ({ x: (1 - t) ** 2 * start.x + 2 * (1 - t) * t * bend + t * t * end.x, y: start.y + (end.y - start.y) * t });
    eye.dataset.phase = 'transferring';
    for (let n = 0; n < 34; n++) {
      const t = n / 33, position = point(t);
      for (let strand = -1; strand <= 1; strand++) {
        const pixel = document.createElement('i');
        const spread = Math.sin(t * Math.PI) * 16 * strand;
        const size = strand === 0 && n % 3 === 0 ? 8 : 4;
        const color = strand < 0 ? '#91d9d0' : strand > 0 ? '#674793' : n % 4 === 0 ? '#e5d3ff' : '#ae83fb';
        pixel.style.cssText = `left:${Math.round((position.x + spread) / 4) * 4 - size / 2}px;top:${Math.round(position.y / 4) * 4 - size / 2}px;width:${size}px;height:${size}px;background:${color}`;
        trail.append(pixel);
        pixel.animate([{opacity:0,transform:'scale(.5)'},{opacity:strand === 0 ? .9 : .5,transform:'scale(1)',offset:.15},{opacity:0,transform:`translate(${strand * 8}px,8px) scale(.25)`}], {duration:430,delay:n * 16,easing:'steps(6,end)',fill:'both'});
      }
    }
    const comet = document.createElement('b'); comet.className = 'void-trail-core'; trail.append(comet);
    comet.animate(Array.from({length:25}, (_, n) => {
      const t = n / 24, p = point(t);
      return {transform:`translate(${Math.round(p.x / 4) * 4 - 6}px,${Math.round(p.y / 4) * 4 - 6}px) scale(${t > .9 ? .6 : 1})`,opacity:n === 0 || n === 24 ? 0 : 1,offset:t};
    }), {duration:560,easing:'linear',fill:'both'});
    timers.arrive = setTimeout(() => {
      if (!inView(target, true)) { cancelTravel(); settle(); return; }
      mount(target); open();
      timers.cleanup = setTimeout(clearTrail, 450);
    }, 560);
  }
  function settle() {
    scrolling = false; eye.dataset.scrolling = 'false';
    const target = destination();
    if (target && target !== currentDock) transfer(target);
    else { queueAim(); scheduleBlink(); }
  }
  function onScroll() {
    scrolling = true; eye.dataset.scrolling = 'true'; eye.dataset.reaction = '';
    clearTimer('reaction'); clearTimer('idle'); clearTimer('blink');
    cancelTravel();
    timers.idle = setTimeout(settle, 160);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll, { passive:true });
  window.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    pointer = {x:event.clientX,y:event.clientY}; queueAim();
  }, { passive:true });
  window.addEventListener('pointerdown', event => {
    if (scrolling || document.hidden || motion.matches || eye.dataset.phase !== 'watching' || !inView(currentDock)) return;
    const box = eye.getBoundingClientRect();
    if (Math.hypot(event.clientX - box.left - box.width / 2,event.clientY - box.top - box.height / 2) > 320) return;
    eye.dataset.reaction = 'pulse'; clearTimer('reaction');
    timers.reaction = setTimeout(() => {eye.dataset.reaction = '';},720);
  }, { passive:true });
  document.documentElement.addEventListener('pointerleave', () => {
    const box = eye.getBoundingClientRect(); pointer = {x:box.left + box.width / 2,y:box.top + box.height / 2}; queueAim();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { Object.keys(timers).forEach(clearTimer); clearTrail(); eye.dataset.phase = 'watching'; }
    else settle();
  });
  motion.addEventListener('change', () => {
    if (motion.matches) {
      cancelTravel(); clearTimer('open'); clearTimer('blink'); clearTimer('unblink'); clearTimer('reaction');
      eye.dataset.phase = 'watching'; eye.dataset.reaction = '';
      if (!scrolling) settle();
    } else scheduleBlink();
  });
  window.addEventListener('load', () => { if (!scrolling) settle(); }, {once:true});
  mount(destination() || docks[0]); open();
})();
