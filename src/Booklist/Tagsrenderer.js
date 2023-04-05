export default function Tagsrender(props) {
  const taglist = [];
  if (props["tags"]) {
    props["tags"].forEach((e) => {
      taglist.push(e.value);
    });

    return (
      <>
        {taglist.map((tag, i) => {
          let x = i === taglist.length - 1 ? "" : ", ";
          return (
            <>
              <a href="http://localhost:3000/" className="txt-dark" key={i}>
                {tag}
              </a>
              {x}
            </>
          );
        })}
      </>
    );
  }
}
