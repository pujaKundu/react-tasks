import people from '../../assets/icons/group.png'
import check from '../../assets/icons/checkmark.png'
import google from '../../assets/icons/google.png'
import maps from '../../assets/icons/google-maps.png'
import './Rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar-container'>
      <div>
        <img src={google} alt="" className='rightbar-icon' />
      </div>
      <div><img src={check} alt="" className='rightbar-icon' /></div>
      <div><img src={people} alt="" className='rightbar-icon' /></div>
      <div><img src={maps} alt="" className='rightbar-icon' /></div>
    </div>
  )
}

export default Rightbar
