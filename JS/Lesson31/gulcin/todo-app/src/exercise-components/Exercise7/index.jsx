export const Ex7 = () => {
    return( 
      <div>
        <p onClick={() => console.log('You clicked parent!')}>I am parent!! <span onClick={() => console.log('You clicked child!')}>I am child!!</span></p>
      </div>
    )
}