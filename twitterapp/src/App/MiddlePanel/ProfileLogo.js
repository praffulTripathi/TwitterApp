function ProfileLogo({userLogo,userAltText}) {
    return (
        <div className="profileLogo">
            <img src={userLogo} alt={userAltText} className="profileImage"></img>
        </div>
    )
}
export default ProfileLogo;