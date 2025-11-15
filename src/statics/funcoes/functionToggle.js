const toggleBtn = document.querySelector('#menu a.toggle');
const submenu = document.querySelector('.submenu');

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    toggleBtn.classList.toggle('open');
});

function abrirCadastro() {
    const form_cadastro = document.querySelector('.tabela-form')
    const visible = window.getComputedStyle(form_cadastro).display

    switch(visible) {
        case 'none': form_cadastro.style.display = 'block';
            break;
        case 'block': form_cadastro.style.display = 'none'
            break;
        default:
            alert("Nenhum")
    }
}