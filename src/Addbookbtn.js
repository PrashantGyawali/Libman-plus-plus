import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

const Addbookbtn = (props) => {
  const openvalue = props.open;
  const toggle = () => {
    props.togglefn();
  };
  const Text = (e) => {
    if (!e.open) {
      return (
        <>
          <span style={{ fontSize: 27, fontWeight: 900 }}>+ </span> Add book
        </>
      );
    } else {
      if (e.open === "new") {
        return <span style={{ fontSize: 26, fontWeight: 600 }}> New book</span>;
      }
      if (e.open === "edit") {
        return (
          <span style={{ fontSize: 26, fontWeight: 600 }}> Editing book</span>
        );
      }
    }
  };

  return (
    <div className="container-fluid  text-center d-flex justify-content-center background-white">
      <div className="row justify-content-center container-fluid col-md-12 col-11 text-center mt-2 txt-light p-0 ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="col-md-9 col-lg-7 col-12 background-white p-0"
        >
          <Button
            onClick={toggle}
            className="btn-sec m-0  col-12 text-center"
            id="bookbtn"
            style={{ fontSize: 23 }}
          >
            {" "}
            <Text open={openvalue} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Addbookbtn;
