document.addEventListener('DOMContentLoaded', function() {  
    setupScrollToSection();  
    setupMenuToggle();  
    setupBudgetFormSubmission();  
});  

// Configura a rolagem suave para a seção especificada  
function setupScrollToSection() {  
    const heroButton = document.getElementById('hero-button');  
    if (heroButton) {  
        heroButton.addEventListener('click', function(event) {  
            event.preventDefault(); // Previne o comportamento padrão do botão  
            scrollToSection('how-it-works'); // Chama a função de rolagem suave  
        });  
    }  
}

// Função para rolar suavemente até a seção  
function scrollToSection(sectionId) {  
    const section = document.getElementById(sectionId);  
    if (section) {  
        section.scrollIntoView({ behavior: 'smooth' });  
    }  
}  

// Configura a abertura e fechamento do menu  
function setupMenuToggle() {  
    const menuToggle = document.getElementById('menu-toggle');  
    if (menuToggle) {  
        menuToggle.addEventListener('click', function() {  
            const menu = document.getElementById('nav-menu');  
            menu.classList.toggle('active');  
        });  
    }  
}  

// Configura o envio do formulário de orçamento  
function setupBudgetFormSubmission() {  
    const budgetForm = document.getElementById('budget-form');  
    if (budgetForm) {  
        budgetForm.addEventListener('submit', function(event) {  
            event.preventDefault(); // Impede o envio normal do formulário  
            const formData = new FormData(this); // Cria um objeto FormData com os dados do formulário  
            
            // Validação simples (ajuste conforme necessário)  
            if (!formData.get('name')) { // Substitua 'name' pelo nome do campo apropriado  
                alert("Por favor, preencha seu nome.");  
                return;  
            }  

            sendFormData(formData); // Envia os dados do formulário  
        });  
    }  
}  

// Função para enviar os dados do formulário  
function sendFormData(formData) {  
    fetch('https://formspree.io/f/exc.exelencia@gmail.com', {  
        method: 'POST',  
        body: formData,  
        headers: {  
            'Accept': 'application/json'  
        }  
    })  
    .then(response => {  
        if (!response.ok) {  
            throw new Error('Erro na rede ao enviar o formulário.');  
        }  
        return response.json();  
    })  
    .then(data => {  
        console.log(data);  
        alert("Formulário enviado com sucesso!"); // Feedback de sucesso  
    })  
    .catch(error => {  
        console.error(error);  
        alert("Erro ao enviar o formulário."); // Feedback de erro  
    });  
}