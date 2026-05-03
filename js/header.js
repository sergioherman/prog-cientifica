document.addEventListener('DOMContentLoaded', function() {
    // Detecta se está em um subdirectório
    const isInSubdir = window.location.pathname.includes('/pages/');
    const indexPath = isInSubdir ? '../index.html' : 'index.html';
    
    const headerHTML = `
        <header class="header">
            <div class="header-container">
                
                <!-- Logo / título -->
                <div class="logo">
                    <h1><a href="${indexPath}">Programação Científica</a></h1>
                </div>

                <!-- Navegação -->
                <nav class="nav">
                    <ul>
                        <li><a href="${indexPath}">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    `;
    
    // Insere o header no início do body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
