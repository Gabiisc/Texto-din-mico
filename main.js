function typeWriter(elemento, palavras, velocidadeEscrita = 100, velocidadeDelecao = 50, pausaEntrePalavras = 1000) {
    let palavraIndex = 0;
    let letraIndex = 0;
    let isDeleting = false;

    function escrever() {
        const palavraAtual = palavras[palavraIndex];
        const letrasVisiveis = isDeleting 
            ? palavraAtual.substring(0, letraIndex--) 
            : palavraAtual.substring(0, letraIndex++);

        // Apenas atualiza o conteúdo se houver mudanças
        if (elemento.innerHTML !== letrasVisiveis) {
            elemento.innerHTML = letrasVisiveis;
        }

        // Se terminou de digitar a palavra
        if (!isDeleting && letraIndex === palavraAtual.length) {
            setTimeout(() => isDeleting = true, pausaEntrePalavras);
        } 
        // Se terminou de apagar a palavra
        else if (isDeleting && letraIndex === 0) {
            isDeleting = false;
            palavraIndex = (palavraIndex + 1) % palavras.length;
        }

        // Define a velocidade de escrita ou deleção
        const delay = isDeleting ? velocidadeDelecao : velocidadeEscrita;
        setTimeout(escrever, delay);
    }

    escrever(); // Inicia a animação
}

const titulo = document.querySelector(".dynamic");
const palavras = ["Criatividade", "Interatividade", "Acessibilidade", "Desempenho"];
typeWriter(titulo, palavras);