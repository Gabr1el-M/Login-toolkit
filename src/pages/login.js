import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "../store/inputSave";
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const dispatch = useDispatch();
    return (
        <div className="style">
            <form>
                Email:
                <input style={{ display: 'block' }}
                    type="text"
                    placeholder="Digite seu e-mail"
                    data-testid="email-input"
                    onChange={(e) => setEmail(e.target.value)}

                />
                <p></p>
                Senha:
                <input style={{ display: 'block' }}
                    type="password"
                    placeholder="Digite sua senha"
                    data-testid="password-input"
                    onChange={(e) => setSenha(e.target.value)}

                />
                <p></p>
                <Link to="/carteira">
                    <button
                        className="btn"
                        type="button"
                        onClick={() => dispatch(save({ email, senha }))}
                    >
                        Entrar
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Login;