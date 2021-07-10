function Succes(props) {
  console.log(props.url);
  console.log(`https://twitter.com/intent/tweet?text=${props.url}`);

  return (
    <section className="cardCreated">
      <h3 className="cardCreated-title">La tarjeta ha sido creada:</h3>
      <a
        className="CardCreated-a js-link-card"
        target="_blank"
        href={props.url}
      >
        Aquí tienes tu tarjeta
      </a>

      <a
        className="CardCreated-a js-link-card"
        title="Twitter"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${props.url}`}
      >
        <button className="CardCreated_button js-twitter-link" type="button">
          <i className="fab fa-twitter icon"></i>
          <p className="twShare">Compartir en twitter</p>
        </button>
      </a>
    </section>
  );
}
export default Succes;
