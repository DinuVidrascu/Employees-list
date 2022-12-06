
import './app-info.css';

const AppInfo = ({increased, employees})=>{
  return(
    <div className="app-info">
      <h1>Contabilitatea angajatilor din companie</h1>
      <h2>Numarul total de angajati: {employees}</h2>
      <h2>Premiul cistiga: {increased}</h2>
    </div>
  )
}
 
export default AppInfo;