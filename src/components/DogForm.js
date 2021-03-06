import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {dogAct} from '../actions/dogAct';
//import {submitForm} from '../reducers/dogRed';

class DogForm extends React.Component{
    constructor(props){
        super(props);
        //fields for user reg form
        this.state = {
            dog: {
                lostFound: '',
                name: '',
                sex: '',
                breed: '',
                color: '',
                uniqMarks: '',
                location:''
            },
            submitted: true
            };

            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {dog} = this.state;

        this.setState({
            dog: {
                //nested object
                ...dog,
                [name]:value
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({submitted:true});
        const {dog} = this.state;
        const {dispatch} = this.props;

        if (dog.lostFound && dog.location) { 
               dispatch(dogAct.addDog(dog));
        }
    }

    render (){
        const {submittingForm} = this.props;
        const {dog} = this.state;
            return(
                <form name="dogForm" action="action_page.php" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>Lost / Found Dog Report</h1>
                        <p>Please fill in this form to report a lost or found dog.</p>
                        <hr />

                        <label htmlFor="lostFound"><b>Select Lost or Found:</b></label>
                        <br />
                        <div class="form-check">
                            <input type="checkbox" name="lostFound" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Lost</label><br />
                            <input type="checkbox" name="lostFound" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Found</label><br />
                        </div>
                        <br />
                        <label htmlFor="name"><b>Name: </b></label>
                        <input type="text" placeholder="Enter Dog's Name" name="name" className="form-control mb-4" value={dog.name} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="sex"><b>Sex:</b></label>
                        <div className="radio" onChange={this.handleChange}>
                            <label><input type="radio" name="sex" value={dog.sex}onChange={this.handleChange}/>Male</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="sex" value={dog.sex} onChange={this.handleChange}/>Female</label>
                        </div>
                        <div className="radio disabled">
                            <label><input type="radio" name="sex" value={dog.sex} onChange={this.handleChange}/>Unknown</label>
                        </div>
                        <br />
                        <label htmlFor="breed"><b>Breed: </b></label>
                        <br />
                        <input type="text" placeholder="" name="breed" className="form-control mb-4" value={dog.breed} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="color"><b>Color:</b></label>
                        <br />
                        <div class="form-check">
                            <input type="checkbox" name="color" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Black</label><br />
                            <input type="checkbox" name="color" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Brown</label><br />
                            <input type="checkbox" name="color" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">White</label><br />
                            <input type="checkbox" name="color" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Gray</label><br />
                            <input type="checkbox" name="color" className="form-check-input" id="defaultUnchecked" value={dog.color} onChange={this.handleChange} />
                            <label className="form-check-label" for="defaultUnchecked">Tan</label>
                        </div>
                        <br />
                        <label htmlFor="uniqMarks"><b>Description (solid/spotted, injured, collar...): </b></label>
                        <textarea type="text" placeholder="" name="uniqMarks" className="form-control rounded-0" value={dog.uniqMarks} onChange={this.handleChange} />
                        <label htmlFor="location"><b>Location: </b></label>
                        <input type="text" placeholder="" name="location" className="form-control mb-4" rows="4" value={dog.location} onChange={this.handleChange} />
                        
                        <br />
                        <hr />
                        
                        <button type="submit">Submit</button>
                        {submittingForm}
                     </div>

                    <hr />
                    <div className="logout"> 
                        <Link to="/login">Logout</Link>
                    </div>
                </form>
            
               );
             }
            
}

function mapStateToProps(state){
    const {submittingForm} = state.submitForm;
        return{
            submittingForm
           };
}

const connectedRegisterPage = connect(mapStateToProps)(DogForm);
export {connectedRegisterPage as DogForm};
    