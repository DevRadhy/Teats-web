import { FormEvent, useState } from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import Head from "next/head";

import styles from '../../styles/pages/form/Feeder.module.css';

export default function FeederForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [payment, setPayment] = useState('0');

  const [foods, setFoods] = useState([
    {
      name: '',
      price: '0',
      category: '0',
      description: '',
    }
  ]);

  function addNewFood() {
    setFoods([
      ...foods,
      {
        name: '',
        price: '0',
        category: '0',
        description: '',
      }
    ])
  }

  function setFoodItemValue(position: number, field: string, value: string) {
    const updateFoodItems = foods.map((food, index) => {
      if(index === position) {
        return { ...food, [field]: value }
      }

      return food;
    });

    setFoods(updateFoodItems);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(e.target);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | Feeder</title>
      </Head>

      <Header
        text="Obrigado por se juntar a nós e querer levar alegria em uma caixinha"
        smallText="Preencha o fomulário para continuar"
      />

      <form
        id="feeder-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <legend>Feeder</legend>
        <fieldset>
          <Input
            label="Nome"
            name="name"
            type="text"
            placeholder="Digite o nome comercial que você representa"
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
            label="Contato"
            name="contact"
            type="tel"
            placeholder="(00) 0 00000000"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <Textarea
            label="Descrição"
            name="description"
            placeholder="Descrição de até 255 caracteres"
            minLength={32}
            maxLength={255}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Select
            label="Pagamento"
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

        <legend>Foods</legend>
        <fieldset>
          <button
            type="button"
            onClick={addNewFood}
          >
            <img src="/icons/plus.svg" alt="Mais"/>
            Food
          </button>

          {foods.map((foodItem, index) => {
            return (
              <div
                key={index}
                className={styles.foodContainer}
              >
                <Input
                  label="Nome"
                  name="name"
                  type="text"
                  placeholder="O nome do produto"
                  value={foodItem.name}
                  onChange={(e) => setFoodItemValue(index, 'name', e.target.value)}
                  required
                />

                <Input
                  label="Image"
                  name="food-image"
                  type="url"
                  placeholder="https://"
                  value={foodItem.name}
                  onChange={(e) => setFoodItemValue(index, 'name', e.target.value)}
                  required
                />
      
                <section>
                  <Input
                    label="Preço"
                    name="price"
                    type="number"
                    value={foodItem.price}
                    onChange={(e) => setFoodItemValue(index, 'price', e.target.value)}
                    required
                  />
      
                  <Select
                    label="Categoria"
                    name="category"
                    value={foodItem.category}
                    onChange={(e) => setFoodItemValue(index, 'category', e.target.value)}
                    required
                    options={[
                      { value: 0, label: 'Selecione um categoria' },
                      { value: 1, label: 'Lanches' },
                      { value: 2, label: 'Porções' },
                      { value: 3, label: 'Sobremesas' },
                      { value: 4, label: 'Combos' },
                    ]}
                  />
                </section>
      
                <Textarea
                  label="Descrição"
                  name="description"
                  placeholder="Descrição do produto em até 255 caracteres"
                  minLength={32}
                  maxLength={255}
                  value={foodItem.description}
                  onChange={(e) => setFoodItemValue(index, 'description', e.target.value)}
                  required
                />
              </div>
            );
          })}

        </fieldset>

        <section className={styles.sendContainer}>
          <span>
            <img src="/icons/alert-sharp.svg" alt="Atenção"/>
            Quando você envia esse formulário você concorda com as politicas de privacidade e termos do app.
          </span>

          <button
            form="feeder-form"
            type="submit"
          >
            Enviar
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}