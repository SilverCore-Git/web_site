export default function
(id: string, options?: ScrollIntoViewOptions) 
{
    const el = document.querySelector(id);
    if (!el) {
        console.warn(`scrollToId: élément avec l'id "${id}" introuvable.`);
        return;
    }

    el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        ...options,
    });
}
