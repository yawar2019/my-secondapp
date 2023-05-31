import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

interface Props {
    children: React.ReactNode
}

export const _Layout: React.FunctionComponent<Props> = (props:Props) => {
    return (
    <div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  
  <div className="p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap 5 Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" href="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" href="/about">About</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
    {props.children}
       
  </div>
</div>
</div>
<div className="mt-5 p-4 bg-dark text-white text-center">
  <p>Footer</p>
</div>
</div>
  
    )
}