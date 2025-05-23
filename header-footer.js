window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            const scrolled = window.scrollY > 100;
            header.style.background = scrolled ? '#ff884b' : '#ff884b';
            header.style.padding = scrolled ? '0.8rem 2rem' : '1rem 2rem';
            header.style.backdropFilter = scrolled ? 'blur(10px)' : 'none';
        });

        const searchBar = document.querySelector('.search-bar');
        const searchIcon = document.querySelector('.search-icon');

        searchBar.addEventListener('focus', () => {
            searchBar.style.transform = 'scale(1.02)';
            searchIcon.style.color = '#ff884b';
        });

        searchBar.addEventListener('blur', () => {
            searchBar.style.transform = 'scale(1)';
            searchIcon.style.color = '#cdfffc';
        });

        let cartItems = 0;
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.cart-count').textContent = ++cartItems;
                document.querySelector('.fa-shopping-cart').classList.add('bounce');
                setTimeout(() => {
                    document.querySelector('.fa-shopping-cart').classList.remove('bounce');
                }, 1000);
            });
        });