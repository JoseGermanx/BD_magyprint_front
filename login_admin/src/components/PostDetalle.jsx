import "../css/detalle.css";

function PostDetalleImg({post}) {
  return (
    <strong>
    {post.image && (<img src={post.image.url} className="producto" id="producto-imagen" alt="Producto"/>)}
    </strong>

  )
}

export default PostDetalleImg