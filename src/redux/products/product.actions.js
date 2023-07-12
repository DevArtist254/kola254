import productTypes from './product.types';
import {faker} from '@faker-js/faker';

export const fetchFrontalWigsProductsStart = () => ({
  type: productTypes.start,
});

export const fetchFrontalWigsProductsSuccess = (frontalWigsProducts) => ({
  type: productTypes.success,
  payload: frontalWigsProducts,
});

export const fetchFrontalWigsProductsFail = (errMessage) => ({
  type: productTypes.fail,
  payload: errMessage,
});

export const loadFrontalWigsProductsAsync = () => {
  return async (dispatch) => {
    try {
      const users = faker.helpers.multiple(createRandomUser, {
        count: 5,
      });

      fetchFrontalWigsProductsStart();
      dispatch(fetchFrontalWigsProductsSuccess(users));
    } catch (error) {
      dispatch(fetchFrontalWigsProductsFail(error.message));
    }
  };
};

function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({firstName, lastName});

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    price: faker.commerce.price(),
    email,
    firstName,
    lastName,
    sex,
  };
}
