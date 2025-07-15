function Movie(props) {
  console.log(props)
  const {mname} = props
  return ( 
    <h2>i like {mname}</h2>
   );
}

export default Movie;