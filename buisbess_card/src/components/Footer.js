import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <div className="footer--div">
            <div className="footer--icons">
                <FontAwesomeIcon icon={faSquareTwitter} className="icons"/>
                <FontAwesomeIcon icon={faSquareFacebook} className="icons"/>
                <FontAwesomeIcon icon={faSquareInstagram} className="icons"/>
                <FontAwesomeIcon icon={faSquareGithub} className="icons"/>
            </div>
        </div>
    )
}