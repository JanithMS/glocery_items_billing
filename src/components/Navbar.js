import { useHistory} from 'react-router';

const Navbar = () => {
  const history = useHistory()

  const go = async(x) =>{
    history.replace(x)
  }

  return (
    <nav className="navbar">
      <h1>Glocery Bill</h1>
        <div className="links">
          <span className="link" onClick = {()=>go('/')}> Bill </span>
          <span className="link" onClick = {()=>go('/usersbill')}> Users Bill </span>
        </div>
    </nav>
   );
}
 
export default Navbar;