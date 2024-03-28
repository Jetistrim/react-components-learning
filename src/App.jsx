const BoasVindas = (props) => {
  return(
    <h1>Seja Bem Vindo(a) {props.nome} {props.genero && ` de gênero ${props.genero}`}</h1>
  )
}

const Card = ({titulo, texto, children}) => {
  return(
    <div>
      {children}
      <h5>{titulo}</h5>
      <p>{texto}</p>
    </div>
  )
}

const Lista = ({children}) => {
  return(
    <div style={{display: 'flex'}}>
      {children}
    </div>
  )
}

const App = () => {
  const alunos = [{nome:'Matheus', genero:'masculino'}, {nome:'Paulo', genero:'masculino'}, {nome:'Marcus', genero:'masculino'}, {nome: 'Luciana', genero:'feminino'}]
  return(
    <>
      {/* <BoasVindas />
      <BoasVindas nome="João" genero="Masculino" />
      <BoasVindas nome="Thiago"/>
      <BoasVindas nome="Isaac" genero="Masculino"/>
      {
        alunos.map(aluno => (
          <BoasVindas nome={aluno.nome} genero={aluno.genero}/>
        ))
      } */}
      <Lista>
      <Card titulo={'notícia 1'} texto={'Bataaaaaaaaaaaaaaaaaaaaaaaata'}>
        <img src="https://s2-g1.glbimg.com/OfamfA65a_5gdmX38kjc7Yu68Sc=/0x196:320x393/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/W/H/DhBMAwTmutuvPLaqdZJw/nazare.png" alt="Nazaré Calculando" />
      </Card>
      <Card titulo={'notícia 1'} texto={'Bataaaaaaaaaaaaaaaaaaaaaaaata'}>
        <img src="https://s2-g1.glbimg.com/OfamfA65a_5gdmX38kjc7Yu68Sc=/0x196:320x393/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/W/H/DhBMAwTmutuvPLaqdZJw/nazare.png" alt="Nazaré Calculando" />
      </Card>
      </Lista>
      
    </>
  );
}

export default App;