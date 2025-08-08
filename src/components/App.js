import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

import Header from './Header.js';
import Footer from './Footer.js';

import '../styles/App.css';

export default function App() {
  return (


    <div className='body'>

      <head>
        <title>Tech Hackers</title>
        <link rel="icon" href={Logo} alt="Logo do site"/>
      </head>

      <Header />

      <main className='main-home'>
        <div className="content">
          <div className="conteudo-titulo">
            <div className="titulo">
              <h1>Segurança Online: Você Sabe Mesmo Como Se Proteger?</h1>
            </div>
          </div>
          <div className="conteudo-dados">
            <div className="frases">
              <p>
                Em um mundo cada vez mais digital, a proteção de seus dados pessoais é uma prioridade, e garantir a segurança da informação nas organizações sociais significa que você pode continuar a confiar no serviço oferecido, sabendo que suas informações estão sendo tratadas com o máximo de cuidado.
              </p>
              <p>
                Os golpes digitais estão se tornando cada vez mais sofisticados, e muitos tentam se disfarçar de ações legítimas de organizações sociais, enganando pessoas inocentes a fornecerem informações pessoais e financeiras. Seja por e-mails, mensagens ou sites falsos, os criminosos cibernéticos tentam enganar você para roubar dados importantes. Para se proteger, é fundamental verificar sempre a origem de qualquer comunicação que solicite dados sensíveis e nunca clicar em links suspeitos.
              </p>
            </div>
          </div>
          <div className="conteudo-dados">
            <div className="frases">
              <p>
                A segurança da informação não é apenas uma prática técnica, mas uma questão de respeito e responsabilidade com você, nosso usuário. Ao interagir com organizações sociais, muitas vezes você está fornecendo dados sensíveis, como suas preferências pessoais, informações de contato ou até mesmo detalhes financeiros. Por isso, estamos querendo saber o quanto esses dados.
              </p>
              <p>
                A segurança da informação é muito importante, pois todos estamos cada vez mais expostos a riscos no mundo digital. O objetivo deste quiz é entender o quanto os usuários comuns sabem sobre golpes, invasões e como proteger seus dados pessoais online. Com tantas atividades acontecendo pela internet, como compras e serviços bancários, as pessoas se tornam alvos fáceis para criminosos digitais. Por isso, é essencial aprender sobre como se proteger desses riscos. Esse é o intuito do nosso quiz.
              </p>
            </div>
          </div>
          <div className="conteudo-dados">
            <div className="frases">
              <p>
                Em um ambiente digital em constante evolução, onde novas ameaças surgem a todo momento e os criminosos utilizam estratégias cada vez mais complexas para enganar os usuários, é fundamental que todos estejam atentos, buscando conhecimento e adotando práticas seguras que garantam não apenas a proteção de seus próprios dados, mas também a integridade das relações que mantêm com organizações sociais e serviços digitais em geral.
              </p>
              <p>
                Ao criar este quiz, nosso objetivo vai além de apenas avaliar o quanto você sabe sobre segurança digital: queremos oferecer uma oportunidade de aprendizado, reflexão e conscientização sobre os perigos reais que existem na internet, reforçando a importância de práticas simples, porém eficazes, como desconfiar de mensagens suspeitas, utilizar senhas seguras e manter seus dispositivos sempre atualizados.
              </p>
            </div>
          </div>
          <div className="conteudo-dados">
            <div className="frases">
              <p>
                Ao navegar pela internet, é importante estar atento não apenas ao que você acessa, mas também a como suas informações podem ser utilizadas por terceiros, muitas vezes sem o seu conhecimento. <br />A educação digital é uma ferramenta poderosa na prevenção de fraudes, pois quanto mais você entende o funcionamento do ambiente online, mais preparado está para identificar riscos e agir com segurança.
              </p>
            </div>
          </div>
          <div className="conteudo-dados">
            <div className="frases">
              <p>Caso queira saber mais, leia as informações dos sites abaixo. Você também tem a liberdade de pesquisar sobre o tema.</p>
              <Link className='linkedin'
                to="https://b10sec.com/br/importancia-da-conscientizacao-do-usuario-em-seguranca-cibernetica/">
                1º Link - Gov.br <br /><br /></Link>
              <Link className='linkedin'
                to="https://www.fecomercio.com.br/noticia/saiba-como-se-proteger-de-golpes-virtuais">
                2º Link - fecomercio.com.br <br /><br /></Link>
              <Link className='linkedin'
                to="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd">
                3º Link - b10sec.com.br <br /><br /></Link>
              <Link className='linkedin'
                to="https://www.gov.br/anatel/pt-br/assuntos/dicas-contra-fraudes">
                4º Link - Gov.br <br /><br /></Link>
              <Link className='linkedin'
                to="https://www.docusign.com/pt-br/blog/seguranca-da-informacao">
                5º Link - docusign.com</Link>
            </div>
          </div>
          <div className="espaco-botao">
            <Link className="btn-inicial" to="/quiz">Iniciar o Quiz</Link>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}