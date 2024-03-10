import { ChangeEvent, useState } from "react";
import'./LoginPage.css';
import { FaRegUserCircle, FaLock } from "react-icons/fa";


type LoginPageProps = {
    text:string
}
const LoginPage =() => {
const onSubmit = () => {
    console.log("submit");
}
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
     setEmail (e.target.value);
    console.log('email', setEmail); 
}
const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword (e.target.value);
    console.log('password', setPassword); 
}
    return (
        <div className="wrapper">
            <h1>login</h1>
            <div className="input-box">
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                <FaRegUserCircle className="icon"/>
            </div>
            <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
              <FaLock  className="icon"/>
            </div>
            <div>
                <button onClick={onSubmit}> Login </button>
            </div>
        </div>
    );

};
export default LoginPage;