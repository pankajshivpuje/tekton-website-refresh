document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.hextra-nav-container nav');
  if (!nav) return;

  var p = window.location.pathname;
  var isDocsPage = p.indexOf('/docs/') !== -1 || p.indexOf('/vault/') !== -1;
  if (!isDocsPage) return;

  var wrapper = document.createElement('div');
  wrapper.className = 'version-dropdown';
  wrapper.style.marginLeft = '0.5rem';
  wrapper.style.marginRight = '0.25rem';

  var btn = document.createElement('button');
  btn.className = 'version-dropdown-btn';
  btn.textContent = 'Versions ▾';
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');

  var menu = document.createElement('div');
  menu.className = 'version-dropdown-content';
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', 'Version selector');
  menu.innerHTML =
    '<div class="vd-label" style="pointer-events:none; opacity:0.7;" role="presentation">Latest component versions:</div>' +
    '<form id="version-announcer"></form>' +
    '<div class="vd-divider" role="separator"></div>' +
    '<div class="vd-label" style="pointer-events:none;" role="presentation">Other Versions</div>' +
    '<form id="previous-releases-form"></form>';

  wrapper.appendChild(btn);
  wrapper.appendChild(menu);

  var searchWrapper = nav.querySelector('.hextra-search-wrapper');
  if (searchWrapper && searchWrapper.nextSibling) {
    nav.insertBefore(wrapper, searchWrapper.nextSibling);
  } else {
    nav.appendChild(wrapper);
  }

  if (typeof setMainVersionSwitcher === 'function') {
    setMainVersionSwitcher();
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = menu.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function() {
    menu.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  });

  btn.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
});
