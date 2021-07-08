import { Link } from "react-router-dom";

export default function Post({
  id,
  title,
  description,
  date,
  image
}) {
  return (
    <div className="card mb-4">
        <a href="#!"><img className="card-img-top" src={image} alt="..." /></a>
        <div className="card-body">
            <div className="small text-muted">{date}</div>
            <h2 className="card-title h4">{title}</h2>
            <p className="card-text">{description}</p>
            <Link className="btn btn-primary" to={`/post/${id}`}>Read more →</Link>
        </div>
    </div>
  )
}