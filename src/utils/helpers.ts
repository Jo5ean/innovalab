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

// Definimos los tipos permitidos para el tipo de mensaje
type MessageType = 'success' | 'error';

/**
 * Función para mostrar un mensaje de notificación simple.
 * @param message - El mensaje que se mostrará.
 * @param type - El tipo de mensaje: 'success', 'error'.
 */
export function message({ message, type }: { message: string, type: MessageType }): void {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '4px';
    notification.style.fontFamily = 'Montserrat, sans-serif';
    notification.style.fontWeight = '500';
    notification.style.color = 'white';
    notification.style.zIndex = '9999';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    
    // Aplicar estilos según el tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#10B981';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#EF4444';
    }

    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
