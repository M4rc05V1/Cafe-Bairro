document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'open' na sidebar para mostrá-la/escondê-la
        sidebar.classList.toggle('open');
        // Alterna a classe 'menu-open' no body para travar o scroll de fundo
        body.classList.toggle('menu-open');
    });

    // Opcional: Fechar o menu ao clicar fora dele
    document.querySelector('.content').addEventListener('click', function(e) {
        if (sidebar.classList.contains('open') && e.target !== menuToggle && !sidebar.contains(e.target)) {
            sidebar.classList.remove('open');
            body.classList.remove('menu-open');
        }
    });
});
