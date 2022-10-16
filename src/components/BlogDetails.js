import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    if(window.confirm("Are You Sure To Delete?"))
    {
      fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
      }).then(() => {
      history.push('/');
     }) 
    }
    
  }
  const handleEdit = () => {
    history.push(`/edit/${blog.id}`);
};
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <br />
          <p>Written by { blog.author }</p>
          <br />
          <img style={{height: '300px'}} src={blog.imageUrl} alt="..." />
          <div>{ blog.body }</div>
          <div className="btn">
            <br />
            <button style={{float:'left'}} onClick={handleEdit}>Edit</button>
            <button style={{float:'right'}} onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;