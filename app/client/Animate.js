import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';
class Animate extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
    }
    handleAdd() {
        const newItems = this.state.items.concat([prompt('Enter some text')]);
        this.setState({ items: newItems });
    }
    handleRemove(i) {
        const newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }
    render() {
        const items = this.state.items.map(function(item, i) {
            return ( 
                <div key = { item }
                onClick = { this.handleRemove.bind(this, i) }> 
                        { item } 
                </div>
            );
        }.bind(this));
        return ( 
            <div>
                <button onClick = {this.handleAdd.bind(this)} >Add Item</button> 
                <ReactCSSTransitionGroup transitionName="example">{items}</ReactCSSTransitionGroup>
            </div>
        );
    }


}
export default Animate;