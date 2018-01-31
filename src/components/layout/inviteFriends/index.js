import React from 'react';
import { compose, withState } from 'recompose';
import P from 'prop-types';
import './style.css';

const InviteFriends = props => (
  <div className="invite-bar white-box flex-property">
    <form
      className="flex-property flex-center"
      onSubmit={e => {
        this.handleSubmit();
        e.preventDefault();
      }}
    >
      <input
        id="searchBar"
        type="email"
        className="floated"
        required
        autoComplete="off"
        placeholder="Enter friends email ..."
        onChange={e => props.setEmail(e.target.value)}
      />

      <input className="button-font submit" type="submit" value="Invite" />
    </form>
  </div>
);

InviteFriends.propTypes = {
  email: P.string,
  setEmail: P.func.isRequired,
  onSubmit: P.func.isRequired,
};

export default compose(withState('email', 'setEmail', ''))(InviteFriends);
