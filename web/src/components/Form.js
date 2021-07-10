import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import {useState} from 'react';

function Form({
  photo,
  updateAvatar,
  onKeyUp,
  onClick,
  palette,
  name,
  job,
  email,
  github,
  linkedin,
  phone,
  handleCreatedCard,
  cardURL,
  status,
}) {
  const [active, setActive] = useState('design');

  return (
    <div className="main_card--fill">
      <Collapsable
        title="Diseña"
        icon="fal fa-object-ungroup icon"
        onClick={() => setActive('design')}
        active={active === 'design'}
      >
        <Design onClick={onClick} palette={palette} />
      </Collapsable>
      <Collapsable
        title="Rellena"
        icon="far fa-keyboard icon"
        onClick={() => setActive('fill')}
        active={active === 'fill'}
      >
        <Fill
          name={name}
          job={job}
          email={email}
          github={github}
          linkedin={linkedin}
          phone={phone}
          updateAvatar={updateAvatar}
          photo={photo}
          onKeyUp={onKeyUp}
        />
      </Collapsable>
      <Collapsable
        title="Comparte"
        icon="fas fa-share-alt icon"
        onClick={() => setActive('share')}
        active={active === 'share'}
      >
        <Share
          handleCreatedCard={handleCreatedCard}
          status={status}
          cardURL={cardURL}
        />
      </Collapsable>
    </div>
  );
}

export default Form;
