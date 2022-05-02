
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-beamstarter.svg'

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row center">
						<Link to="/"><img src={logo} className="logo " style={{ width: '200px' }} alt={'logo'} /></Link>
				</div>
				<div className="row center">
					<p>© 2022 Copyright - BeamStarter</p>
				</div>
			</div>
		</footer>
	)
};

export default Footer;