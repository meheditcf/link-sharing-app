import LogoLinks from "../../../assets/images/icon-links-header.svg";
import {StyledProfileButton} from "./HeaderProfileButton.jsx";

function HeaderLinksButton({isImageLarge, handleClick, selectedIcon}) {
    return (
        <StyledProfileButton className={`${selectedIcon === "LinkLogo" ? "active" : ""}`} onClick={() => {
            handleClick("LinkLogo", "Links")
        }}>
            <img src={LogoLinks}
                 className={`header--logo`}/>
            {isImageLarge ? <p>Links</p> : null}
        </StyledProfileButton>
    )
}

export default HeaderLinksButton;