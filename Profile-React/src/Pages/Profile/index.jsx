
import './style.css'
import ProfileImg from '../../assets/profile.jpg'

function Profile() {

  return (
   <div className="card">
        <img src={ProfileImg} alt="Foto de Juliano" className='profile-imge' />
        <div>
            <h2>Juliano Balbino</h2>
            <h3>Desenvolvedor de web sites</h3>
            <p>Transforming ideas into realities, creating interfaces that inspire and engage users dreams.</p>
            <p>I am a full-stack developer woth 5 years of experience at Google. i have a passion for modem web Technologies and share my knowledge with others.</p>
            <div className="socials">
                <button><i className="fa-brands fa-instagram"></i></button>
                <button><i className="fa-brands fa-whatsapp"></i></button>
                <button><i className="fa-brands fa-github"></i></button>        
            </div>   
        </div>
    </div>
  )
}

export default Profile
