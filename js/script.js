//variaveis globais
//componentes Html
const pkmName = document.querySelector('.pkm_name'); ///nome
const pkmNumber = document.querySelector('.pkm_number');// Numero
const pkmImg = document.querySelector('.pokemon_img');//imagem
const pkmInput = document.querySelector('.form_shc');// barra de busca nome digitado
const pkmShk = document.querySelector('.input_shc');// barra de busca 
const pkmPBtt = document.querySelector('.btn_prev');// botao proximo
const pkmNBtt = document.querySelector('.btn_next');// botao voltar
//esses coloquei por id
const pkmType1 = document.getElementById('pkm_type1');//tipo 1
const pkmType2 = document.getElementById('pkm_type2');// tipo 1
const card = document.getElementById('card');//cor da carta
const weight = document.getElementById('weight'); // peso;
const pkmSkl1 = document.getElementById('pkmSkl1');
const pkmSkl2 = document.getElementById('pkmSkl2');
//armazenando o numero inicial
let numShk = 1;


// para buscar o pkm uma constante
//se coloca  async para que essa função seja assincrona e possa usar o await
const fetchPkm = async (pkm) => 
{
    //buscar o site e completar pesquisa com o que for digitado no fecht
    // o uso do await faz com que essa linha so ative quando o pkm for definido
    // ao escrever o codigo usando '' ele falhou ja usando  `` ele progrediu
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`);

    // se der 200 ele acha o pkm
    if(APIResponse.status == 200)
    {
        //iremos pegar as informações da resposta do api em um arquivojson
        const infos = await APIResponse.json();

        //para poder usar as informações
        return infos;
    } 
}

//pegar dados e mostrar na tela
const renderPkm = async (pkm) =>
{
    /// durante a busca mostrar que esta procurando
    pkmName.innerHTML = 'Loading...';
    pkmNumber.innerHTML = '';
    pkmType1.innerHTML = '';
    pkmType2.innerHTML = '';
    pkmType1.style.background = "none";
    pkmType2.style.background = "none";
    weight.innerHTML = '';

    //aqui pego todas as infos;
    const info = await fetchPkm(pkm);

    //para so mostrar dados se tiver informações
    if(info)
    {
        //nome e numero;
        //iremos pegar do info
        pkmName.innerHTML = info.name;
        pkmNumber.innerHTML = info.id;
        weight.innerHTML = (info.weight + ' lbs.');

        const skill = info.abilities;

        if(skill.length === 2)
        {
            pkmSkl1.innerHTML = skill[0].ability.name;
            pkmSkl2.innerHTML = skill[1].ability.name;
        }
        else
        {
            pkmSkl1.innerHTML = skill[0].ability.name;
            pkmSkl2.innerHTML = "";
        }
        

        // pegar os tipos do pokemon e mostrar na tela
        const type = info.types;

        //precorre o array de tipos e armazena nos componentes
        if(type.length === 2)
        {
            pkmType1.innerHTML = type[0].type.name;
            pkmType2.innerHTML = type[1].type.name;

            //cor tipo 2
            switch(type[1].type.name)
            {
                case "grass":
                    pkmType2.style.backgroundColor = "#008000";
                    pkmType2.style.color = "#fff";
                    break;

                case "steel":
                    pkmType2.style.backgroundColor = "#B0C4DE";
                    pkmType2.style.color = "#000";
                    break;

                case "water":
                    pkmType2.style.backgroundColor = "#1E90FF";
                    pkmType2.style.color = "#fff";
                    break;
                
                case "dragon":
                    pkmType2.style.backgroundColor = "#4169E1";
                    pkmType2.style.color = "#000";
                    break;

                case "electric":
                    pkmType2.style.backgroundColor = "#FFFF00";
                    pkmType2.style.color = "#000";
                    break;

                case "fairy":
                    pkmType2.style.backgroundColor = "#FF69B4";
                    pkmType2.style.color = "#fff";
                    break;

                case "fire":
                    pkmType2.style.backgroundColor = "#FF4500";
                    pkmType2.style.color = "#fff";
                    break;

                case "ghost":
                    pkmType2.style.backgroundColor = "#4B0082";
                    pkmType2.style.color = "#fff";
                    break;

                case "ice":
                    pkmType2.style.backgroundColor = "#ADD8E6";
                    pkmType2.style.color = "#000";
                    break;
                
                case "bug":
                    pkmType2.style.backgroundColor = "#ADFF2F";
                    pkmType2.style.color = "#000";
                    break;

                case "fighting":
                    pkmType2.style.backgroundColor = "#FF0000";
                    pkmType2.style.color = "#fff";
                    break;

                case "normal":
                    pkmType2.style.backgroundColor = "#DCDCDC";
                    pkmType2.style.color = "#000";
                    break;

                case "rock":
                    pkmType2.style.backgroundColor = "#DAA520";
                    pkmType2.style.color = "#fff";
                    break;

                case "psychic":
                    pkmType2.style.backgroundColor = "#FF6347";
                    pkmType2.style.color = "#fff";
                    break;

                case "dark":
                    pkmType2.style.backgroundColor = "#1C1C1C";
                    pkmType2.style.color = "#fff";
                    break;
                
                case "ground":
                    pkmType2.style.backgroundColor = "#D2691E";
                    pkmType2.style.color = "#000";
                    break;

                case "poison":
                    pkmType2.style.backgroundColor = "#9400D3";
                    pkmType2.style.color = "#fff";
                    break;

                case "flying":
                    pkmType2.style.backgroundColor = "#87CEEB";
                    pkmType2.style.color = "#000";
                break;

                case "":
                    pkmType2.style.background = "none";
                break;

            }
        }
        else
        {
            pkmType1.innerHTML = type[0].type.name;
            pkmType2.innerHTML = "";
            pkmType2.style.background = "none";
        }

        //muda a cor tipo 1
        switch(type[0].type.name)
        {
            case "grass":
                pkmType1.style.backgroundColor = "#008000";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#556B2F";
                break;

            case "steel":
                pkmType1.style.backgroundColor = "#B0C4DE";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#5F9EA0";
                break;

            case "water":
                pkmType1.style.backgroundColor = "#1E90FF";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#20B2AA";
                break;
            
            case "dragon":
                pkmType1.style.backgroundColor = "#4169E1";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#008080";
                break;

            case "electric":
                pkmType1.style.backgroundColor = "#FFFF00";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#DAA520";
                break;

            case "fairy":
                pkmType1.style.backgroundColor = "#FF69B4";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#C71585";
                break;

            case "fire":
                pkmType1.style.backgroundColor = "#FF4500";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#FF8C00";
                break;

            case "ghost":
                pkmType1.style.backgroundColor = "#4B0082";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#8A2BE2";
                break;

            case "ice":
                pkmType1.style.backgroundColor = "#ADD8E6";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#00CED1";
                break;
            
            case "bug":
                pkmType1.style.backgroundColor = "#ADFF2F";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#9ACD32";
                break;

            case "fighting":
                pkmType1.style.backgroundColor = "#FF0000";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#B22222";
                break;

            case "normal":
                pkmType1.style.backgroundColor = "#DCDCDC";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#808080";
                break;

            case "rock":
                pkmType1.style.backgroundColor = "#DAA520";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#A0522D";
                break;

            case "psychic":
                pkmType1.style.backgroundColor = "#FF6347";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#FFA07A";
                break;

            case "dark":
                pkmType1.style.backgroundColor = "#1C1C1C";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#000";
                break;
            
            case "ground":
                pkmType1.style.backgroundColor = "#D2691E";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#CD853F";
                break;

            case "poison":
                pkmType1.style.backgroundColor = "#9400D3";
                pkmType1.style.color = "#fff";
                card.style.backgroundColor = "#8B008B";
                break;

            case "flying":
                pkmType1.style.backgroundColor = "#87CEEB";
                pkmType1.style.color = "#000";
                card.style.backgroundColor = "#7B68EE";
            break;
                
        }

        //para manter o numero na busca
        numShk = info.id;
        
    
        // para a imagem temos que percorrer o caminho da imagem que queremos usar na Api
        pkmImg.style.display = 'block';
        pkmImg.src = info['sprites']['front_default'];

        // apos busca apaga o que foi digitado
        pkmShk.value = "";

        console.log(info);
    }
    else // caso nao ache
    {
        pkmName.innerHTML = 'Not found !';
        pkmNumber.innerHTML = '??';
        pkmImg.style.display = 'none';
    } 
}

//pegando o que for digitado
pkmInput.addEventListener('submit', (event) => 
{
    event.preventDefault();
    console.log('formulario ' + pkmShk.value);
    renderPkm(pkmShk.value .toLowerCase());
});

//voltar
pkmPBtt.addEventListener('click', () => 
{
    if (numShk > 1)
    {
        numShk--;
        renderPkm(numShk);
    }
    else
    {
        console.log("do nothing..");
    }
});

//proximo
pkmNBtt.addEventListener('click', () => 
{
    numShk++;
    renderPkm(numShk);
});

renderPkm(numShk);


