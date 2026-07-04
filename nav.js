
// Let keyboard users close the menu with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    closeMobileMenu();
  }
});

//Ensure all pages header consistency
const header = document.getElementById('main-header');
header.innerHTML = `<nav aria-label="Primary" class="nav-bar">
      <div class="container-content flex items-center justify-between py-3.5 lg:py-4">

        <!-- LEFT: logo mark + wordmark + tagline. Links back to the homepage. -->
        <a href="#home" class="flex items-center  gap-3" aria-label="NACOS UNN Alumni Association — go to homepage">
          <!-- logo mark. -->
        
          <div class="w-10 h-10 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
              <img class="w-full h-full" src="./images/nacos_logo.jpg" alt="NACOS LOGO">
          </div>
          <span class="flex flex-col leading-tight">
            <span class="font-display text-base font-semibold text-ink sm:text-lg">NACOS UNN Alumni</span>
            <span class="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft sm:text-[10px]">Building Generations of Excellence</span>
          </span>
        </a>

        <!-- CENTER: desktop nav links (hidden below the lg breakpoint) -->
        <ul class="hidden items-center gap-7 lg:flex" role="list">
          <li>
            <a href="./index.html#home" class="nav-link" aria-current="page">Home</a>
          </li>
          <li>
            <a href="about.html" class="nav-link">About</a>
          </li>

          <!-- INITIATIVES — mega menu (6 cards) -->
          <li class="group relative">
            <button type="button" class="nav-link nav-link--trigger" aria-haspopup="true" aria-expanded="false">
              Initiatives
              <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"></i>
            </button>

            <div class="mega-menu" role="menu">
              <div class="mega-menu__grid">

                <a href="initiatives.html#infrastructure" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-building"></i></span>
                  <span class="mega-card__title">Infrastructure</span>
                  <span class="mega-card__desc">Modern learning facilities.</span>
                </a>

                <a href="initiatives.html#scholarships" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-graduation-cap"></i></span>
                  <span class="mega-card__title">Scholarships</span>
                  <span class="mega-card__desc">Financial support for students.</span>
                </a>

                <a href="initiatives.html#career-coaching" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-briefcase"></i></span>
                  <span class="mega-card__title">Career Development</span>
                  <span class="mega-card__desc">Industry training and certifications.</span>
                </a>

                <a href="initiatives.html#mentorship" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-handshake"></i></span>
                  <span class="mega-card__title">Mentorship</span>
                  <span class="mega-card__desc">Connect students with experienced alumni.</span>
                </a>

                <a href="initiatives.html#alumni-engagement" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-users"></i></span>
                  <span class="mega-card__title">Community</span>
                  <span class="mega-card__desc">Networking events and reunions.</span>
                </a>

                <a href="initiatives.html#recognition" class="mega-card" role="menuitem">
                  <span class="mega-card__icon"><i class="fa-solid fa-award"></i></span>
                  <span class="mega-card__title">Recognition</span>
                  <span class="mega-card__desc">Awards and academic excellence.</span>
                </a>

              </div>
            </div>
          </li>

          <li>
            <a href="./projects.html" class="nav-link">Projects &amp; Impact</a>
          </li>

          <!-- COMMUNITY — simple dropdown -->
          <li class="group relative">
            <button type="button" class="nav-link nav-link--trigger" aria-haspopup="true" aria-expanded="false">
              Community
              <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"></i>
            </button>
            <div class="dropdown-panel" role="menu">
              <span class="dropdown-item dropdown-item--disabled" role="menuitem" aria-disabled="true">
                Alumni Directory <span class="soon-tag">Coming Soon</span>
              </span>
              <a href="./initiatives.html#mentorship" class="dropdown-item" role="menuitem">Mentorship</a>
              <span href="#events" class="dropdown-item dropdown-item--disabled" role="menuitem" aria-disabled="true">Events <span class="soon-tag">Coming Soon</span></span>
              <span href="#x-spaces" class="dropdown-item dropdown-item--disabled" role="menuitem" aria-disabled="true">X Spaces <span class="soon-tag">Coming Soon</span></span>
              <a href="./projects.html#volunteer" class="dropdown-item" role="menuitem">Volunteer</a>
              <span class="dropdown-item dropdown-item--disabled" role="menuitem" aria-disabled="true">
                Regional Chapters <span class="soon-tag">Coming Soon</span>
              </span>
            </div>
          </li>

          <!-- NEWS — simple dropdown -->
          <li class="group relative">
            <button type="button" class="nav-link nav-link--trigger" aria-haspopup="true" aria-expanded="false">
              News
              <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"></i>
            </button>
            <div class="dropdown-panel" role="menu">
              <a href="#latest-news" class="dropdown-item" role="menuitem">Latest News</a>
              <a href="#success-stories" class="dropdown-item" role="menuitem">Success Stories</a>
              <a href="#project-updates" class="dropdown-item" role="menuitem">Project Updates</a>
              <a href="#annual-reports" class="dropdown-item" role="menuitem">Annual Reports</a>
              <a href="#press-releases" class="dropdown-item" role="menuitem">Press Releases</a>
            </div>
          </li>

          <li>
            <a href="#footer" class="nav-link">Contact</a>
          </li>
        </ul>

        <!-- RIGHT: search, auth-area placeholder, and the two CTAs -->
        <div class="hidden items-center gap-2 lg:flex">

          <!-- Search trigger: opens the search modal via the checkbox-hack below -->
          <label for="search-toggle" class="search-icon-btn" aria-label="Open search" role="button" tabindex="0">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>

          <!--
            USER MENU (future-ready)
            -----------------------------------------------------------------
            Reserved slot for when authentication ships. Logged-out state
            (today): the Donate + Join Alumni buttons below double as this
            area. Once auth exists, replace those two links with an avatar
            + dropdown containing: Dashboard, My Contributions, My
            Membership, My Events, Settings, Logout. No markup is added
            for that yet since it doesn't exist -- left as this comment.
          -->

          <a href="support.html" class="btn-outline-dark">Donate</a>
          <a href="join.html" class="btn-fill-green">Join Alumni</a>
        </div>

        <!-- Mobile: search icon + hamburger (hidden at lg and above) -->
        <div class="flex items-center gap-3 lg:hidden">
          <label for="search-toggle" class="search-icon-btn" aria-label="Open search" role="button" tabindex="0">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <button id="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" class="search-icon-btn">
            <i class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </nav>`

const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
      
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex', 'is-open');
    document.body.classList.add('overflow-hidden'); // stop background scroll while open
    menuBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus(); // move keyboard focus into the menu
    }
    
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex', 'is-open');
    document.body.classList.remove('overflow-hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus(); // return keyboard focus to the button that opened it
  }
      
menuBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
      
// Close automatically once a link inside the menu is clicked
mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });