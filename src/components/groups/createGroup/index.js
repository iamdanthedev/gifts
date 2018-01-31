import React, { Component } from 'react';
import P from 'prop-types';
import DatePicker from 'react-date-picker';
import { Formik } from 'formik';

import InviteFriends from '../../layout/inviteFriends';
import CustomInput from '../../customInput';
import FriendBox from '../../friends/friendsBox';
import SelectedFriend from '../../friends/selectedFriendBox';

import './style.css';

const CreateGroup = props => {
  const { friends, ...formProps } = props;

  const addFriend = (email, form) => {
    if (!email) {
      return ;
    }

    if (form.values.friends.includes(email)) {
      return;
    }

    form.setFieldValue('friends', [...form.values.friends, email]);
  };

  const removeFriend = (email, form) =>
    form.setFieldValue('friends', form.values.friends.filter(id => id !== email));

  const getFriend = email => friends.find(f => f.email === email) || { email };

  return (
    <Formik
      {...formProps}
      render={form => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('CreateGroup Form Values', form.values, form);
        }

        const selectedFriends = props.friends.filter(f =>
          form.values.friends.includes(f.id),
        );

        return (
          <div className="max-w groups flex-property div-wrap">
            <InviteFriends onSubmit={email => addFriend(email, form)} />

            <div className="create-group white-box flex-property div-wrap">
              <h6>Create new event and invite your friends to join!</h6>

              {form.errors.friends &&
                form.touched.friends && <div>{form.errors.friends}</div>}

              <form className="createGroupForm" onSubmit={form.handleSubmit}>
                <div className="group-basic-info">
                  <div className="form-input-elements">
                    <div className="group-name">
                      <CustomInput
                        name="name"
                        required
                        autoComplete="off"
                        placeholder="Enter event name"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.name}
                      />
                    </div>

                    <div className="group-desc">
                      <CustomInput
                        name="desc"
                        required
                        autoComplete="off"
                        placeholder="Enter short event description"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.desc}
                      />
                    </div>

                    <div className="group-cost">
                      <CustomInput
                        name="cost"
                        required
                        autoComplete="off"
                        type="number"
                        placeholder="Enter gift cost"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cost}
                      />
                    </div>
                  </div>

                  <div className="datepicker flex-property div-wrap">
                    <label>Choose date of event</label>
                    <DatePicker
                      onChange={date => form.setFieldValue('date', date)}
                      value={form.values.date}
                    />
                  </div>
                </div>

                <div className="selected-members">
                  <p>Selected friends:</p>
                  {form.values.friends.map(getFriend).map(friend => (
                    <SelectedFriend
                      status="own"
                      key={friend.email}
                      email={friend.email}
                      name={friend.name}
                      onRemove={() => removeFriend(friend.email, form)}
                    />
                  ))}
                </div>

                <div
                  className="group-members"
                  onMouseOver={() => (document.body.style.overflow = 'hidden')}
                  onMouseOut={() => (document.body.style.overflow = 'auto')}
                >
                  <p>Your suggested friends:</p>

                  {friends.map(friend => (
                    <FriendBox
                      status="own"
                      key={friend.email}
                      email={friend.email}
                      name={friend.name}
                      onAdd={() => addFriend(friend.email, form)}
                    />
                  ))}
                </div>

                <input type="submit" className="submit button-font" />
              </form>
            </div>
          </div>
        );
      }}
    />
  );
};

CreateGroup.propTypes = {
  onSubmit: P.func.isRequired,
  friends: P.array.isRequired,
};

export default CreateGroup;
