import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import {useAuth} from "../contexts/AuthContext";


export function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const history = useHistory();

    const {login} = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to login !");
        }
    }

    return (
    <>
    <Form style={{height: '330px'}} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            required
            placeholder="Enter email"
            icon="alternate_email"
            value={email} onChange={(e) => {setEmail(e.target.value)}}
          />

          <TextInput type="password" required placeholder="Enter password" icon="lock" value={password} onChange={(e) => {setPassword(e.target.value)}} />

          <Button disabled={loading} type="submit">
            <span>Submit Now</span>
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
    </>
    );
}