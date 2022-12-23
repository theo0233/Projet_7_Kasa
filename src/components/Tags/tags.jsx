const tagDiv = {
  marginLeft: "10px",
  borderRadius: "10px",
  backgroundColor: "#ff6060",
  padding: "2px 10px 0 10px",
  color: "white",
};

export default function Tags(tag) {
  console.log(tag);
  return (
    <div style={tagDiv}>
      <span> {tag.tag} </span>
    </div>
  );
}
