(function(){
  'use strict';
  var config = window.HOME_BREED_CONFIG || {};
  var header = document.getElementById('site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  var status = document.getElementById('whatsapp-status');
  document.documentElement.classList.add('reveal-ready');
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function closeMenu(){
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open navigation');
    nav.classList.remove('open');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(function(link){ link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') { closeMenu(); toggle.focus(); } });
    document.addEventListener('click', function(e){ if(nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) closeMenu(); });
  }
  function updateHeader(){ if(header) header.classList.toggle('compact', window.scrollY > 25); }
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});

  var waNumber = String(config.whatsappNumber || '').replace(/\D/g,'');
  var waReady = config.whatsappConfirmed === true && /^\d{10,15}$/.test(waNumber);
  function waUrl(message){ return 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(message); }
  document.querySelectorAll('[data-whatsapp], [data-breed]').forEach(function(link){
    var breed = link.getAttribute('data-breed');
    var message = breed
      ? 'Hello Home Breed Puppy! I would like to ask about the ' + breed + ' breed shown on your website. I understand the breed card is an example and would like to confirm current availability and details.'
      : 'Hi Home Breed Puppy, I’d like to ask about current puppy availability. Which puppies are available right now?';
    if (waReady) {
      link.href = waUrl(message);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = 'tel:' + (config.phoneTel || '+918778596730');
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-label', (breed ? 'Call to ask about ' + breed : 'Enquire with Home Breed Puppy by phone') + '. WhatsApp link awaits owner confirmation.');
      if (breed) link.textContent = 'Call to ask about this breed ↗';
      else link.textContent = 'Enquire by phone ↗';
    }
  });
  if (status) {
    status.textContent = waReady
      ? 'WhatsApp enquiries are ready. A message will open for you to review and send.'
      : 'WhatsApp has not yet been confirmed for this number. Enquiry buttons currently offer a phone call instead.';
  }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var targets = document.querySelectorAll('.breed-card, .promise-item, .step-card, .reviews-inner, .faq-list details');
    targets.forEach(function(el){ el.classList.add('reveal-pending'); });
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, {threshold:0.08, rootMargin:'0px 0px -25px 0px'});
    targets.forEach(function(el){ observer.observe(el); });
  }
})();
