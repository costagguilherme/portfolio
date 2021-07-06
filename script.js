$(document).ready(() => {
    
    function efeitoEscrever (elemento) {

        let textoElemento = elemento.innerHTML
        let textoArray = textoElemento.split('')
        elemento.innerHTML = ''

        textoArray.forEach(function (letra, index) {

            setTimeout(function() {

                elemento.innerHTML = elemento.innerHTML + letra

            }, 90 * index)

        });
    }

    let nome = document.getElementById('nome')
    efeitoEscrever(nome)
		
/*
    function slideProjetos (btn, elemento) {

        $(btn).on('click', () => {
            $(elemento).slideToggle('slow')
        })
    }

    let cont = 1
    while (cont <= 6) {

        let btn_num = '#btn' + cont
        let projeto_num = '#projeto' + cont
        slideProjetos(btn_num, projeto_num)
        cont = cont + 1
    }

    $('body').scroll( () => {

        console.log('Scroll')
    })


    if (refresh()) {
        window.location("index.html/#cabecalho")

    }
    

*/

})
