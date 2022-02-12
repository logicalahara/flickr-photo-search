import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Tile} from 'react-native-elements';
import {windowWidth} from '../utils/globals';
import {generateImgUrl} from '../utils/helpers';
import {ImgDetailProps} from '../utils/types';

const ImgDetail: React.FC<ImgDetailProps> = ({route}) => {
  // extracting route params
  const {id, server, secret, title} = route.params;

  return (
    <View style={styles.container}>
      <Tile
        style={styles.image}
        imageSrc={{uri: generateImgUrl({id, serverId: server, secret})}}
        title={title}
        titleStyle={title ? styles.title : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
  },
  image: {
    width: windowWidth,
    flex: 1,
  },
  title: {
    padding: 0,
    margin: 0,
    color: '#000',
    textAlign: 'center',
  },
});

export default ImgDetail;
