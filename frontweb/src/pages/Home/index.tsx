import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { getTokenData, isAuthenticated } from '../../util/requests';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">

      <h1>{isAuthenticated() ? 'autenticado' : 'Não autenticado'}</h1>

      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1> Conheça o melhor catalogo de produtos</h1>
            <p>Ajudaremos voce a encontrar os melhores produtos do mercado</p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie sua sessão aqui"/>
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
