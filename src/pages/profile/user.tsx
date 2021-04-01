import Head from "next/head";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { Header } from "../../components/Header"

import styles from '../../styles/pages/profile/User.module.css';

export default function Profile() {
  const [name, setName] = useState('FeederPlace');
  const [email, setEmail] = useState('feeder@mail.com');
  const [contact, setContact] = useState('(49) 9 9937247');
  const [description, setDescription] = useState('O melhor lugar para pedir comida!');
  const [payment, setPayment] = useState('3');

  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | {name}</title>
      </Head>

      <Header
        text="Configurações de usuário."
      /> 

      <aside className={styles.card}>
        <img src="https://github.com/DevRadhy.png" alt="Profile Image"/>
        <strong>Lucas</strong>

        <main>{description}</main>

        <section>
          <button
            form="user-form"
            type="submit"
            className={styles['save-button']}
          >
            Salvar
          </button>

          <button
            type="button"
            className={styles['cancel-button']}
          >
            Cancelar
          </button>
        </section>

      </aside>

      <form id="user-form">
        <fieldset>
          <Input
            label="Nome"
            name="name"
            type="text"
            placeholder="ex: FeederPlace"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Mostre como os clientes chegam até vocẽ"
            name="contact"
            type="tel"
            placeholder="(00) 0 00000000"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <Textarea
            label="Mostre o porque você é especial"
            name="description"
            placeholder="Descrição de até 255 caracteres"
            minLength={32}
            maxLength={255}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Select
            label="Que tipo de pagamentos são aceitos"
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
            options={[
              { value: 0, label: 'Selectione um meio de pagamento' },
              { value: 1, label: 'Cartão' },
              { value: 2, label: 'Dinheiro' },
              { value: 3, label: 'Ambos' },
            ]}
          >
          </Select>
        </fieldset>
      </form>
    </div>
  );
}