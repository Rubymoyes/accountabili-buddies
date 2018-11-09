import React from 'react'

import Home from './Home'
// import { setFlagsFromString } from 'v8';

const makeForm = {
    email: '',
    password: '',
}

class Forms extends React.Component {
  constructor (props) {
    super (props)
    
    this.state = {
      
      errors: {
        isRequired: 'This must be an email address'
      },
      
      address: {...makeForm},
      
      validation: {
        email: ['isRequired']
      },
      
      validators: {
        isRequired: email => val && val.length
        
        // How do we put the email thingy here?
        // We need to check if the email has a @ in it
        
        
      }
    }
    
    this.signUp = this.signUp.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }
  
  componentWillReceiveProps ({editItem}) {
    if (editItem) {
      this.setState({item: editItem})
    }
  }
  
  signUp (evt) {
    this.setState({
      item: {
        ...this.state.item,
        [evt.target.email]: evt.target.value
      }
    })
  }
  
  formSubmit (evt) {
    if (this.validate()) {
      this.props.saveItem(this.state.item)
      this.resetForm()
    }
    evt.preventDefault()
  }
  
  
  // UNsure if this works...
  
  resetForm (evt) {
    this.setState({
      item: {...defaultState},
      invalid: {}
    })
    evt && evt.preventDefault()
  }
  
  
  // Copied and pasted from here 
  
  validate () {
    const invalid = {...this.state.invalid}
    for (const field in this.state.item) {
      const validators = this.state.validation[field] || []
      validators.forEach(v => {
        if (!this.state.validators[v](this.state.item[field])) {
          invalid[field] = this.state.errors[v]
        } else {
          delete invalid[field]
          
        }
      })
    }
    this.setState({invalid})
    return !Object.keys(invalid).length
  }
  
  
  
  
  
  
  
  
  // Render and return
  
  render () {
    return (
      // <Home />
      <div>
      <div className="landingpagebg" id="bigThing">
      <div className="header topPart" />
      
      <h2>Log in</h2>
      
      <form onSubmit={this.formSubmit}>
      <fieldset>
      <legend>Log in:</legend>
      <p>Email address:</p>
      <input type="text" name="Email"s />
      <br />
      <p>Password:</p>
      <input type="password" name="Password"  />
      <br />
      <br />
      <input type="submit" />
      </fieldset>
      </form>
      
      <h2>Sign up</h2>
      
      {/* // not sure what the action section relates to */}
      <form method="post">
      <fieldset>
      <legend>Sign Up:</legend>
      <p>Email address:</p>
      <input type="text" name="Email" />
      <br />
      <p>Password:</p>
      <input type="password" name="Password" />
      <br />
      <br />
      <p>Repeat Password:</p>
      <input type="password" name="Password" />
      <br />
      <br />
      <input type="submit" />
      </fieldset>
      </form>
      <div className="footer bottomPart">
      <p>Bobbi, Ruby, Joan and Brandon 2018 </p>
      </div>
      </div>
      </div>
      
      )
    }
    
  }
  
  export default Forms