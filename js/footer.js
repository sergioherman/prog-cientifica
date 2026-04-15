document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
<footer>
    <div class="footer-container">

        <p>
            <strong>Universidade Federal Fluminense - UFF</strong><br>
            Instituto de Computação
        </p>

        <p>
            Monitor e Desenvolvedor:<br>
            <strong>
                <a href="mailto:sergioherman@id.uff.br">Sergio Herman</a>
            </strong>
        </p>

        <p>
            Orientadores:<br>
            <strong>Luiz Fernando Bez</strong><br>
            <strong>Ricardo Leiderman</strong>
            <strong></strong>
        </p>

        <p>&copy; 2026, Niterói - RJ. Todos os direitos reservados.</p>

    </div>
</footer>
    `;

    // Insere o footer no final do body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
