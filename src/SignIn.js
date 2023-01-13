import React from 'react'
import './SignIn.css'

function SignIn() {
    
    return (
        <div className="login">
            <a href="/"><img className="login_logo" src="https://tse4.mm.bing.net/th?id=OIP.9b898XacZO5lO1QL93HKsQHaC5&pid=Api&P=0" alt="sign in" /></a>
            <div className="login_container">
               <div className='heading'>
               <h2>It's a delight to have you onboard</h2>
               <p>Help us know you better.<br></br>(This is how we optimize Wobot as per your business needs)</p>
               </div>
                <form>
                    <h5>Company Name</h5>
                    <input type="email" placeholder='eg. Example.Inc'/>
                    <h5>Industry</h5>
                    <div>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle dropdown_menu" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <h5 className='comp_size'>Company size</h5>
                    <div className='company_size'>
                        <div>1-20</div>
                        <div>21-50</div>
                        <div className='example_div'>51-200</div>
                        <div>201-500</div>
                        <div>500+</div>
                    </div>
                    <button type="submit" className="login_signInButton">Get Started</button>
                </form>
          </div>

          <p className='box_down'>
            Terms of use | Privacy Policy
          </p>
        </div>
    )
}

export default SignIn