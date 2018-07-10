import { StyleSheet } from 'react-native';

export default StyleSheet.create({



    heart: {
        width: 50,
        height: 50
      },
      heartShape: {
        width: 30,
        height: 45,
        position: 'absolute',
        top: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#6427d1',
      },
      leftHeart: {
        transform: [
            {rotate: '-45deg'}
        ],
        left: 5
      },
      rightHeart: {
        transform: [
            {rotate: '45deg'}
        ],
        right: 5
      },

});

