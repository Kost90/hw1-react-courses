import React from "react";

function Input({ change }) {
  const HandelChange = (e) => {
    e.preventDefault();
    change(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="write some text"
          onChange={HandelChange}
        />
      </form>
    </div>
  );
}

export default Input;
