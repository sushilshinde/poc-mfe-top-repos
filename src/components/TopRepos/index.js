import React, { useEffect, useState } from 'react'
import "./index.css";

function TopReposs() {
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    window.addEventListener('getSearchTerm', (event) => {
        setSearchTerm(event.detail)
      });
    return ()=> {
      window.removeEventListener('getSearchTerm');
    };
  },[])
  return (
    <div className="card p-5 mt-4">
      <span>{searchTerm}</span>
      <h3 className="card-header">List of Repositories</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i class="fa fa-caret-right"></i>React Js</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>Unix Script Collections</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>Awesome Node</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>Awesome CSS</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>Awesome console</li>
      </ul>
    </div>
  );
}

export default TopReposs;
