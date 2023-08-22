import "../css/detalle.css";

function PostDetalleImg({post}) {
  return (
    <div>
    {post.image && (<img src={post.image.url} className="producto" id="producto-imagen" alt="Producto"/>)}
    </div>

  )
}

export default PostDetalleImg