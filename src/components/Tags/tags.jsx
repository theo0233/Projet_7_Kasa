import "../Tags/tags.css";

export default function Tags(tag) {
  return (
    <div className="tagDiv">
      <span> {tag.tag} </span>
    </div>
  );
}
