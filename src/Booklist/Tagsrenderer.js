export default function Tags(props){

    const taglist= [];
    props['tags'].forEach((e)=>{taglist.push(e.value)});
    
    return (
        <>
            {taglist.map((tag,i)=>
                {
                    let x= i===(taglist.length-1)?'':', ';
                    return (
                    <>
                    <a href='http://localhost:3000/'>{tag}</a>{x}</>
                    );
                }
            )}
        </>
    );
}