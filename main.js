

const dropdown = document.querySelectorAll('.card--list__item');
 


/* dropdown.addEventListener('click',  e => {
    const item = e.target;
    const items = Array.from(document.querySelectorAll('.card--list__item'));
    const el = items.indexOf(item);

    console.log(item);
}) */

dropdown.forEach(i => {
    i.addEventListener('click', e => {
        const item = e.currentTarget;

        dropdown.forEach(e => {
            e.classList.remove('active')
        });

        item.classList.add('active');
    })
});
