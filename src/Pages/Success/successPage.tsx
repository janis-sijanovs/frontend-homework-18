import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';

const SuccessPage = () => {
  const language = useSelector((state: RootState) => state.language.currentLanguage);
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="heading heading--green">{language === 'eng' ? 'Purchase Successful!' : 'Veiksmīgs Pirkums!'}</h1>
      <button
        className="button button--green"
        onClick={() => navigate('/store')}
      >
        {language === 'eng' ? 'Keep Shopping' : 'Iepirkties Tālāk'}
      </button>
    </div>
  );
};

export default SuccessPage;
