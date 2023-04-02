const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault();

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        navLink.classList.add('active');

        const line = document.createElement('div');
        line.classList.add('line');
        navLink.appendChild(line);
    });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    const href = navLink.getAttribute('href');
    localStorage.setItem('activeNavLink', href);
    window.location.href = href; 
  });
});

const navLinks = document.querySelectorAll('.nav-item');

const currentPage = location.pathname.split('/').pop();

const activeNavLink = localStorage.getItem('activeNavLink');

navLinks.forEach(navLink => {
  if (navLink.querySelector('.nav-link').getAttribute('href').includes(currentPage)) {
    navLink.classList.add('active');
  } else if (navLink.classList.contains('active')) {
    navLink.classList.remove('active');
  }

  if (navLink.querySelector('.nav-link').getAttribute('href').includes(activeNavLink)) {
    navLink.classList.add('active');
  }
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    navLinks.forEach(link => link.classList.remove('active'));

    navLink.classList.add('active');

    const href = navLink.querySelector('.nav-link').getAttribute('href');
    localStorage.setItem('activeNavLink', href);

    event.preventDefault();

    const nextPage = href.split('/').pop();
    location.href = nextPage;
  });
});






  