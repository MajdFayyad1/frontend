import React from 'react';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'


const Contact = () =>{
    const [state, setState] = useState({message : ''});

    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setState({...state, [name]: value});
    }

    const handleSubmit = e =>{
        alert(JSON.stringify(state));   
    }
    return(

        <div className='container'>
            <h3><strong>Contact-Us</strong></h3>
            <h3><strong>Lebanese International University</strong></h3>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <p className="text-gray-300"> 
                            Address : lebanon<br/>
                            Phone : +961-1-123456<br/>
                            Email : info@liu.edu.lb<br/>
                            <FacebookIcon/> : <a href=''>Facebook</a><br/>
                            <InstagramIcon/> : <a href=''>Instagram</a><br/>
                            Open : Monday-Thursday : 8:00 am - 5:00 pm<br/>
                            Closed : Friday - Saturday - Sunday
                        </p>
                    </div>

                    
                    
                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                       <h2 className="text-2xl font-semibold text-white mb-2"> Have a question? </h2>
                       <p className="text-gray-300"> 
                           Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                    </div>
                    
            </div>


            <form className='form'>

                <div className='row'>
                <label>Name : </label>
                <input className='col-6' 
                type='text' 
                name='name' 
                placeholder='Enter your name...' 
                onChange={handleChange}/>
                </div>

                <br/>
                <div className='row'>
                <label>Email : </label>
                <input className='col-6' 
                type='email' 
                name='email'
                placeholder='Enter your email...' 
                onChange={handleChange}></input>
                </div>

                <br/>

                <div className='row'>
                <label>message : </label>
                <input  
                rows='5'
                type='text' 
                name='message' 
                placeholder='Enter your message...'
                onChange={handleChange}></input>
                </div>
          
                
                <br/>
                <button onClick={handleSubmit} className='' >submit!</button>
            </form>
            <br/><br/>
        </div>
    );
}
export default Contact