// import  Button from 'react-bootstrap/Button';
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import Selecttags from "./selecttags";
import Authorinputbtn from "./authorinput";
import Booknameinput from "./booknameinput";
import ImageSelect from "./imageselect";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.scss";
import { useBook } from "../BookContext";

const Addbookdiv = (props) => {
  const {
    allbooks: books,
    setallbooks: setbooks,
    alldrafts: drafts,
    setalldrafts: setdrafts,
    currentid,
    setcurrentid,
    defaultvalue: defaultvalues,
  } = useBook();

  //Basically Setting up default values that was set up in useBook context
  let t_bookname = useBook()?.defaultvalue?.bookname || "";
  let t_url = useBook()?.defaultvalue?.url || "";
  let t_authors = useBook()?.defaultvalue?.authors || "";
  let t_published = useBook()?.defaultvalue?.published || 2023;
  let t_desc = useBook()?.defaultvalue?.description || "";
  let t_tags = useBook()?.defaultvalue?.tags || [];

  const [Coverlink, setCoverlink] = useState(t_url);

  //Setting up the ref that stores the current data in the inputs, this data is modified whenever the input is changed
  let formdata = useRef({
    bookname: t_bookname,
    authors: t_authors,
    tags: t_tags,
    description: t_desc,
    url: t_url,
    published: t_published,
    updated: "",
  });

  //This is the function that modifies most of the ref data on input change
  function updateformfunc(e) {
    let m = e.target.name;
    formdata.current[`${m}`] = e.target.value;
  }

  // Tags are updated in the same ref but since it uses react-select library, and its value is in form of array of objects
  //it has different behaviour for onchange, soI decided to updating is done separately
  function updatetags(o) {
    formdata.current[`tags`] = o;
  }

  //Just some logic to make sure date published is not greater than current year (cannot add unpubished books :|  )  and not too old books (sorry ancient scriptures)
  //Also update the form values
  const dateonchange = (e) => {
    if (
      Number(e.target.value) > Number(e.target.max) ||
      Number(e.target.value) < Number(e.target.min)
    ) {
      e.target.value = 2023;
    } else {
      updateformfunc(e);
    }
  };

  //Animation, self explanatory
  const divanimation = {
    key: "addbookbtn",
    initial: { y: "100%", opacity: 0, scaleY: 0 },
    animate: { y: 0, opacity: 1, scaleY: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
    exit: { y: "100%", opacity: 0, scaleY: 0, transition: { duration: 0.3 } },
  };

  //adding the book on submit
  const submitfn = (e) => {
    e.preventDefault();

    //if editing the book (since book when editing inherits the 'id' default value, we can use it to find if being edited or new book )
    //dont forget to remove book from drafts when added/changes saved
    if (defaultvalues.id) {
      let temp = [...books];
      let drafttemp = [...drafts];
      if (temp) {
        let temp2 = temp.filter(
          (e) => Number(e.id) !== Number(defaultvalues.id)
        );
        let drafttemp2 = drafttemp.filter(
          (e) => Number(e.id) !== Number(defaultvalues.id)
        );

        let up = new Date()
          .toLocaleString("sv-SE")
          .slice(0, 19)
          .replaceAll("-", "/");
        temp2.unshift({
          ...formdata.current,
          id: defaultvalues.id,
          updated: up,
        });
        setbooks(temp2);
        setdrafts(drafttemp2);

        localStorage.books = JSON.stringify(temp2);
        localStorage.drafts = JSON.stringify(drafttemp2);
      }
    }

    //if creating a new book
    else {
      let temp = [...books];
      let tempid = currentid;
      let up = new Date()
        .toLocaleString("sv-SE")
        .slice(0, 19)
        .replaceAll("-", "/");
      temp.unshift({ ...formdata.current, id: tempid, updated: up });
      //make sure to increase teh id for the next book
      setcurrentid(currentid + 1);
      localStorage.currentid = currentid;
      //update the book list
      setbooks(temp);
      localStorage.books = JSON.stringify(temp);
    }
    props.togglenewbookadding();
  };

  //close without saving draft or anything
  const cancel = () => {
    props.togglenewbookadding();
  };

  //Logic for deleting the book
  const deletebook = () => {
    //Filter the books list and create new list not comtaining the deleted book (Allows deleting books)
    let booktemp = books.filter(
      (e) => Number(e.id) !== Number(defaultvalues.id)
    );
    setbooks(booktemp);
    localStorage.books = JSON.stringify(booktemp);

    //Filter the drafts list and create new list not comtaining the deleted draft(Allows deleting drafts)
    let drafttemp = drafts.filter(
      (e) => Number(e.id) !== Number(defaultvalues.id)
    );
    setdrafts(drafttemp);
    localStorage.drafts = JSON.stringify(drafttemp);

    props.togglenewbookadding(); //close the input field
  };

  //Logic for closing and saving as draft the book
  const close = () => {
    if (formdata.current.bookname) {
      //Save as draft if the user gives the name of the book
      let up = new Date()
        .toLocaleString("sv-SE")
        .slice(0, 19)
        .replaceAll("-", "/");
      let temp = [...drafts];
      let tempid = currentid;

      //check if the id of the book is already present in the drafts, if present then update the draft, if not then create a new one
      let test = temp.findIndex(
        (e) => Number(e.id) === Number(defaultvalues.id)
      );
      if (Number(test) !== Number(-1)) {
        temp.splice(test, 1);
        temp.unshift({
          ...formdata.current,
          id: defaultvalues.id,
          updated: up,
        });
        setdrafts(temp);
        localStorage.drafts = JSON.stringify(temp);
        localStorage.currentid = tempid;
      } else {
        temp.unshift({ ...formdata.current, id: tempid, updated: up });
        tempid++;
        localStorage.drafts = JSON.stringify(temp);
        localStorage.currentid = tempid;
        setcurrentid(tempid);
        setdrafts(temp);
      }
    }
    props.togglenewbookadding(); //closes the input field
  };

  return (
    <motion.div {...divanimation}>
      <Form
        onSubmit={(e) => {
          submitfn(e);
        }}
      >
        <div className="container px-0 p-0  background-white  justify-self-center addbookdivscale">
          <div className="row justify-content-center background-white">
            <ImageSelect
              setCoverlink={setCoverlink}
              updateformfunc={updateformfunc}
              Coverlink={Coverlink}
            />

            <div
              className="col-lg-7 col-md-9 col-12 p-0 d-flex flex-column background-light"
              style={{
                border: "3px solid black",
                borderRadius: "0px 15px 15px 0px ",
              }}
            >
              <div>
                <div className="container text-center h2 txt-dark">
                  Book Info
                  <Button className="d-inline float-end mt-1" onClick={close}>
                    X
                  </Button>
                </div>

                <Booknameinput updateformfn={updateformfunc} />

                <Authorinputbtn updateformfn={updateformfunc} />

                <Container>
                  <Selecttags updatefn={updatetags} />
                </Container>

                <Container>
                  <div
                    className="col-12 mb-1 ms-1 txt-dark"
                    style={{ textAlign: "left" }}
                  >
                    Date published:
                  </div>
                  <input
                    type="number"
                    required
                    className="w-100 form-control background-white txt-dark"
                    name="published"
                    id=""
                    defaultValue={t_published}
                    min="0"
                    max="2023"
                    onChange={(e) => {
                      dateonchange(e);
                    }}
                    style={{ textAlign: "left", fontSize: 19 }}
                  />
                </Container>

                <Container>
                  <div
                    className="col-12 mb-1 ms-1 txt-dark"
                    style={{ textAlign: "left" }}
                  >
                    Description:
                  </div>
                  <Form.Control
                    className="background-white txt-dark"
                    as="textarea"
                    name="description"
                    rows={6}
                    onChange={(e) => updateformfunc(e)}
                    style={{ textAlign: "left", resize: "none" }}
                    defaultValue={t_desc}
                    required
                  />
                </Container>
              </div>

              <div
                className="container h-100"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  {defaultvalues && (
                    <button
                      className="btn btn-dark"
                      style={{ fontSize: 25, margin: 7 }}
                      onClick={deletebook}
                    >
                      Delete
                    </button>
                  )}
                  <Button
                    variant="danger"
                    style={{ fontSize: 25, margin: 7 }}
                    onClick={cancel}
                  >
                    Cancel
                  </Button>
                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ fontSize: 25, margin: 7 }}
                  >
                    {defaultvalues ? "Save Book" : "Add Book"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </motion.div>
  );
};

export default Addbookdiv;
