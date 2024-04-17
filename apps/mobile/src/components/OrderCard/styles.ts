import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
  mediumText: {
    fontWeight: '600',
  },
  flexRow: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    gap: 24,
  },
});
