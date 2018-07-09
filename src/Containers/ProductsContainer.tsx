import * as React from 'react';
import {product} from "../Interface/Interface";

//components imports
import Product_Item from "../Components/Product_Item";
import PurchaseConfirmation from "./../Components/PurchaseConfirmation";

interface IProductsProps {}

interface IProductsState {
    products: product[],
    modal: boolean
}

class Products extends React.Component<IProductsProps,IProductsState> {

    modalWindow = null;

    constructor(props: IProductsProps){
        super(props);


        this.state = {
            products: [],
            modal: false
        };
    }

    componentDidMount() {
        this.generateProductsList();
    }

    generateProductsList = () =>{
        /*server.api get product list*/
        let products: any = [{id: '123', name: 'Coke', amount: 10, price:6},
                             {id: '456', name: 'Fanta', amount: 5, price:5},
                             {id: '789', name: 'Soda', amount: 5, price:5},
                             {id: '159', name: 'Pepsi', amount: 5, price:5}];
        products = products.map((prod,idx) => {
            return (<Product_Item key={idx} product={prod} class={'product'} clickCallback={this.showModal}/>)
        });
        this.setState({
            products
        });
    };

    showModal = (product) => {
        this.modalWindow  =( <PurchaseConfirmation price={product.price} submitCallback={this.buy} cancelCallback={this.hideModal}/>);
        this.setState({modal:true});
    };

    hideModal = () => {
        this.modalWindow = null;
        this.setState({modal:false});
    };

    buy = () => {
        /*server.api lower inventory*/
        console.log('bought!');
        this.hideModal();
    };

    public render() {
        return (
            <div className={'ProductsArea'}>
                {this.state.products}

                {this.modalWindow ? this.modalWindow : <div/>}
            </div>
        );
    }
}

export default Products;
