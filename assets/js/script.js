    function multiplicar() {
        let nHtml = document.getElementById('num');
        let tela = document.getElementById('seltab');
        if (nHtml.value.length == 0) {
            alert('Por Favor, digite um número !');
        } else {
            let numero = Number(nHtml.value);
            let c = 1;
            tela.innerHTML = '';
            while(c <= 10){
                let item = document.createElement('option')
                item.text = `${c} x ${numero} = ${c * numero}`;
                tela.appendChild(item)
                c++
            }
        }
    }