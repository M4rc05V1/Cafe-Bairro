document.addEventListener('DOMContentLoaded', function() {
    // Verifica se os elementos existem antes de adicionar o listener
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'open' na sidebar para mostrá-la/escondê-la
            sidebar.classList.toggle('open');
            // Alterna a classe 'menu-open' no body para travar o scroll de fundo
            body.classList.toggle('menu-open');
        });
        
        // Listener para fechar o menu ao clicar fora dele (apenas em mobile)
        document.querySelector('.content').addEventListener('click', function(e) {
            // Verifica se o menu está aberto E se o clique não foi no botão de toggle E se não foi dentro da sidebar
            if (window.innerWidth <= 900 && sidebar.classList.contains('open') && e.target !== menuToggle && !sidebar.contains(e.target)) {
                sidebar.classList.remove('open');
                body.classList.remove('menu-open');
            }
        });
    }
});
