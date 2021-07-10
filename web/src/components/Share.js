import Error from './Error';
import Succes from './Succes';

function Share(props) {
  return (
    <>
      <div
        className="sharecard js-buttoncreate"
        onClick={props.handleCreatedCard}
      >
        <i className="far fa-address-card cardicon"></i>
        <div className="btncreatecard">crear tarjeta</div>
      </div>
      {props.status === 'Me ha dado error' ? <Error /> : null}
      {props.status === 'Me ha dado ok' ? <Succes url={props.cardURL} /> : null}
    </>
  );
}

export default Share;
