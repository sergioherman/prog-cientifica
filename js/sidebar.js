// ADD SIDEBAR DINÂMICA

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
                    <li><a href="${pagePath}../index.html">Início<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>

                    <li>Pré-Requisitos
                        <ul>
                        <li><a href="${pagePath}series-taylor.html">Séries de Taylor<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                        </ul>
                    </li>

                    <li>
                        
                        <a href="${pagePath}pvi-metodos-numericos.html">PVI: Métodos Numéricos<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a>
                        <ul>
                        <li>
                            <a href="${pagePath}metodo-passo-simples.html">Métodos de Passo Simples<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a>
                            <ul>
                            <li>
                                <a href="${pagePath}metodo-euler.html">Método de Euler<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a>
                                <ul>
                                <li><a href="${pagePath}metodo-euler-explicito.html">Método de Euler Explícito<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                <li>
                                    <a href="${pagePath}metodo-euler-implicito.html" >Método de Euler Implícito<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
                                    <ul>
                                        <li><a href="${pagePath}euler-implicito-analitico.html">Solução Analítica (caso linear)<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
                                        <li><a href="${pagePath}euler-implicito-iterativo.html">Métodos Iterativos<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
                                    </ul>
                                <li><a href="${pagePath}preditor-corretor-euler.html">Preditor-Corretor com Euler<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                </li>
                                </ul>
                            </li>
                            <li><a href="${pagePath}metodos-taylor.html">Métodos de Taylor<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
                            <li>
                                <a href="${pagePath}metodos-runge-kutta.html">Métodos de Runge-Kutta<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a>
                                <ul>
                                <li><a href="${pagePath}metodo-rk2-ex.html">RK Segunda Ordem Explícito<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
<!--
                                <li><a href="${pagePath}metodo-rk3.html">RK Terceira Ordem<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
-->                                
                                <li><a href="${pagePath}metodo-rk4-ex.html">RK Quarta Ordem Explícito<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                </ul>
                            </li>

                                <li>1º Aplicação Prática - Pêndulo
                                    <ul>
                                    <li><a href="${pagePath}pendulo-revisao-movimento-curvilineo.html">Movimento Curvilíneo<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                    <li><a href="${pagePath}pendulo-modelagem.html">Modelagem do Pêndulo<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                    <li><a href="${pagePath}pendulo-euler.html">Pêndulo com Método de Euler<span style="color: rgba(173, 161, 0, 1);"> (R)</span></a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li>Métodos de Passo Múltiplo
                            <ul>
                            <li>Métodos Explícitos
                                <ul>
                                <li><a href="${pagePath}adams-bashforth.html">Adams-Bashforth<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
<!--
                                <li>Nyström</li>
-->
                                </ul>
                            </li>
                            <li>Métodos Implícitos
                                <ul>
                                <li><a href="${pagePath}adams-moulton.html">Adams-Moulton<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
<!--
                                <li>Milne-Simpson</li>
                                <li>BDF (Backward Differentiation Formula)</li>
-->
                                </ul>
                            </li>
                            <li><a href="${pagePath}preditor-corretor-adams-bashforth-moulton.html">Preditor-Corretor com Adams-Bashforth e Adams-Moulton<span style="color: rgba(100, 0, 0, 1);"> (D)</span></a></li>
                            </ul>
                        </li>


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


// MENU HAMBURGUER E SIDEBAR FIXA

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


// ATIVA PÁGINA ATUAL NA SIDEBAR
function highlightActiveLink() {
  const links = document.querySelectorAll('.sidebar a');

  if (links.length === 0) {
    setTimeout(highlightActiveLink, 100); // tenta de novo
    return;
  }

  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.href.split("/").pop();

    if (linkPage === currentPage) {
        link.parentElement.classList.add("parent-active");

        const li = link.parentElement;

        const hr = document.createElement("hr");
        hr.classList.add("sidebar-underline");

        li.insertBefore(hr, link.nextSibling);
    }
  });
}

highlightActiveLink();