import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import GetAvatar from './GetAvatar';
import { useState } from 'react';


import '../scss/App.scss';

function App() {
  const [infoProject, setInfoProject] = useState({
    projectName: 'Elegant Workspace',
    slogan: 'Diseños Exclusivos',
    repo: '',
    demo: '',
    tech: 'React JS - HTML - CSS',
    descriptionTitle: 'Product description',
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
    vitae ratione`,
    name: 'Emmelie Bjôrklund',
    job: 'Full stack Developer',
    image: '',
  });
  const [avatar, setAvatar] = useState('');

  const changeAvatar = (avatar) => {
    setAvatar(avatar);
  };

  // const handleChangeForm = (id, value) => {
  //   setInfoProject({ ...infoProject, [id]: value });
  // };



  return (
    <>
      <div className='container'>
        <Header />
        
        <Main /*handleChangeForm= {handleChangeForm}*/ setInfoProject={setInfoProject} infoProject={infoProject} updateAvatar={changeAvatar} avatar={avatar} />

        <Footer />
      </div>
    </>
  );
}

export default App;
