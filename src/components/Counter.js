import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.addNum = React.createRef();
        this.decreaseNum = React.createRef();
        this.multiNum = React.createRef();
    }

    add = () => {
        const adder = this.addNum.current.value;
        if(adder === ""){
            alert("请先输入加数再操作！");
            return ;
        }
        const onIncrement = this.props.onIncrement;
        onIncrement(this.props.index, parseInt(adder));
        setTimeout(()=>{
            
        },1000);
    }

    addAsync = () => {
        const adder = this.addNum.current.value;
        if(adder === ""){
            alert("请先输入加数再操作！");
            return ;
        }
        const onIncrement = this.props.onIncrement;
        setTimeout(()=>{
            onIncrement(this.props.index, parseInt(adder));
        },1000);
    }

    decrease = () => {
        const decreaser = this.decreaseNum.current.value;
        if(decreaser === ""){
            alert("请先输入减数再操作！");
            return ;
        }
        const onDecrement = this.props.onDecrement;
        onDecrement(this.props.index, decreaser);
    }

    multiple = () => {
        const multiplier = this.multiNum.current.value;
        if(multiplier === ""){
            alert("请先输入乘数再操作！");
            return ;
        }
        const onMultiple = this.props.onMultiple;
        onMultiple(this.props.index, multiplier);
    }

    render() {
        const {value} = this.props;
        //console.log(onIncrement)
        return (
                <p>
                    Clicked: {value} times
                    {' '}
                    <input type="number" defaultValue={0} ref={this.addNum} placeholder="请输入加数"/>
                    <button onClick={this.add}> + </button>&nbsp;
                    <button onClick={this.addAsync}> addAsync </button>&nbsp;&nbsp;
                    <input type="number" defaultValue={0} ref={this.decreaseNum} placeholder="请输入减数"/>
                    <button onClick={this.decrease}> - </button>&nbsp;&nbsp;
                    <input type="number" defaultValue={0} ref={this.multiNum} placeholder="请输入乘数"/>
                    <button onClick={this.multiple}> * </button>
                </p>
        );
    }
}

export default Counter;
