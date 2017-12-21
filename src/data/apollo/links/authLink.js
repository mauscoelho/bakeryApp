import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';
import { USER_TOKEN } from '../../../constants';

const authLink = setContext(async () => ({
  headers: {
    authorization: (await AsyncStorage.getItem(USER_TOKEN)) || '',
  },
}));

export default authLink;
