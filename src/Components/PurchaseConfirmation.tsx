import * as React from 'react';

import Modal from "./Modal";

interface IConfirmProps {
    price: number,
    submitCallback: any,
    cancelCallback: any
}

class PurchaseConfirmation extends React.Component<IConfirmProps,{}> {

    constructor(props: IConfirmProps){
        super(props);

        this.state = {
        };
    }

    public render() {
       return (
            <Modal style={styles.modal}>
                <div style={styles.divOfType}>
                    <span style={styles.p}>
                        <label style={styles.input} htmlFor="AddType">This will cost {this.props.price} shekels, are you sure?</label>
                    </span>
                </div>
                <div className={"buttonsWrapper"}>
                <button style={styles.button} onClick={this.props.submitCallback}>Yes</button>
                <button style={styles.cancelButton} onClick={this.props.cancelCallback}>Cancel</button>
                </div>
            </Modal>
        )
    }
}

export default PurchaseConfirmation;

const styles: { [key: string]: React.CSSProperties } = {
    modal: {
        minWidth: '25em'
    },
    p: {
        margin: "0 0 0.5em 0",
    },
    label: {
        display: "inline-block",
        marginBottom: ".5rem"
    },
    input: {
        display: "block",
        width: "100%",
        outline: 'none'
    },
    button: {
        background: '#86BB71',
        color: 'white',
        padding: '5px',
        marginRight: '10px',
        marginLeft: '10px'
    },
    div: {
        textAlign: 'center'
    }
};

styles.buttonDisabled = {
    ...styles.button,
    cursor: 'auto',
    background: '#DDDDDD',
    color: '#444753'
};

styles.cancelButton = {
    ...styles.button,
    cursor: 'auto',
    background: 'red',
    color: '#444753'
};
