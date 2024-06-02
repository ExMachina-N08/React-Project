const Card = (props) => {
  return (
    <>
      <div
        className="card w-25 col m-3 rounded-4
      "
      >
        <img
          className="mx-auto img-fluid p-3 bg-light "
          style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }}
          src={props.image}
          // width={150}
          // height={150}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p className="card-text">#00{props.Key}</p>
          <div>{props.Types}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
