document.addEventListener('DOMContentLoaded', function() {
    // === LÓGICA DO MENU (MANTER) ===
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            body.classList.toggle('menu-open');
        });
        
        document.querySelector('.content').addEventListener('click', function(e) {
            if (window.innerWidth <= 900 && sidebar.classList.contains('open') && e.target !== menuToggle && !sidebar.contains(e.target)) {
                sidebar.classList.remove('open');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // === LÓGICA DA RESERVA (APRIMORAR) ===
    
    // Certifique-se que o ID no HTML é 'reservaForm' e que a div de feedback foi adicionada!
    const form = document.getElementById('reservaForm'); 
    
    // Adicione esta div no seu HTML de Reservas (dentro da <section>):
    // <div id="form-feedback" class="form-feedback"></div>
    const feedbackMessageContainer = document.getElementById('form-feedback');

    if (form && feedbackMessageContainer) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Validação básica (usando a validação nativa do HTML + checagem do JS)
            const email = document.getElementById("email") ? document.getElementById("email").value : '';
            const data = document.getElementById("data").value;
            const hora = document.getElementById("hora").value;
            
            if (!form.checkValidity() || !email || !data || !hora) {
                 // A validação nativa do HTML 5 já impede o envio se faltar 'required'
                 // Mas a função de feedback ajuda:
                 displayFeedback('❌ Por favor, preencha todos os campos obrigatórios.', 'error');
                 return;
            }

            // 2. Simulação de Envio (Substitui o alert())
            
            // Oculta o botão temporariamente para dar feedback de processamento
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Aguarde...';
            
            // Simula um atraso de rede
            setTimeout(() => {
                // 3. Exibe o feedback elegante
                displayFeedback('✅ Reserva feita com sucesso! Verifique seu email para a confirmação.', 'success');
                
                // 4. Limpa e reinicia o formulário
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Confirmar Reserva'; 
                
                // 5. Oculta a mensagem de sucesso após 8 segundos
                setTimeout(() => {
                    displayFeedback('', ''); 
                }, 8000); 

            }, 1500); // 1.5 segundo de simulação
        });
    }

    /**
     * Exibe a mensagem de feedback.
     */
    function displayFeedback(message, type) {
        feedbackMessageContainer.textContent = message;
        // Usa a classe CSS que definimos anteriormente (success/error)
        feedbackMessageContainer.className = 'form-feedback ' + type;
        
        // Garante que a opacidade seja ativada (se a mensagem não estiver vazia)
        if (message) {
            feedbackMessageContainer.style.opacity = '1';
        } else {
            feedbackMessageContainer.style.opacity = '0';
        }
    }
});
