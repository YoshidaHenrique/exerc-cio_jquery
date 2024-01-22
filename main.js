$(document).ready(function (){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        if (tarefa) {
            const novoItem = $(`
                <li>
                    <a>• ${tarefa}</a> <span class="timestamp"></span>
                </li>
            `).appendTo('ul');

            novoItem.find('a').click(function() {
                $(this).toggleClass('concluida');
                if ($(this).hasClass('concluida') && !$(this).next('.timestamp').text()) {
                    const currentTime = new Date().toLocaleTimeString();
                    $(this).next('.timestamp').text(currentTime);
                }
            });

            $('#tarefa').val('');
        }
    });

    //adição de botão para exportar imagem
    $('#btnExportarImagem').click(function() {
        html2canvas(document.body, {
            backgroundColor: 'aliceblue', // Definindo explicitamente a cor de fundo
            height: window.innerHeight, // Certificando-se de que a altura da captura é pelo menos a altura da janela
        }).then(function(canvas) {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'minha_lista_de_tarefas.png';
            link.href = img;
            document.body.appendChild(link); // Adiciona o link ao corpo do documento
            link.click();
            document.body.removeChild(link); // Remove o link após o clique
        });
    });
});
