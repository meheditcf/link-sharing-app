import { StyledSaveButton } from "../Links/LinksSaveButton.jsx"

const ProfileSaveButton = ( {onClick} ) => {
    return (
        <StyledSaveButton onClick={onClick} className="button--save">Save</StyledSaveButton>
      )
}

export default ProfileSaveButton