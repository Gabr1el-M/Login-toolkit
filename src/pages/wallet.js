import React from "react";
import { useSelector } from "react-redux";

function Wallet() {
    const { email } = useSelector((state) => state);
    return (
        <div>
            <header data-testid="email-field">
                <h2>E-mail: {email}</h2>
            </header>
        </div>
    );
}

export default Wallet;