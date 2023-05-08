import { useState } from 'react';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

function App() {
  const [list, setList] = useState([
    {
      image: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
      text: 'cat',
      id: 1
    },
    {
      image: 'https://www.m24.ru/b/d/nBkSUhL2hFIvns--JL6BrNOp2Z318Ji-mifCm-WR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=1rvPWcIj8uj6TKcUEXWwgQ.jpg',
      text: 'dog',
      id: 2
    }
  ])
  const [text, setText] = useState('aaaa')
  const [image, setImage] = useState('eee')

  function handleSubmit(event) {
    event.preventDefault()

    const post = {
      image,
      text,
      id: Date.now()
    }

    setList((prev) => [...prev, post])
    setText('')
    setImage('')
  }

  return (
    <>
      <main className="container my-5">
        <Form text={text} image={image} setText={setText} setImage={setImage} handleSubmit={handleSubmit} />
        <CardList posts={list} />
      </main>
    </>
  );
}

export default App;
