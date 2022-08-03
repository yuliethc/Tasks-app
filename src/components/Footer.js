import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; <Link to="https://www.yulieth.com/">yulieth.com</Link> 2022</p>
            <p><Link to="/about">About</Link></p>
            
        </footer>
    );
};

export default Footer;