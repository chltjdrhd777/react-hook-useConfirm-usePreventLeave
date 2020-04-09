/* eslint-disable no-restricted-globals */
import React from "react";
import { useConfirm } from "./factory/useConfirm";
import { preventEventer } from "./factory/usePreventLeave";

const App = () => {
  ////////////confirm/////////////////////////
  const getRidOf = () => console.log("it is successfully removed");
  const remain = () => console.log("good idea");
  const deleteMessage = useConfirm("Are you sure?", getRidOf, remain);
  ////////////////////////////////////////////

  ///////////usePreventLeave//////////////////
  const { enablePrevent, disablePrevent } = preventEventer();
  ///////////////////////////////////////////
  return (
    <div>
      <button onClick={deleteMessage}>Delete the world</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
