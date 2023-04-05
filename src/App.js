import "./App.scss";
import Addbookbtn from "./Addbookbtn.js";
import Addbookdiv from "./Addbook/Addbookdiv.js";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Booklistdiv from "./Booklist/booklistdiv";
import { useBook } from "./BookContext";

function App() {
  const [newbookadding, togglenewbookadding] = useState(false);
  const resetdefaultvalues = useBook().setdefaultvalue;
  let theme = useBook().darkmode;
  const setdarktheme = useBook().setdarkmode;

  const toggle = function () {
    function toggleandreset() {
      togglenewbookadding(false);
      resetdefaultvalues("");
    }
    newbookadding ? toggleandreset() : togglenewbookadding("new");
  };

  return (
    <>
      <div className="container-fluid p-3  text-center justify-content-center background-white">
        <motion.div
          onClick={() => {
            setdarktheme(!theme);
            localStorage.darkmode = theme;
          }}
          whileHover={{ scale: 1, backgroundColor: theme ? "white" : "black" }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: "pointer" }}
        >
          <div className="container-fluid background-light txt-dark text-center fixed-top">
            <div className="h1">Libman++</div>
          </div>
        </motion.div>
        <br />
        <br />

        <Addbookbtn
          togglefn={() => {
            toggle(newbookadding);
          }}
          open={newbookadding}
        />

        <AnimatePresence>
          {newbookadding && (
            <Addbookdiv
              togglenewbookadding={toggle}
              newbookadding={newbookadding}
            />
          )}
        </AnimatePresence>
      </div>
      <Booklistdiv
        newbookadding={newbookadding}
        togglenewbookadding={togglenewbookadding}
      />
    </>
  );
}

export default App;
