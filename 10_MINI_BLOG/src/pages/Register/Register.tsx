import { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
    const [displayName, setDisplayName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const user = {
            displayName,
            email,
            password
        };

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais.");
        }

        console.log(user);
    }

    return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar.</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">
                <span>Nome:</span>
                <input
                    type="text"
                    name='displayName'
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
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='E-Mail de usuário.'
                />
            </label>
            <label htmlFor="password">
                <span>Senha:</span>
                <input
                type="password"
                name='password'
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
                    name='confirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Confirme sua senha.'
                />
            </label>
            <button className="btn">Cadastrar</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  );
}
export default Register