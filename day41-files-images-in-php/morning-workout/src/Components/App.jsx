import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductList from './ProductList.jsx';
import Search from './Search.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div id="main">
                <Search />
                <ProductList />
                </div>
                <Footer />
            </div>
        )
    }
}