import { ChangeEvent, useRef, useState } from "react"

const ListRender = () => {
    const [valor, setValor] = useState('');    
    const [lista, setLista] = useState<string[]>([]);

    //! para fazer o foco voltar a imput
    const inputRef = useRef<HTMLInputElement>(null); // Referência para o input

    function mudaValor(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setValor(e.target.value);
    }
  
    function adicionaItem() {                
        if (valor.length > 0) {
            setLista(lista.concat(valor));
            setValor('');
            
            //! para fazer o foco voltar a imput
            if (inputRef.current) {
                inputRef.current.focus();
            }            
        }
    }

    function deleteRamdom() {
        const rand = Math.floor(Math.random() * lista.length);
        setLista(
            (preLista) => {
                return preLista.filter((_item, _indice) => _indice !== rand)
            }
        );
        //! talvez mais facil assim
        //setLista(lista.filter((_item, _indice) => _indice !== rand));
    }

    return (        
    <div>
        <h2>Minha Lista:</h2>
        <input 
            id="input" 
            type="text" 
            value={valor}
            
            ref={inputRef /* para fazer o foco voltar a imput*/} 
            onChange={mudaValor}/>
        <button onClick={adicionaItem}>Adiciona Item</button>
        <ul>
            {lista.map((item, indice) =>
                <li key={indice}>{item}</li>
            )}
        </ul>

        <button onClick={deleteRamdom}>Delete ramdom item</button>
    </div>
  )
}

export default ListRender