
async function thecatAPI(valor){
    try{
        const catsAPI = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const catsAPIConvertido = await catsAPI.json();
        console.log(catsAPIConvertido)
        const catimg = document.querySelectorAll('.catimg')
        for(valor = 0; valor < catimg.length; valor++){
            catimg[valor].src = `${catsAPIConvertido[valor].url}`
            console.log(catimg[valor])
        }
    }
    catch (erro){
        console.log(erro)
    }
}

thecatAPI();


