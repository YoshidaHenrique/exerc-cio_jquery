$(document).ready(function (){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novoItem = $(`
            <li>
                <a>• ${tarefa}</a>
            </li>
        `).appendTo('ul');
        
        novoItem.find('a').click(function() {
            $(this).toggleClass('concluida');
        });
        $('#tarefa').val('') //limpa a url no form apos dar o submit

    })
})

 