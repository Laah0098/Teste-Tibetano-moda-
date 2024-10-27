function calculateResult() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    
    // Contadores para cada letra
    let counts = { A: 0, B: 0, C: 0, D: 0 };
  
    // Itera pelas respostas e conta cada letra escolhida
    for (let i = 1; i <= 5; i++) {
      const answer = form[`q${i}`].value;
      if (answer) {
        counts[answer]++;
      }
    }
  
    // Determina a resposta com o maior número de escolhas
    const highestCount = Math.max(counts.A, counts.B, counts.C, counts.D);
    let resultText = '';
  
    if (highestCount === counts.A) {
      resultText = 'Você tem uma personalidade elegante e refinada, valorizando a discrição e o equilíbrio. Seu estilo é clássico e você transmite uma presença calma e confiante.';
    } else if (highestCount === counts.B) {
      resultText = 'Você é prática e valoriza o conforto e a funcionalidade no seu dia a dia. Seu estilo é descontraído e seu foco é aproveitar os pequenos prazeres da vida.';
    } else if (highestCount === counts.C) {
      resultText = 'Você é energética e está sempre pronta para novas aventuras. Gosta de se manter ativa e prioriza roupas e acessórios que acompanhem seu ritmo dinâmico.';
    } else if (highestCount === counts.D) {
      resultText = 'Você é ousada e autêntica, ama se destacar e tem um estilo único. Busca ser quem realmente é, sem medo do julgamento dos outros.';
    }
  
    // Exibe o resultado
    resultDiv.innerHTML = `<p>${resultText}</p>`;
  }
  