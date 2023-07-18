/*import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
  characters: [{
    name: 'Nat',
    email: 'nat@mail.com',
    },
    {
    name: 'João',
    email: 'joao@mail.com',
    },
    {
    name: 'José',
    email: 'jose@mail.com',
    },
    {
    name: 'Anna',
    email: 'anna@mail.com',
    },
    ],
  };
  
removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
    characters: characters.filter((character, i) =>
    {
    return i !== index
    }),
    })
    };
render() {
      const { characters } = this.state
      return (
      <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
      )}
      }

export default App;*/
import React from 'react';
import axios from "axios";
import useForm from './Hooks/useForm';

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [post, setPost] = React.useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const enviarContato = () => {
    
    axios
    .post(baseURL, {...useForm})
    .then((response) => {
      setPost(response.data);
    });
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Digite o título"
        />
        <input
          onChange={handleChange}
          type="text"
          name="body"
          placeholder="Digite o assunto"
        />        
        <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  );
};