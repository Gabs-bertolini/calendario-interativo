function colorirDia()
{
    let day = document.getElementById('day').value;
    let color = document.getElementById('color').value;

    let calendar = document.getElementById('calendar');

    if(!day)
    {
        alert('Informe o dia!');
    }
    else if((day > 0) &&(day < 31))
    {
        let td = calendar.getElementsByTagName('td');

        td.style.backgroundColor = color;
    }
    else
    {
        alert('favor informar um dia valido para o calendario');
    }

    let elementos = document.querySelectorAll('td');

    //declara e inicializa os contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0,
    contadorRoxo = 0;

    //loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor
    for(let i = 0; elementos.length; i++)
    {
        var estilo = window.getComputedStyle('elementos'[i]);

        var corEstilo = estilo.backgroundColor;

        if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "LightBlue") 
        {
            contadorAzul++;
        }
        else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "PaleGreen")
        {
            contadorVerde++;
        }
        else if(corEstilo === "rgb(104, 16, 126)" || corEstilo === "SlateBlue")
        {   
            contadorRoxo++;
        }
        else if(corEstilo === "rgb(196, 26, 167)" || corEstilo ==="LightPink")
        {
            contadorRosa++;
        }
       
 
    }
}