function Host(props) {
  return (
    <div className="host">
      <div className="hostName">{props.name}</div>
      <div className="hostPicture">
        <img src={props.picture} alt={props.id} />
      </div>
    </div>
  );
}
export default Host;
