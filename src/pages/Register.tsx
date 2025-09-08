import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import twitchLogo from '../assets/react.svg'; // Replace with actual Twitch logo path if available

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    cpf: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  const leftPanel = (
    <>
      <img src={twitchLogo} alt="Twitch Logo" style={{ width: 80, marginBottom: 20 }} />
      <h3>React.tv</h3>
      <Button text="Entrar" className="btn btn-outline-light mt-3 px-4" />
    </>
  );

  const rightPanel = (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-1">Crie sua conta</h2>
      <p className="text-muted mb-4">Preencha seus dados</p>

      <InputField
        label="Nome Completo"
        placeholder="Insira o seu nome"
        name="nomeCompleto"
        value={formData.nomeCompleto}
        onChange={handleChange}
      />

      <div className="d-flex align-items-center justify-content-start gap-3 input-group-container">
        <InputField
          label="Telefone"
          placeholder="Insira o seu telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <InputField
          label="CPF"
          placeholder="Insira o seu CPF"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex gap-3 input-group-container">
        <InputField
          label="E-mail"
          placeholder="Insira o seu e-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Confirmar E-mail"
          placeholder="Confirme o e-mail"
          name="confirmarEmail"
          type="email"
          value={formData.confirmarEmail}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex gap-3 input-group-container">
        <InputField
          label="Senha"
          placeholder="Insira a sua senha"
          name="senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
        />
        <InputField
          label="Confirmar senha"
          placeholder="Confirme a senha"
          name="confirmarSenha"
          type="password"
          value={formData.confirmarSenha}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 mb-2">
        <Button text="Cadastrar" type="submit" />
      </div>

      <div className="mt-1">
        <LinkText text="Já tem uma conta?" linkText="Fazer login" href="#" />
      </div>
    </form>
  );

  return <Layout leftPanel={leftPanel} rightPanel={rightPanel} />;
};

export default Register;
