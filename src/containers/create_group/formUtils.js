
export const initialValues = {
  name: '',
  desc: '',
  cost: 0,
  date: new Date(),
  friends: [],
};

export const validate = data => {
  const errors = {};

  if (!data.name) {
    errors.name = 'Name should be set';
  }

  if (!data.desc) {
    errors.desc = 'Description is needed';
  }

  const costNum = parseFloat(data.cost);

  if (typeof costNum !== 'number' || costNum < 0) {
    errors.cost = 'Gift cost should be above 0';
  }

  if (!data.date) {
    errors.data = 'Date is missing';
  }

  if (!data.friends || data.friends.length === 0) {
    errors.friends = 'Please, add at least one friend';
  }

  return errors;
};
