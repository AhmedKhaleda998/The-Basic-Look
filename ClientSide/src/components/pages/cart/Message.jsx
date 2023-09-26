import React from "react";

const Message = (props) => {
  const { message } = props;
  return (
    <section>
      <p className="text-danger text-center fw-bold vh-100">{message}</p>
    </section>
  );
};

export default Message;
