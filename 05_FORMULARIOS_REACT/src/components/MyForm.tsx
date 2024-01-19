import { ChangeEvent, FormEvent, useState } from 'react';
import './MyForm.css';

interface Prop {
    _name: string,
    _email?: string

    _role?: string
}

const MyForm = ({_name, _email, _role} : Prop) => {
    {/*3 - gerenciamento de dados*/}
    const [name, setName] = useState<string>(_name ? _name : '');
    const [email, setEmail] = useState<string>(_email ? _email : '');
    const [bio, setBio] = useState<string>('');
    const [role, setRole] = useState<string>(_role ? _role : '');

    const selectableRoles:{key: string, description: string}[] = [
        {key: "user", description: "Usuário"},
        {key: "editor", description: "Editor"},
        {key: "admin", description: "Administrador"},
        {key: "audit", description: "Auditor"}
    ]
  
    /* 3.1 primeira forma de lidar com atualização de valor */
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    {/*4 - envio de form */}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* do something */

        /* 5 - limpar formulario */
        setName('');
        setEmail('');
        setBio('');
        setRole('');

    }

    return (
        <div>
            {/*4 - envio de form */}
            {/*1 - criaçaõ do form*/}
            <form onSubmit={handleSubmit}>
                <label htmlFor="meuName">Name: </label>
                <input 
                    type="text" 
                    name='meuName' 
                    value={name}
                    required
                    onInvalid={(e) => e.currentTarget.setCustomValidity('Por favor, preencha seu nome.')}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                    placeholder='"Digite seu Nome' 
                    onChange={handleName} /* 3.1 primeira forma de lidar com atualização de valor */
                />

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
                        onChange={(e) => setEmail(e.target.value)} /* 3.2 segunda forma de lidar com atualização de valor */
                    />
                </label>

                {/* 6 - textarea */}
                <label htmlFor="bio">Bio: </label>
                <textarea
                    name='bio'                     
                    value={bio}
                    required
                    cols={40}
                    rows={10}
                    maxLength={10}
                    //pra impedir q mudem o tamanho, somente via css
                    //disabled={true}
                    onInvalid={(e) => e.currentTarget.setCustomValidity('Por favor, preencha sua biografia.')}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                    placeholder='"Descrição da bio.' 
                    onChange={(e) => setBio(e.target.value)}
                ></textarea>  

                {/* 7 - select */}
                <div className='select'>
                    <label htmlFor="role">Função no sistema</label>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="">---</option> {/* para valores 'padrão', pode-se 'chumbar'*/}
                        { //para valores de array, usar map
                            selectableRoles.map((user, index) => (
                                <option key={index} value={user.key}>{user.description}</option>
                            ))
                        }
                    </select>
                    <input type="text" value={role} disabled/>
                </div>

                <input type="submit" value="Enviar" />
            </form>
        </div>
  )
}

export default MyForm
