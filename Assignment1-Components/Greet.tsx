type GreetProps = {
    list:{
      first: string
      last: string
    }[]
    }
    
    const Greet = (props: GreetProps) => {
      return (
        <div>
          {props.list.map((obj) => {
              return (
            <h1 key={obj.first}>
              Welcome {obj.first} {obj.last}
            </h1>
              )
          })}
        </div>
      );
    };
    
    export default Greet;
    