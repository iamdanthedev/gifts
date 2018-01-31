import React from 'react';
import { compose, withState } from 'recompose';
import P from 'prop-types';
import './style.css';

const InviteFriends = props => (
  <div className="invite-bar white-box flex-property">
    <form
      className="flex-property flex-center"
      onSubmit={e => {
        props.onSubmit(props.email);
        props.setEmail('');
        e.preventDefault();
      }}
    >
      <input
        autoComplete="off"
        className="floated"
        disabled={props.disabled}
        id="searchBar"
        onChange={e => props.setEmail(e.target.value)}
        placeholder="Enter friends email ..."
        required
        type="email"
        value={props.email}
      />

      <input
        className="button-font submit"
        disabled={props.disabled}
        type="submit"
        value="Invite"
      />
    </form>
  </div>
);

InviteFriends.propTypes = {
  disabled: P.bool,
  email: P.string,
  setEmail: P.func.isRequired,
  onSubmit: P.func.isRequired,
};

export default compose(withState('email', 'setEmail', ''))(InviteFriends);
