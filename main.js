$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        if (tarefa) {
            const horarioCriacao = new Date().toLocaleTimeString();
            const novoItem = $(`
                <li class="tarefa-item">
                    <a class="tarefa-texto">${tarefa}</a>
                    <span class="horario horarioCriacao">${horarioCriacao}</span>
                    <span class="horario timestamp"></span>
                </li>
            `).appendTo('ul');

            novoItem.find('a').click(function() {
                $(this).toggleClass('concluida');
                if ($(this).hasClass('concluida') && !$(this).siblings('.timestamp').text()) {
                    const currentTime = new Date().toLocaleTimeString();
                    $(this).siblings('.timestamp').text(currentTime);
                }
            });

            $('#tarefa').val('');
        }
    });

    $('#btnExportarImagem').click(function() {
        // Rola para o topo da página antes de capturar a imagem
        window.scrollTo(0, 0);

        html2canvas(document.body, {
            backgroundColor: 'aliceblue',
            scale: 1, // Ajuste a escala conforme necessário
            windowHeight: document.documentElement.offsetHeight,
            windowWidth: document.documentElement.scrollWidth,
            x: 0,
            y: window.pageYOffset,
            scrollX: 0,
            scrollY: -window.scrollY
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'lista_de_tarefas.png';
            link.href = imgData;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch(err => {
            console.error('Ocorreu um erro ao exportar a lista de tarefas:', err);
        });
    });
});

