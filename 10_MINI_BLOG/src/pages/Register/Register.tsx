import { useEffect, useState } from 'react';
import styles from './Register.module.css';
import { IUser } from '../../Interfaces/IUser';
import { useAuthentication } from '../../Hooks/useAuthentication';

const Register = () => {
    const [displayName, setDisplayName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [created, setCreated] = useState<boolean>(false);


    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setCreated(false);

        const user:IUser = {
            displayName,
            email,
            password
        };

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais.");
            return;
        }
        const res = await createUser(user);
        if(res) {
            setCreated(true);
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword(''); 
        }
    }

    useEffect(() => {        
        if (authError.length > 0) {
            setError(authError);
            return;
        }
    }, [authError])

    return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar.</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">
                <span>Nome:</span>
                <input
                    type="text"
                    id='displayName'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    placeholder='Nome de usuário.'
                />
            </label>
            <label htmlFor="email">
                <span>E-Mail:</span>
                <input
                    type="email"
                    id='email'
                    value={email}
                    autoComplete='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='E-Mail de usuário.'
                />
            </label>
            <label htmlFor="password">
                <span>Senha:</span>
                <input
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Informe uma senha.'
            />
            </label>  
            <label htmlFor="confirmPassword">
                <span>Confirme sua senha:</span>
                <input 
                    type="password"
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Confirme sua senha.'
                />
            </label>
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}

            {error && <p className='error'>{error}</p>}
            {created && <p className='success'>Usuário Criado com Sucesso</p>}
        </form>
    </div>
  );
}
export default Register