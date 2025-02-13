interface Rows {
    fullhd: number
    hd: number
    tablet: number
    mobile: number
}

export const initCarrousel = ({ carousel, prevBtn, nextBtn, currentIndex, rows }: { carousel: HTMLElement, prevBtn: HTMLElement, nextBtn: HTMLElement, currentIndex: number, rows: Rows }) => {

    // Calculate the number of visible items based on screen width
    function getVisibleItems() {
        if (window.innerWidth >= 1280) return rows.fullhd; // lg
        if (window.innerWidth >= 1024) return rows.hd; // xl
        if (window.innerWidth >= 768) return rows.tablet; // md
        return rows.mobile;
    }

    function updateCarousel() {
        const itemWidth = carousel.offsetWidth / getVisibleItems();
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function nextSlide() {
        const maxIndex = carousel.children.length - getVisibleItems();
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function prevSlide() {
        const maxIndex = carousel.children.length - getVisibleItems();
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    window.addEventListener("resize", updateCarousel);

    // Initial setup
    updateCarousel();

    // Función para igualar alturas
    function equalizeHeights() {
        // Resetear alturas
        const cards = carousel.querySelectorAll(".card") as NodeListOf<HTMLElement>;
        cards.forEach((card) => (card.style.height = "auto"));

        // Encontrar la altura más grande
        let maxHeight = 0;
        cards.forEach((card) => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        // Aplicar la altura más grande a todas las tarjetas
        cards.forEach((card) => (card.style.height = `${maxHeight}px`));
    }

    // Ejecutar cuando se carga la página y cuando se redimensiona
    window.addEventListener("load", equalizeHeights);
    window.addEventListener("resize", equalizeHeights);
    return currentIndex;
}