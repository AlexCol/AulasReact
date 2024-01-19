import { ChangeEvent, FormEvent, useState } from 'react';
import './MyForm.css';

interface Prop {
    _name: string,
    _email?: string
}

const MyForm = ({_name, _email} : Prop) => {
    {/*3 - gerenciamento de dados*/}
    const [name, setName] = useState<string>(_name ? _name : '');
    const [email, setEmail] = useState<string>(_email ? _email : '');
  
    /* 3.1 primeira forma de lidar com atualização de valor */
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    {/*4 - envio de form */}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* do something */

        setName('');
        setEmail('');
        
    }

    return (
        <div>
            {/*4 - envio de form */}
            {/*1 - criaçaõ do form*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="meuName">Name: </label>
                    <input 
                        type="text" 
                        name='meuName' 
                        value={name}
                        required
                        onInvalid={(e) => e.currentTarget.setCustomValidity('Por favor, preencha seu nome.')}
                        onInput={(e) => e.currentTarget.setCustomValidity('')}
                        placeholder='"Digite seu Nome' 
                        onChange={handleName}/> {/* 3.1 primeira forma de lidar com atualização de valor */}
                </div>

                {/*2 - label envolvendo input (colocar o input text dentro da label, ai não precisa fo htmlFor*/}
                <label>
                    <span>E-Mail:</span>
                    <input 
                        type="text" 
                        name="email" 
                        value={email}
                        required
                        onInvalid={(e) => e.currentTarget.setCustomValidity('Por favor, preencha seu email, cara pálida.')}
                        onInput={(e) => e.currentTarget.setCustomValidity('')}
                        placeholder="Digite seu email." 
                        onChange={(e) => setEmail(e.target.value)} />{/* 3.2 segunda forma de lidar com atualização de valor */}
                </label>
                
                <input type="submit" value="Enviar" />
            </form>
        </div>
  )
}

export default MyForm
