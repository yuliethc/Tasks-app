import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>App task tracker helps to keep record for your events or taks, make sure to add the description, the date and time.</p>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default About;