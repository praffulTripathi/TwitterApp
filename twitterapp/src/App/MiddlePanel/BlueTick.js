import VerifiedUserSVG from '../../assets/Twitter_Verified_Badge.svg.png'
function BlueTick({ blueTick,bkgColor }) {
  if (blueTick == true)
    return (
      <div className="blueTick">
        <img className={`verifiedUserIcon ${bkgColor}`} src={VerifiedUserSVG}></img>
      </div>
    );
}
export default BlueTick;
