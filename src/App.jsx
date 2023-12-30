import { useState } from "react";
import "./App.css";
import Fields from "./assets/components/Fields";
import Container from "./assets/components/Container";

function App() {
    const [allContacts, setAllContacts] = useState([]);
    console.log(allContacts)
    return (
        <>
            {/* <Header >Welcome to contactBook</Header> */}
            <Container>
                {allContacts.length > 0 ? (
                    allContacts.map((contact) => (
                        <article
                            className="person"
                            key={contact.id}
                        >
                            <img src={contact.url} />
                            <div className="contactdetail">
                                <div className="contactdetail">
                                    <h1>
                                        <i
                                            className="fas fa-user-circle contactIcon"
                                            aria-hidden="true"
                                        ></i>
                                        {contact.nameValue}
                                    </h1>
                                    <p>
                                        
                                        <i
                                            className="fas fa-envelope contactIcon"
                                            aria-hidden="true"
                                        ></i>
                                        {contact.email}
                                    </p>
                                    <p>
                                        <i
                                            className="fas fa-phone-alt contactIcon"
                                            aria-hidden="true"
                                        ></i>
                                        {contact.number}
                                    </p>
                                </div>
                                <button className="delete-contact js-delete-contact">
                                    
                                </button>

                                {/* Other contact information */}
                                
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="text-black">
                        No contacts to show {console.log("hello world")}
                    </div>
                )}
            </Container>
            <Fields
                initData={allContacts}
                setInitData={setAllContacts}
            ></Fields>
        </>
    );
}

export default App;
