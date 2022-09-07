import './Logo.css';
import Logotype from '../../assets/img/logo.png';

function Logo() {
  return (
    <div className="Logo">
      <img src={Logotype} alt="logo" />
    </div>
  );
}

export default Logo;
