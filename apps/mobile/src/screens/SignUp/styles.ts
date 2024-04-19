import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  welcome: {
    marginTop: 120,
    marginBottom: 64,
    fontFamily: 'InterSemi',
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'InterSemi',
    fontSize: 24,
    color: 'dimgray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  signInBtn: {
    marginTop: 48,
  },
  signInText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
