import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../productStore'

function Store() {
  return (
    <>
      <h1 className='p-3 text-center'>Welcome to the store!</h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((product, idx) => (
          <h1>{product.title}</h1>
        ))}
      </Row>
    </>
  )
}

export default Store