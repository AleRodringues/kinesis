import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simular uma chamada de API para obter o produto
        const fetchProduct = async () => {
            const response = await new Promise((resolve) =>
                setTimeout(() => {
                    resolve({
                        id,
                        name: 'Produto Exemplo',
                        description: 'Descrição do produto',
                        price: 100,
                        stock: 10,
                        images: [
                            '/img/produto1.jpg',
                            '/img/produto2.jpg',
                            '/img/produto3.jpg',
                            '/img/produto4.jpg',
                        ],
                        category: 'Categoria Exemplo',
                    });
                }, 2000)
            );
            setProduct(response);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <Breadcrumb
                categories={[
                    { name: 'Home', path: '/' },
                    { name: 'Categoria Exemplo', path: `/category/${product.category}` },
                    { name: product.name, path: `/product/${product.id}` },
                ]}
            />
            <div className="product-detail">
                {/* Implementação dos detalhes do produto */}
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
