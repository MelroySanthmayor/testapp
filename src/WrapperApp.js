import React, { Component } from 'react';
import './App.css';
import { Button , ListGroup, ListGroupItem,Navbar,Nav,NavbarBrand,NavItem,NavLink,Container,Row,Col,Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import addItem  from './actions/item';
import addItemsReducer from './reducers/itemReducer';

let AddForm = props =>{
  const { handleSubmit } = props;
  return (<Form inline onSubmit={handleSubmit}>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    <Label for="exampleEmail" className="mr-sm-2">Product</Label>
    <Field className="input" name="product" component="input" type="text" placeholder="Enter name of Product"/>
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    <Label for="examplePassword" className="mr-sm-2">Qty</Label>
    <Field className="input" name="qty" component="input" type="number" placeholder="Enter the Quantity"/>
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    <Label for="examplePassword" className="mr-sm-2">Price</Label>
    <Field className="input" name="price" component="input" type="number" placeholder="Enter Price"/>
  </FormGroup>
  <Button>Submit</Button>
  </Form>);
}

AddForm = reduxForm({
  form: 'addItem'
})(AddForm);

class WrapperApp extends Component {
  state={
   "List":[1,2,3,4,5],
   "details": {
      "1": {
        "product": "Widget1",
        "qty": 10,
        "price": 11.23
      },
      "2": {
        "product": "Widget1",
        "qty": 2,
        "price": 21.23
      },
      "3": {
        "product": "Widget1",
        "qty": 3,
        "price": 31.23
      },
      "4": {
        "product": "Widget1",
        "qty": 4,
        "price": 41.23
      },
      "5": {
        "product": "Widget1",
        "qty": 5,
        "price": 51.23
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="#">ItemList</NavbarBrand>
        <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Components</NavLink>
              
              </NavItem>
              <NavItem>
                
                <Button outline color="danger">About Us</Button>
              </NavItem>
        </Nav>
        </Navbar>
        <AddForm onSubmit={this.handleSubmit.bind(this)}/>
        <Container>
          <Row>
            <Col><h3>Product</h3></Col>
            <Col><h3>Quantity</h3></Col>
            <Col><h3>Price</h3></Col>
            <Col><h3>Total</h3></Col>
          </Row>
        </Container>
        <ul>
          {console.log(this.props)}
          <ListGroup>
          {Object.keys(this.props.addItemsReducer.details).map((item,i)=>(
            <ListGroupItem className='Li' key={i}>
              <Container>
                <Row>
                  <Col>{this.props.addItemsReducer.details[item].product}</Col>
                  <Col>{this.props.addItemsReducer.details[item].qty}</Col>
                  <Col>{this.props.addItemsReducer.details[item].price}</Col>
                  <Col>{`${eval(`${this.props.addItemsReducer.details[item].qty} * ${this.props.addItemsReducer.details[item].price}`).toFixed(2)} `}</Col>
                
                </Row>
              </Container></ListGroupItem>
          ))}
          </ListGroup>
        </ul>
        <Total item={this.props.addItemsReducer.details}/>
      </div>
    );
  }
  handleSubmit = (values)=>{
  
    this.props.addItem(values)

  }
}
const mapStateToProps=({addItemsReducer})=>{
  return {
    addItemsReducer
  }
};
const mapDispatchToProps =(dispatch)=>{
  return {
    addItem:(newitem)=>
      dispatch(addItem(newitem))
    
  }
};

/*const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};*/
let total;
const Total = ({ item }) => (
  
  <h5>
    Grand Total:
    {/*Object.keys(item).map((itm, i) => (
      <h3>{sum+=eval(item[itm].price* item[itm].qty)}</h3>
    
    ))*/}
    {total = Object.values(item).reduce((t, n) => t + (n.price*n.qty), 0)}

  </h5>
)

//export default WrapperApp;
export default connect(mapStateToProps, mapDispatchToProps)(WrapperApp); 