document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Classic Menu Toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            // Toggle icon between bars and times (close)
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Dynamic Gallery Injection (Only on index.html)
    const track1 = document.getElementById('track1');
    const track2 = document.getElementById('track2');

    if (track1 || track2) {
        // Selección Top 10 de las fotos más apetitosas (100% seguras)
        const baseImages = [
            "huevo-pro.jpg", "IMG_8381.jpg", "IMG_8382.jpg", "IMG_8383.jpg", 
            "IMG_8366.jpg", "IMG_8367.jpg", "IMG_8370.jpg", "IMG_8371.jpg", 
            "IMG_8372.jpg", "IMG_8373.jpg", "IMG_8374.jpg"
        ];
        
        // Repetimos para llenar la pasarela infinita
        const images = [...baseImages, ...baseImages, ...baseImages];

        const half = Math.ceil(images.length / 2);
        const firstHalf = images.slice(0, half);
        const secondHalf = images.slice(half);

        const generateHTML = (arr) => arr.map(img => `<img src="images/${img}" alt="Plato de Restobar Alex" loading="lazy">`).join('');

        if(track1) track1.innerHTML = generateHTML(firstHalf) + generateHTML(firstHalf);
        if(track2) track2.innerHTML = generateHTML(secondHalf) + generateHTML(secondHalf);
    }

    // 3. Generate QR Code (Only on contacto.html)
    const qrContainer = document.getElementById("qrcode");
    if(qrContainer) {
        const websiteURL = "https://restobaralex.github.io/menu-restobar-alex/"; 
        qrContainer.innerHTML = ""; 
        
        new QRCode(qrContainer, {
            text: websiteURL,
            width: 150,
            height: 150,
            colorDark : "#000000", // Black code
            colorLight : "#f4c025", // Gold background
            correctLevel : QRCode.CorrectLevel.H
        });
    }

    // 4. Dynamic Menu Rendering & Interaction (Only on menu.html)
    const menuContent = document.getElementById('dynamic-menu-content');
    const categoriesNav = document.getElementById('categories-nav');
    const searchInput = document.getElementById('menu-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const tabGeneral = document.getElementById('tab-general');
    const tabNovedades = document.getElementById('tab-novedades');
    const controlsSection = document.querySelector('.menu-controls');

    if (menuContent && typeof MENU_DATA !== 'undefined') {
        let currentView = 'general'; // 'general' or 'novedades'
        let searchVal = '';

        // Render Category Navigation
        function renderCategoriesNav() {
            categoriesNav.innerHTML = '';
            
            if (currentView === 'general') {
                Object.keys(MENU_DATA).forEach(catId => {
                    if (catId === 'novedades') return; // Skip novedades in general
                    const cat = MENU_DATA[catId];
                    const btn = document.createElement('button');
                    btn.className = 'category-nav-btn';
                    btn.setAttribute('data-target', `cat-${catId}`);
                    btn.innerHTML = `<i class="fas ${cat.icon || 'fa-utensils'}"></i> ${cat.title}`;
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetEl = document.getElementById(`cat-${catId}`);
                        if (targetEl) {
                            const headerOffset = 190; // height of navbar + sticky controls
                            const elementPosition = targetEl.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                            
                            // Highlight button
                            document.querySelectorAll('.category-nav-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                        }
                    });
                    categoriesNav.appendChild(btn);
                });
                
                const catWrapper = document.getElementById('categories-nav-wrapper');
                if (catWrapper) catWrapper.style.display = 'block';
            } else {
                // In Novedades view, hide category nav buttons since there is only one category
                const catWrapper = document.getElementById('categories-nav-wrapper');
                if (catWrapper) catWrapper.style.display = 'none';
            }
        }

        // Render Menu Items with filtering
        function renderMenu() {
            menuContent.innerHTML = '';
            
            const categoriesToRender = {};
            if (currentView === 'novedades') {
                categoriesToRender['novedades'] = MENU_DATA['novedades'];
            } else {
                Object.keys(MENU_DATA).forEach(catId => {
                    if (catId !== 'novedades') {
                        categoriesToRender[catId] = MENU_DATA[catId];
                    }
                });
            }

            let matchesCount = 0;

            Object.keys(categoriesToRender).forEach(catId => {
                const cat = categoriesToRender[catId];
                
                // Filter items based on name, description, or category title
                const filteredItems = cat.items.filter(item => {
                    const query = searchVal.toLowerCase();
                    return item.name.toLowerCase().includes(query) || 
                           (item.desc && item.desc.toLowerCase().includes(query)) ||
                           cat.title.toLowerCase().includes(query);
                });

                if (filteredItems.length > 0) {
                    matchesCount += filteredItems.length;
                    
                    const catSection = document.createElement('div');
                    // Add entry animation class
                    catSection.className = `menu-category fade-in-section ${currentView === 'novedades' ? 'novedades-premium-view' : ''}`;
                    catSection.id = `cat-${catId}`;
                    
                    let subtitleHTML = '';
                    if (cat.subtitle) {
                        subtitleHTML = `<p class="category-subtitle">${cat.subtitle}</p>`;
                    }

                    let itemsHTML = filteredItems.map(item => {
                        const priceDisplay = item.price !== null ? `${item.price.toFixed(2).replace('.', ',')}€` : 'Precio a consultar';
                        const badgeHTML = item.badge ? `<span class="badge">${item.badge}</span>` : '';
                        const descHTML = item.desc ? `<p>${item.desc}</p>` : '';
                        
                        return `
                            <div class="menu-item">
                                <div class="menu-item-info">
                                    <h3>${item.name} ${badgeHTML}</h3>
                                    ${descHTML}
                                </div>
                                <div class="menu-price">${priceDisplay}</div>
                            </div>
                        `;
                    }).join('');

                    catSection.innerHTML = `
                        <h2><i class="fas ${cat.icon || 'fa-utensils'}"></i> ${cat.title}</h2>
                        ${subtitleHTML}
                        <div class="menu-grid">
                            ${itemsHTML}
                        </div>
                    `;

                    menuContent.appendChild(catSection);
                }
            });

            // If no items match search query
            if (matchesCount === 0) {
                menuContent.innerHTML = `
                    <div class="no-results fade-in-section">
                        <i class="fas fa-search-minus"></i>
                        <p>No encontramos platos que coincidan con "<strong>${searchVal}</strong>".</p>
                        <p class="sub">Prueba con otra palabra clave como "Restobar", "smash", "croquetas" o "boquerones".</p>
                    </div>
                `;
            }
        }

        // Initialize
        renderCategoriesNav();
        renderMenu();

        // Virtual Subpage Tabs Switching
        if (tabGeneral && tabNovedades) {
            tabGeneral.addEventListener('click', () => {
                if (currentView !== 'general') {
                    currentView = 'general';
                    tabGeneral.classList.add('active');
                    tabNovedades.classList.remove('active');
                    searchVal = '';
                    searchInput.value = '';
                    clearSearchBtn.classList.remove('show');
                    
                    // Trigger dynamic updates
                    renderCategoriesNav();
                    renderMenu();
                    
                    // Smooth transition scroll
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                }
            });

            tabNovedades.addEventListener('click', () => {
                if (currentView !== 'novedades') {
                    currentView = 'novedades';
                    tabNovedades.classList.add('active');
                    tabGeneral.classList.remove('active');
                    searchVal = '';
                    searchInput.value = '';
                    clearSearchBtn.classList.remove('show');
                    
                    // Trigger dynamic updates
                    renderCategoriesNav();
                    renderMenu();
                    
                    // Smooth transition scroll
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                }
            });
        }

        // Search Input listeners
        searchInput.addEventListener('input', (e) => {
            searchVal = e.target.value;
            if (searchVal.trim().length > 0) {
                clearSearchBtn.classList.add('show');
            } else {
                clearSearchBtn.classList.remove('show');
            }
            renderMenu();
        });

        // Clear Search text listener
        clearSearchBtn.addEventListener('click', () => {
            searchVal = '';
            searchInput.value = '';
            clearSearchBtn.classList.remove('show');
            renderMenu();
            searchInput.focus();
        });

        // Highlight Active Category Button inside Sticky Bar on scroll
        window.addEventListener('scroll', () => {
            if (currentView !== 'general') return;
            
            const categories = Object.keys(MENU_DATA).filter(c => c !== 'novedades');
            let activeCatId = null;
            
            for (let i = 0; i < categories.length; i++) {
                const catId = categories[i];
                const el = document.getElementById(`cat-${catId}`);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Highlight the one occupying the top area
                    if (rect.top <= 210 && rect.bottom >= 160) {
                        activeCatId = catId;
                        break;
                    }
                }
            }
            
            if (activeCatId) {
                document.querySelectorAll('.category-nav-btn').forEach(btn => {
                    if (btn.getAttribute('data-target') === `cat-${activeCatId}`) {
                        btn.classList.add('active');
                        // Automatically slide categories list to show the highlighted button if overflowing
                        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
        });
    }

    // 5. Dynamic Cookie Consent Banner (Sitewide)
    if (!localStorage.getItem('restobar_cookie_consent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p><i class="fas fa-cookie-bite"></i> Este sitio web utiliza cookies para asegurar que tengas la mejor experiencia gastronómica y de navegación. <a href="contacto.html" style="color: var(--gold); text-decoration: underline;">Leer más</a></p>
                <div class="cookie-buttons">
                    <button id="cookie-reject" class="cookie-btn-reject">Rechazar</button>
                    <button id="cookie-accept" class="cookie-btn-accept">Aceptar</button>
                </div>
            </div>
        `;
        document.body.appendChild(cookieBanner);

        // Show banner with delay for premium feel
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);

        document.getElementById('cookie-accept').addEventListener('click', () => {
            localStorage.setItem('restobar_cookie_consent', 'accepted');
            cookieBanner.classList.remove('show');
            setTimeout(() => cookieBanner.remove(), 500);
        });

        document.getElementById('cookie-reject').addEventListener('click', () => {
            localStorage.setItem('restobar_cookie_consent', 'rejected');
            cookieBanner.classList.remove('show');
            setTimeout(() => cookieBanner.remove(), 500);
        });
    }

    // 6. Dynamic Opening Hours Status Badge (Only on contacto.html)
    const openingBadge = document.getElementById('opening-badge');
    if (openingBadge) {
        function updateOpeningStatus() {
            const now = new Date();
            const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            const hour = now.getHours();
            const minutes = now.getMinutes();
            const currentTotalTime = hour * 60 + minutes; // current minutes of the day

            // Schedule intervals in minutes from midnight
            const schedule = {
                1: null, // Closed (Lunes)
                2: { open: 9 * 60, close: 24 * 60 },      // Martes
                3: { open: 9 * 60, close: 24 * 60 },      // Miércoles
                4: { open: 9 * 60, close: 24 * 60 },      // Jueves
                5: { open: 9 * 60, close: 24 * 60 + 60 }, // Viernes: 09:00 to 01:00 (1500 min)
                6: { open: 9 * 60, close: 24 * 60 + 60 }, // Sábado: 09:00 to 01:00 (1500 min)
                0: { open: 9 * 60, close: 24 * 60 }       // Domingo
            };

            let isOpen = false;

            // Check today's schedule
            const todaysSchedule = schedule[day];
            if (todaysSchedule) {
                if (currentTotalTime >= todaysSchedule.open && currentTotalTime < todaysSchedule.close) {
                    isOpen = true;
                }
            }

            // Check yesterday's late-night closing (if closed past midnight)
            const yesterday = (day === 0) ? 6 : day - 1;
            const yesterdaysSchedule = schedule[yesterday];
            if (yesterdaysSchedule && yesterdaysSchedule.close > 24 * 60) {
                const yesterdayCloseMinsNextDay = yesterdaysSchedule.close - (24 * 60);
                if (currentTotalTime < yesterdayCloseMinsNextDay) {
                    isOpen = true;
                }
            }

            // Render badge
            if (isOpen) {
                openingBadge.innerHTML = `<span style="background: #25d366; color: #000; padding: 3px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; animation: pulseGreen 1.5s infinite; vertical-align: middle; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 0 10px rgba(37,211,102,0.4);"><i class="fas fa-circle" style="font-size: 0.5rem; color: #fff;"></i> Abierto</span>`;
            } else {
                openingBadge.innerHTML = `<span style="background: #ff3b30; color: #fff; padding: 3px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; vertical-align: middle; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 0 10px rgba(255,59,48,0.3);"><i class="fas fa-circle" style="font-size: 0.5rem; color: #fff; opacity: 0.7;"></i> Cerrado</span>`;
            }
        }
        updateOpeningStatus();
        // Update status every minute
        setInterval(updateOpeningStatus, 60000);
    }
});
