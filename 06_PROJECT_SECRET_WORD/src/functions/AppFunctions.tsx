interface WordsData {
    [key: string]: string[];
}

export const pickWordAndCCategory = (words:WordsData) => {
    const categories = Object.keys(words);
    const choosedCatIndex = Math.floor(Math.random() * categories.length)
    const category = categories[choosedCatIndex];
    
    const catWords = words[category];
    const chosedWordIndex = Math.floor(Math.random() * catWords.length);
    const word = catWords[chosedWordIndex];

    //create an array of letters
    let workNoaccentuation = retira_acentos(word);
    let letters = workNoaccentuation.toLocaleLowerCase().split("");
    console.log(letters);

    return {letters, word, category};
}

export function retira_acentos(palavra: string) 
{
    const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕÇç";
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyrCc";
    
    let novaPalavra= "";
    for(let letra = 0; letra<palavra.length; letra++) {
        let troca = false;
        
        for (let letraComAcento=0; letraComAcento < com_acento.length; letraComAcento++) {
            if (palavra.substring(letra)[0] === com_acento.substring(letraComAcento)[0]) {                
                novaPalavra+=sem_acento.substring(letraComAcento)[0];
                troca=true;                
                break;
            }
        }
        if (troca==false) {
            novaPalavra += palavra.substring(letra)[0];
        }
    }
    return novaPalavra;
}   