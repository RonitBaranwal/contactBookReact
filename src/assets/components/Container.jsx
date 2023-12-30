import React from "react";

const Container = ({children}) => {
    return (
        <>
            <section className="ListContainer column">
                <div
                    id="people"
                    className="Contact_list"
                >
                    {children}
            
                </div>
            </section>
        </>
    );
};

export default Container;
