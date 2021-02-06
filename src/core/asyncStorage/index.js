import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA} from '../../constant';

//User data
export const storeUserData = async (value) => {
    try {
      await AsyncStorage.setItem(USER_DATA, value)
    } catch (e) {
      // saving error
      alert(e)
    }
  }

  export const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem(USER_DATA)
      if(value !== null) {
       return value
      }
    } catch(e) {
      // error reading value
    }
  }



//Call TokenDetails

export const storeCallTokenDetails = async (value) => {
    try {
      await AsyncStorage.setItem(CALL_TOKEN_DETAILS, value)
    } catch (e) {
      // saving error
      alert(e)
    }
  }

  export const getCallTokenDetails = async () => {
    try {
      const value = await AsyncStorage.getItem(CALL_TOKEN_DETAILS)
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }