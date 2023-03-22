import React from "react";
const Contact = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <form>
                <input type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input type="Email" name="Email" placeholder="Email"></input>
                <br></br>
                <textarea name="Message"  placeholder="Message"></textarea>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
export default Contact;