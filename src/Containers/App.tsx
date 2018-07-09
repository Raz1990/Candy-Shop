import * as React from 'react';
import '../App.css';

//components imports
import Products from './ProductsContainer';

interface IAppProps {

}

class App extends React.Component<IAppProps,any> {
    constructor(props: IAppProps){
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <Products/>
        );
    }
}

export default App;
