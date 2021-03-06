import React, {Component} from 'react';
import axios from 'axios';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import  { Carousel, CarouselInner, CarouselItem, View } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../index.css';
import '../images/findfido.jpg';

 

class Home extends Component {
    constructor(props){
        super(props);
        //set state
        this.state = {
            modal: false,
            title: '',
            description: '',
            homepage: []
        };
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    componentDidMount(){
        //get data from url
        axios.get('http://localhost:8080/api/home')
        .then((res) => {
            console.log(res);
            //pull title and description from JSON data
                this.setState({
                    title: res.data[0].title,
                    description: res.data[0].description,
                });
            console.log(this.state.title);
            //error catch
            }).catch((err) => {
                console.log(err)
            })
    }
    //HTML to render on page
    render(){
        return (
            <div className="container">
              <div className="blue-gradient color-block mb-3 mx-auto z-depth-1">
              <div className="row">
                <div className="col-md-6">
                   <div className="logo">
                      <img src={require('../images/findfido.jpg')} className="img-fluid z-depth-5" alt="FindingFido" />
                    </div>
                  </div>
                <div className="col-md-6">
                  <div className="headline">
                    <h1>FidoFinder {this.state.title}</h1>
                    <p>An online community of dog owners helping dog owners find their lost pets {this.state.description}</p>
                  </div>
                <div className="navButtons">
                      <div className="dropdown">
                        <Dropdown>
                        <DropdownToggle caret color="green lighten-1">
                        Let's Get Started
                        </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem href="/login">Login</DropdownItem>
                            <DropdownItem href="/register">Create Account</DropdownItem>
                            <DropdownItem href="/addDog">Submit a Lost Dog</DropdownItem>
                            <DropdownItem href="/getDog">Search for a Lost Dog(coming soon)</DropdownItem>
                            <DropdownItem href="/getUser">Search for User(coming soon)</DropdownItem>
                            <DropdownItem href="#">Message Board</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div>
                          <Container>
                          <Button color="btn btn-yellow" onClick={this.toggle}>What We Do</Button>
                          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Bringing your Buddy home!</ModalHeader>
                            <ModalBody>
                            <Container>
                        <Carousel
                        activeItem={1}
                        length={4}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1">
                        <CarouselInner>
                          <CarouselItem itemId="1">
                            <View>
                              <img className="d-block w-100" src="http://fidouniverse.com/wp-content/uploads/2014/07/Lost-dog-poster.jpg" width="300px" height="300px" alt="First slide"/>
                            </View>
                          </CarouselItem>
                          <CarouselItem itemId="2">
                            <View>
                              <img className="d-block w-100" src="https://cdn.iflscience.com/images/920c090c-ffa7-5487-b469-c9bb583eff11/default-1492607454-cover-image.jpg" width="300px" height="300px" alt="Second slide" />
                            </View>
                          </CarouselItem>
                          <CarouselItem itemId="3">
                            <View>
                              <img className="d-block w-100" src="https://researchdigest.files.wordpress.com/2016/02/f50cd-thinkstockphotos-151557041.jpg" width="300px" height="300px" alt="Third slide" />
                            </View>
                          </CarouselItem>
                          <CarouselItem itemId="4">
                            <View>
                              <img className="d-block w-100" src="https://static1.squarespace.com/static/55e48783e4b0b05d86d82227/t/5ab80f4688251b198c444a03/1522012010725/IMG_2489.JPG?format=1500w"width="300px" height="300px" alt="Mattonit's item" />
                            </View>
                          </CarouselItem>
                        </CarouselInner>
                      </Carousel>
                    </Container>
                            </ModalBody>
                            <ModalFooter>
                              <Button background-color="btn btn-yellow" onClick={this.toggle}>Close</Button>{' '}
                            </ModalFooter>
                          </Modal>
                        </Container>
                    </div>
                  </div>
                </div>
                </div>
               </div> 
              </div>
        )
    }
}


export default Home;