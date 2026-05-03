document.addEventListener('DOMContentLoaded', function() {
    // Detecta se está em um subdirectório
    const isInSubdir = window.location.pathname.includes('/pages/');
    const pagePath = isInSubdir ? '' : 'pages/';

    const sidebarHTML = `
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="side-content">
                <h3>Sumário</h3>
                <nav>
                    <ol>

                    <li>Pré-Requisitos
                        <ul>
                        <li><a href="${pagePath}series-taylor.html">Séries de Taylor</a></li>
                        </ul>
                    </li>

                    <li>EDO: Problemas de Valor Inicial
                        <ul>
                        <li>Métodos de Passo Simples
                            <ul>
                            <li>
                                <b href="${pagePath}metodo-euler.html">Método de Euler</a>
                                <ul>
                                <li><a href="${pagePath}metodo-euler-explicito.html">Método de Euler Explícito</a></li>
                                <li><b href="${pagePath}metodo-euler-implicito.html" >Método de Euler Implícito</a></li>
                                </ul>
                            </li>
                            <li><b href="${pagePath}metodos-taylor.html">Métodos de Taylor</a></li>
                            <li>
                                <b href="${pagePath}metodos-runge-kutta.html">Métodos de Runge-Kutta</a>
                                <ul>
<!--
                                <li><b href="${pagePath}metodo-rk2.html">RK Segunda Ordem</a></li>
                                <li><b href="${pagePath}metodo-rk3.html">RK Terceira Ordem</a></li>
-->
                                <li><a href="${pagePath}metodo-rk4.html">RK Quarta Ordem</a></li>
                                </ul>
                            </li>

                            <li><b href="${pagePath}metodos-preditor-corretor.html">Métodos Preditor-Corretor</a></li>

                                <li>1º Aplicação Prática - Pêndulo
                                    <ul>
                                    <li><a href="${pagePath}pendulo-revisao-movimento-curvilineo.html">Movimento Curvilíneo</a></li>
                                    <li><a href="${pagePath}pendulo-modelagem.html">Modelagem do Pêndulo</a></li>
                                    <li><a href="${pagePath}pendulo-euler.html">Pêndulo com Método de Euler</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
<!--
                        <li>Métodos de Passo Múltiplo
                            <ul>
                            <li>Métodos Explícitos
                                <ul>
                                <li>Adams-Bashforth</li>
                                <li>Nyström</li>
                                </ul>
                            </li>
                            <li>Métodos Implícitos
                                <ul>
                                <li>Adams-Moulton</li>
                                <li>Milne-Simpson</li>
                                <li>BDF (Backward Differentiation Formula)</li>
                                </ul>
                            </li>
                            </ul>
                        </li>
-->

<!--
                        <li>Sistemas de Equações Diferenciais Ordinárias</li>
                        <li>Equações de Ordem Maior ou Igual a 2</li>
-->
                        </ul>
                    </li>
<!--
                    <li>Métodos Numéricos para Resolução de EDOs: Problemas de Valor de Contorno
                        <ul>
                        <li>Método das Diferenças Finitas</li>
                        </ul>
                    </li>

                    <li>Métodos Numéricos para Resolução de Equações Diferenciais Parciais (EDPs)
                        <ul>
                        <li>Métodos das Diferenças Finitas para Equações Lineares Elípticas</li>
                        <li>Métodos das Diferenças Finitas para Equações Lineares Parabólicas e Hiperbólicas
                            <ul>
                            <li>Métodos Explícitos</li>
                            <li>Métodos Implícitos</li>
                            </ul>
                        </li>
                        </ul>
                    </li>

                    <li>Sistemas de Equações Algébricas Lineares Especiais
                        <ul>
                        <li>Métodos Numéricos para Matrizes de Grandes Dimensões</li>
                        <li>Métodos para Matrizes Simétricas</li>
                        <li>Métodos para Matrizes em Banda</li>
                        </ul>
                    </li>

                    <li>Desenvolvimento de Aplicações
                    </li>
-->
                    </ol>
                </nav>
            </div>
        </aside>
    `;

    // Insere a sidebar no início do main.layout
    const mainLayout = document.querySelector('.layout');
    if (mainLayout) {
        mainLayout.insertAdjacentHTML('afterbegin', sidebarHTML);
    }


    const hamburger = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

});


const hamburgerHTML = `
    <button class="hamburger-btn">☰</button>
`;

document.body.insertAdjacentHTML('afterbegin', hamburgerHTML);

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sideContent = document.querySelector('.side-content');

    if (sidebar && sideContent) {
        let lastScrollY = window.scrollY;
        let currentTop = 0;

        function updateSidebarPosition() {
            const scrollY = window.scrollY;
            const delta = scrollY - lastScrollY;
            const viewportHeight = window.innerHeight;
            const contentHeight = sideContent.offsetHeight;

            if (contentHeight <= viewportHeight) {
                currentTop = 0;
                sideContent.style.top = '0px';
                lastScrollY = scrollY;
                return;
            }

            if (currentTop > 0) {
                currentTop = 0;
            }

            const minTop = viewportHeight - contentHeight;

            if (delta > 0) {
                currentTop = Math.max(minTop, currentTop - delta);
            } else if (delta < 0) {
                currentTop = Math.min(0, currentTop - delta);
            }

            sideContent.style.top = `${currentTop}px`;
            lastScrollY = scrollY;
        }

        updateSidebarPosition();
        window.addEventListener('scroll', updateSidebarPosition, { passive: true });
        window.addEventListener('resize', updateSidebarPosition);
    }
});
