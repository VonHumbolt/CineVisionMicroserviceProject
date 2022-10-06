import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUserFromState } from '../store/actions/userActions';

export default function LoggedIn() {

  const dispatch = useDispatch();

  return (
    <div>
        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#!" onClick={() => dispatch(removeUserFromState())}>
                  Çıkış Yap
                </a>
            </li>
        </ul>
    </div>
  )
}
