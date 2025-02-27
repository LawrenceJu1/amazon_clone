import { Link } from 'react-router-dom';

const NoCartSection = () => (
  <div className="cart__card">
    <div className="imageCart">
      <span
        class="iconify"
        data-icon="emojione-monotone:shopping-cart"
        data-inline="false"
        data-height="100px"
        data-width="100px"
      ></span>
    </div>
    <div>
      <h1>Your Amazon Basket is empty</h1>
      <p>Shop today's deals</p>
      <div className="signButtons">
        <Link className="sign_in_btn" to="/signin">
          Sign into your account
        </Link>
        <Link className="sign_in_btn sign_up_btn" to="/register">
          Sign up now
        </Link>
      </div>
    </div>
  </div>
);

export default NoCartSection;
