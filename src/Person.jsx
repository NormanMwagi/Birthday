
const Person = ({image,name,age}) => {
  return (
    <article className='person'>
       <img
        src={image}
        alt={name}
        className='img'
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </article>
  )
}

export default Person
