document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const publicationItems = document.querySelectorAll('.what-is-new-item');

        // Funkcja do sortowania po dacie
        function sortByDate(items) {
            const sortedItems = Array.from(items).sort((a, b) => {
                const dateA = new Date(a.dataset.date);
                const dateB = new Date(b.dataset.date);
                return dateB - dateA;
            });
            return sortedItems;
        }

        // Początkowe sortowanie po dacie (od najnowszych)
        const sortedItemsInitial = sortByDate(publicationItems);
        const container = document.querySelector('.what-is-new .container');
        sortedItemsInitial.forEach(item => container.appendChild(item));

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Usuń klasę 'active' ze wszystkich przycisków
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Dodaj klasę 'active' do klikniętego przycisku
                button.classList.add('active');

                const filter = button.dataset.filter;
                let itemsToShow = [];

                // Pokaż lub ukryj elementy w zależności od filtra
                publicationItems.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === 'all' || filter === category) {
                        item.classList.remove('hidden');
                        itemsToShow.push(item);
                    } else {
                        item.classList.add('hidden');
                    }
                });

                // Posortuj widoczne elementy po dacie i ponownie je wstaw
                const sortedItems = sortByDate(itemsToShow);
                sortedItems.forEach(item => container.appendChild(item));
            });
        });
    });