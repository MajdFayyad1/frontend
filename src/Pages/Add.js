import React,{useState} from 'react';

function Add(){

    const [students,setStudents] = useState([]);
    const [stId,setStId] = useState(0);
    const [password,setPassword] = useState('');

const handleSubmit = (e) =>{
        e.preventDefault();

    if(
        stId.trim() !== 0 &&
        password.trim() !== ''
    ){

        students.push(
            {
                stId : stId,
                password : password,
            }
        );
}
    setStudents(students);
    setStId(0);
    setPassword('');
};


    return(
        <div className='container'>
            <h3><strong>Login page...</strong></h3>
            <br/>
            <form>
                <label>    ID : </label>
                <br/>
                <input type='number' 
                placeholder='Enter your Id...' 
                name='stId' 
                onChange={(e) => setStId(e.target.value)}>
                </input>
                <br/><br/>

                <label> Password  : </label>
                <br/>

                <input type='password' 
                placeholder='Enter your password...'
                name='password'
                onChange={(e) => setPassword(e.target.value)}>
                </input>
                <br/><br/>

                <button onClick={handleSubmit}>login</button>
            </form>


            <br/><br/>
             <table>
                <tr>
                    <thead>
                        <th>ID</th>
                        <th>password</th>
                    </thead>
                </tr>

                <tbody>
                    {students.map(student =>
                        <tr key={student.stId}>
                            <th>{student.stId}</th>
                            <th>{student.password}</th>
                        </tr>
                    )
                    }

                </tbody>
             </table>
            <br/><br/>

        </div>
        
    );
}
export default Add