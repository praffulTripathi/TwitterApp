function ProfileLogo({userLogo,userAltText,imgClass}) {
    return (
        <div className={`profileLogo ${imgClass}`}>
            <img src={userLogo} alt={userAltText} ></img>
        </div>
    )
}
export default ProfileLogo;