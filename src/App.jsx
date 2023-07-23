import {Outlet, Link} from 'react-router-dom';
import {Icon} from '@iconify/react';
import CartNav from './components/nav-comp/cart.comp';
import {connect} from 'react-redux';
import UserInfo from './components/nav-comp/userinfo.comp';

const App = ({currentUser}) => {
  return (
    <div>
      <nav className='nav'>
        <a href='/home' className='nav--logo logo'>
          Hair by kola
        </a>
        <div className='nav--links links'>
          <Link className='nav--link link' to='/frontal-wigs'>
            Frontal wigs
          </Link>
          <Link className='nav--link link' to='/closure-wigs'>
            Closure wigs
          </Link>
          <>
            {!currentUser ? (
              <Link className='nav--link link' to='/login'>
                login
              </Link>
            ) : (
              <UserInfo user={currentUser} />
            )}
          </>

          <div className='nav--link link'>
            <Icon
              icon='iconoir:user-cart'
              color='#2b002d'
              width='42'
              height='42'
            />
            <CartNav />
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
