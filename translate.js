document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-flag');
    
    // Słownik tłumaczeń
    const translations = {
        pl: {
            publications: "PUBLIKACJE",
            about_us: "O NAS",
            blog: "BLOG",
            contact: "KONTAKT",
            hero_text: "Zajmujemy się polaryzacją społeczną i tego jakie echo po sobie pozostawia!",
            publications_title: "PUBLIKACJE",
            filter_all: "WSZYSTKIE",
            filter_in_progress: "W TOKU",
            filter_articles: "ARTYKUŁY",
            filter_presentations: "WYSTĄPIENIA",
            publication_1_title: "Tytuł publikacji 1",
            publication_1_description: "Opis publikacji 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            publication_2_title: "Tytuł publikacji 2",
            publication_2_description: "Opis publikacji 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            about_us_title: "O NAS",
            name_1_title: "mgr Filip Liebersbach",
            name_1_description: "Fajny ziom",
            name_2_title: "IMIE NAZWISKO",
            name_2_description: "Krótkie info",
            blog_title: "BLOG",
            blog_text: "Tutaj pojawią się nasze najnowsze wpisy na blogu.",
            footer_copyright: "&copy; 2025 ECHO. Wszystkie prawa zastrzeżone.",
            contact_title: "KONTAKT",
            contact_email: "Email: "
        },
        en: {
            publications: "PUBLICATIONS",
            about_us: "ABOUT US",
            blog: "BLOG",
            contact: "CONTACT",
            hero_text: "We deal with social polarization and the echo it leaves behind!",
            publications_title: "PUBLICATIONS",
            filter_all: "ALL",
            filter_in_progress: "IN PROGRESS",
            filter_articles: "ARTICLES",
            filter_presentations: "PRESENTATIONS",
            publication_1_title: "Publication Title 1",
            publication_1_description: "Description of publication 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            publication_2_title: "Publication Title 2",
            publication_2_description: "Description of publication 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            about_us_title: "ABOUT US",
            name_1_title: "Filip Liebersbach, MA",
            name_1_description: "A cool guy",
            name_2_title: "NAME SURNAME",
            name_2_description: "Short info",
            blog_title: "BLOG",
            blog_text: "Here you will find our latest blog posts.",
            footer_copyright: "&copy; 2025 ECHO. All rights reserved.",
            contact_title: "CONTACT",
            contact_email: "Email: "
        }
    };

    let currentLang = 'pl'; // Domyślny język

    // Funkcja do aktualizowania tekstów na stronie
    function updateText() {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.dataset.langKey;
            
            if (translations[currentLang][key]) {
                if (element.classList.contains('filter-btn')) {
                     const emoji = element.innerHTML.trim().split(' ')[0];
                     element.innerHTML = `${emoji} ${translations[currentLang][key]}`;
                } else if (key === 'contact_email') {
                    const emailAddress = element.querySelector('a').textContent;
                    element.innerHTML = `${translations[currentLang][key]} <a href="mailto:kontakt@echo.pl">${emailAddress}</a>`;
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });
    }

    // Dodaj listener na kliknięcie flagi
    langSwitcher.addEventListener('click', () => {
        // Zmień język
        currentLang = currentLang === 'pl' ? 'en' : 'pl';
        
        // Zmień flagę
        langSwitcher.src = currentLang === 'pl' ? 'images/BF.webp' : 'images/PF.png';
        langSwitcher.alt = currentLang === 'pl' ? 'Flaga Wielkiej Brytani' : 'Polska Flaga';

        // Zmień teksty
        updateText();
    });

    // Wczytaj obrazek polskiej flagi, aby był dostępny w przeglądarce
    const polishFlag = new Image();
    polishFlag.src = 'images/PF.png';
});