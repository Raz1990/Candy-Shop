import * as React from 'react';
import {product} from "../Interface/Interface";

//components imports

interface IProductProps {
    product: product,
    clickCallback: any,
    class?: string
}

class Product_Item extends React.Component<IProductProps,any> {
    constructor(props: IProductProps){
        super(props);

        this.state = {
        };
    }

    showProductInfo = () => {
        this.props.clickCallback(this.props.product);
    };

    public render() {
        return (
            <div className={this.props.class} id={this.props.product.id} onClick={this.showProductInfo}>
                {this.props.product.name}
            </div>
        );
    }
}

export default Product_Item;
