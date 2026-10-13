import "./ProductCard.css";

function ProductCard({produtct}){
    return(
        <article className = "product-card">
            <img
            className = "product-img"
            src={ProductCard.thumbnail}
            alt = {ProductCard.title}
            />

            <div className = "product-info">
                <h2 className = "product-title">{ProductCard.title}</h2>
                <span
                className="product-category">
                    {ProductCard.category}
                </span>

                <p className = "product-price">
                    R$ {product.price.toFixed(2)}
                </p>

                <span className = "product-rating">
                    Avaliação: {product.rating}/5
                </span>

                <button className = "btn">
                    Ver detalhes
                </button>
            </div>
        </article>
    );
}

export default ProductCard