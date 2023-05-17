//variaveis globais
//nome
const pkmName = document.querySelector('.pkm_name');
const pkmNumber = document.querySelector('.pkm_number');
const pkmImg = document.querySelector('.pokemon_img');
const pkmInput = document.querySelector('.form_shc');
const pkmShk = document.querySelector('.input_shc');
const pkmPBtt = document.querySelector('.btn_prev');
const pkmNBtt = document.querySelector('.btn_next');

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
    pkmName.innerHTML = 'Loading...';
    pkmNumber.innerHTML = '';
    //aqui pego todas as infos;
    const info = await fetchPkm(pkm);

    //para so mostrar dados se tiver informações
    if(info)
    {
        //nome e numero;
        //iremos pegar do info
        pkmName.innerHTML = info.name;
        pkmNumber.innerHTML = info.id;

        //para manter o numero
        numShk = info.id;
        
        // para a imagem temos que percorrer o caminho da imagem que queremos usar na Api
        pkmImg.style.display = 'block';
        pkmImg.src = info['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        pkmShk.value = "";

        console.log(info);
    }
    else
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

pkmPBtt.addEventListener('click', () => 
{
    if (numShk > 1)
    {
        numShk--;
        renderPkm(numShk);
    }
    else
    {

    }
});

pkmNBtt.addEventListener('click', () => 
{
    numShk++;
    renderPkm(numShk);
});

renderPkm(numShk);
