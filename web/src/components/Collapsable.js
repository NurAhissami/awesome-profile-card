function Collapsable(props) {
  const classActive = `design js-section ${props.active && 'active'}`;
  return (
    <section className={classActive} onClick={props.onClick}>
      <div className="title_wrapper ">
        <div className="title_wrapper--text">
          <i className={props.icon}></i>
          <h2 className="title">{props.title}</h2>
        </div>
        <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
      </div>

      <div className="collapsible ">{props.children}</div>
    </section>
  );
}

export default Collapsable;
