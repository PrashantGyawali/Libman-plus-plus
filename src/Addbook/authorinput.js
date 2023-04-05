import Container from "react-bootstrap/Container";
import { useBook } from "../BookContext";
import "../App.scss";

const Authorinputbtn = (props) => {
  let t = useBook()?.defaultvalue?.authors;

  return (
    <Container>
      <div
        className="text-right col-12 mb-1 ms-1 mt-1 txt-dark"
        style={{ textAlign: "left" }}
      >
        Authors:
      </div>
      <input
        className="form-control background-white txt-dark"
        onChange={(e) => props.updateformfn(e)}
        type="text"
        name="authors"
        id="authorsinput"
        placeholder="Author name"
        style={{ fontSize: 20, textAlign: "left" }}
        defaultValue={t && t}
        required
      />
    </Container>
  );
};

export default Authorinputbtn;
