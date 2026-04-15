document.addEventListener('DOMContentLoaded', function() {
    // Detecta se está em um subdirectório
    const isInSubdir = window.location.pathname.includes('/pages/');
    const cssPath = isInSubdir ? '../css/' : 'css/';

    // Cria o conteúdo do head
    const headContent = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Programação Científica</title>
        <link rel="stylesheet" href="${cssPath}reset.css">
        <link rel="stylesheet" href="${cssPath}layout.css">
        <link rel="stylesheet" href="${cssPath}base.css">
        <link rel="stylesheet" href="${cssPath}header.css">
        <link rel="stylesheet" href="${cssPath}footer.css">
    `;

    document.head.insertAdjacentHTML('beforeend', headContent);
});
