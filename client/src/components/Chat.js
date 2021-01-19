import React from "react";
import Footer from "./UI/organisms/Footer";
import Dialog from "./UI/organisms/Dialog";
import Header from "./UI/organisms/Header";

const Chat = () => {

  return (
    <div className="chat">
      <Header />
      <Dialog />
      <Footer />
    </div>
  );
};

export default Chat;