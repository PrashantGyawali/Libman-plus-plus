import { createContext, useContext, useEffect, useState } from "react";
// import data from './testdata.json'  For test bok data

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // const [allbooks,setallbooks]= useState(data); ---> For test books data

  let tempid = localStorage.currentid ? Number(localStorage.currentid) : 1;
  let draftsfromlocalstorage = localStorage.drafts
    ? JSON.parse(localStorage.drafts)
    : [];
  let booksfromlocalstorage = localStorage.books
    ? JSON.parse(localStorage.books)
    : [];
  let olddarkmode = localStorage.darkmode || false;

  const [alldrafts, setalldrafts] = useState(draftsfromlocalstorage);
  const [allbooks, setallbooks] = useState(booksfromlocalstorage);

  const [darkmode, setdarkmode] = useState(olddarkmode);

  const [currentid, setcurrentid] = useState(tempid);
  const [defaultvalue, setdefaultvalue] = useState(""); //for editing books

  useEffect(() => {
    const root = document.querySelector(":root");
    let theme = darkmode ? "dark" : "light";
    const setVariables = (vars) =>
      Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
    const themecolor = {
      dark: {
        "--btn-sec-bg-color": "rgb(90, 90, 90)",
        "--btn-sec-bg-color-hover": "rgb(80, 80, 80)",
        "--btn-sec-txt-color": "rgb(240, 240, 240)",
        "--btn-sec-txt-color-hover": "rgb(255, 255, 255)",
        "--btn-drk-bg-color": "rgb(0, 0, 0)",
        "--btn-drk-bg-color-hover": "rgb(22, 22, 22)",
        "--btn-drk-txt-color": "rgb(240, 240, 240)",
        "--btn-drk-txt-color-hover": "rgb(255, 255, 255)",
        "--bg-white": "rgb(0, 0, 0)",
        "--bg-light": "rgb(20, 20, 20)",
        "--bg-dark": "rgb(255, 255, 255)",
        "--txt-white": "rgb(0, 0, 0)",
        "--txt-light": "rgb(40, 40, 40)",
        "--txt-dark": "rgb(255, 255, 255)",
        "--txt-muted": "rgb(150, 150, 150)",
        "--txt-secondary": "rgb(156, 156, 156)",
      },
      light: {
        "--btn-sec-bg-color": "rgb(140, 140, 140)",
        "--btn-sec-bg-color-hover": "rgb(120, 120, 120)",
        "--btn-sec-txt-color": "rgb(240, 240, 240)",
        " --btn-sec-txt-color-hover": "rgb(255, 255, 255)",

        "--btn-drk-bg-color": "rgb(0, 77, 209)",
        "--btn-drk-bg-color-hover": "rgb(0, 64, 173)",
        "--btn-drk-txt-color": "rgb(240, 240, 240)",
        "--btn-drk-txt-color-hover": "rgb(255, 255, 255)",

        "--bg-white": "rgb(255, 255, 255)",
        "--bg-light": "rgb(223, 223, 223)",
        "--bg-dark": "rgb(45, 45, 45)",

        "--txt-white": "rgb(255, 255, 255)",
        "--txt-light": "rgb(227, 227, 227)",
        "--txt-dark": "rgb(51, 45, 45)",
        "--txt-muted": "rgb(199, 199, 199)",
        "--txt-secondary": "rgb(187, 187, 187)",
      },
    };
    setVariables(themecolor[`${theme}`]);
  }, [darkmode]);

  return (
    <BookContext.Provider
      value={{
        allbooks,
        setallbooks,
        alldrafts,
        setalldrafts,
        currentid,
        setcurrentid,
        defaultvalue,
        setdefaultvalue,
        darkmode,
        setdarkmode,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
