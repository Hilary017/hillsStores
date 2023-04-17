import PaystackPop from '@paystack/inline-js'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';

import classes from "./PayStack.module.css"

const PayStack = (props) => {
    const ctx = useContext(CartContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [disable, setDisable] = useState(true)

    const changeDisableHandler = () => {
        if(firstName === "" || 
            firstName.length < 2 ||
            lastName === "" || 
            lastName.length < 2 ||
            email.length < 2 ||
            email === ""){
            setDisable(true)
        } else {
            setDisable(false)
        }
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
        changeDisableHandler();
    }

    const firstChangeHandler = (e) => {
        setFirstName(e.target.value)
        changeDisableHandler();
    }

    const lastChangeHandler = (e) => {
        setLastName(e.target.value)
        changeDisableHandler();
    }

    const navigatePage = () => {
        navigate('/', {replace: true});
    }

    const payWithPaystack = (event) => {
        event.preventDefault(); 
        changeDisableHandler();
        const payStack = new PaystackPop();

        if(firstName === "" || lastName === "" || email === "") {
            alert("Please fill out the required information");
            return;
        }
        payStack.newTransaction({
            key: "pk_test_513da27a425b9b63696d1dbe020fad8fc6a08c7a",
            email: email,
            amount: props.amount * 100 * 450,
            firstName: firstName,
            lastName: lastName, 
            onSuccess(transaction){
                let message = `Payment Complete Reference ${transaction.reference}`
                alert(message);
                setEmail('');
                setFirstName('');
                setLastName('');
                ctx.reset();
                navigatePage();
            },
            onCancel() {
                alert("Transaction cancelled successfully");
                // ctx.items = []
            }
        })
    }

    return <form id="paymentForm" className={classes.payment}>
            <div className={`form-group ${classes.control}`}>
                <label htmlFor="email">Email Address</label>
                <input type="email" value={email} onChange={emailChangeHandler} onClick={emailChangeHandler} onBlur={emailChangeHandler} id="email-address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="amount">Amount</label>
                <input type="tel" value={props.amount * 450} id="amount" />
                <p className={classes.convert__text}>Amount is converted to naira @ 450/$</p>
            </div>
            <div className={classes.control}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" value={firstName} onChange={firstChangeHandler} onClick={firstChangeHandler} onBlur={firstChangeHandler} id="first-name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" value={lastName} onChange={lastChangeHandler} onClick={lastChangeHandler} onBlur={lastChangeHandler} id="last-name" />
            </div>
            <div className={classes.confirmOrder}>
                <button type="submit" onClick={props.onCancel} className={classes.cancelBtn}>Cancel</button>
                <button type="submit" disabled={disable} onClick={payWithPaystack} className={classes.confirmBtn}>Proceed</button>
            </div>
        </form>
}

export default PayStack;