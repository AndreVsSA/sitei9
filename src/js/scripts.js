particlesJS.load('particles-js', 'particles-config.json', function () {
    console.log('particles.js loaded - callback');
});

document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove a classe 'active' de todos os cards
            serviceCards.forEach(c => c.classList.remove('active'));
            // Adiciona a classe 'active' ao card clicado
            card.classList.add('active');
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:contato@qap.com.br?subject=Contato%20via%20Formulário&body=Nome:%20${name}%0AEmail:%20${email}%0ATelefone:%20${phone}%0AMensagem:%20${message}`;
    
    window.location.href = mailtoLink;
});
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceDescription = document.getElementById('service-description');
    const serviceDescriptionTitle = document.getElementById('service-description-title');
    const serviceDescriptionText = document.getElementById('service-description-text');


    const descriptions = {
        'marketing-card': 'Identidade visual\nLogomarcas\nCampanhas\nProtótipos',
        'development-card': 'Criação de websites\nAplicativos móveis\nSistemas personalizados\nAplicativos para Desktop\nMontagem e Configuração de Servidor\nMontagem e Manutenção de Computadores\nMontagem e Configuração de API e Banco de Dados Remoto\nCorreção de Sites\nImpressão 3D\nCriação de Modelo 3D Para Impressão',
        'events-card': 'Controle de Acesso\nCredenciamento\nGestão de convidados\nMarketing de eventos\nSuporte Técnico Especializado\nSegurança especializada\nReconhecimento Facial\nAlerta de Procurado pela Polícia\nAlerta de Perigo em Potencial'
    };
    
    // Função para carregar a descrição em um grid
    function loadDescription(cardId, title) {
        const descriptionContainer = document.querySelector('.service-description');
        const descriptionTitle = descriptionContainer.querySelector('.service-description-title');
        const descriptionContent = descriptionContainer.querySelector('.service-description-content');


        const buttonTest = document.getElementById("andreBtn");
        buttonTest.style.display = 'flex';

        const linkOptions = {
            "Marketing Digital": "/marketing.html",
            "Controle de Eventos": "/eventos.html",
            "Desenvolvimento": "/desenvolvimento.html"
        }
        buttonTest.setAttribute('href', linkOptions[title]);

    
        // Atualiza o título
        descriptionTitle.textContent = title;
    
        // Limpa o conteúdo existente
        descriptionContent.innerHTML = '';
    
        // Divide a descrição em itens e cria elementos para cada um
        const items = descriptions[cardId].split('\n');
        items.forEach(item => {
            const [itemTitle, itemDesc] = item.split(':');
            const itemElement = document.createElement('div');
            itemElement.classList.add('service-description-item');
    
            // Cria o título do item
            const itemTitleElement = document.createElement('h4');
            itemTitleElement.textContent = itemTitle.trim();
            itemElement.appendChild(itemTitleElement);
    
            // Cria a descrição do item
            const itemDescElement = document.createElement('p');
            itemDescElement.textContent = itemDesc ? itemDesc.trim() : '';
            itemElement.appendChild(itemDescElement);
    
            descriptionContent.appendChild(itemElement);
        });
    }
    
    // Exemplo de como chamar a função (você pode adaptar conforme necessário)
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            const cardTitle = card.querySelector('h3').textContent;
            loadDescription(cardId, cardTitle);
        });
    });

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            const cardTitle = card.querySelector('.service-title').textContent;
            serviceDescriptionTitle.textContent = cardTitle;
            serviceDescriptionText.innerHTML = descriptions[cardId].replace(/\n/g, '<br>');
            serviceDescription.style.display = 'block';
        });
    });
});
