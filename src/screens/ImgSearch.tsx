import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Searchbar, Card, ActivityIndicator} from 'react-native-paper';
import {Image} from 'react-native-elements';
import axios, {AxiosError} from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ImgMeta, ImgSearchProps} from '../utils/types';
import {BASE_URL, windowWidth} from './../utils/globals';
import {generateImgUrl} from '../utils/helpers';

const ImgSearch: React.FC<ImgSearchProps> = ({navigation}) => {
  // stores current search query for photos
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  // stores search results for searched query
  const [searchResults, setSearchResults] = useState<ImgMeta[]>([]);
  // stores loading state when search is executing
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  // function that handles REST API call to search images
  const fetchFlickrImgs = () => {
    setSearchLoading(true);
    axios
      .get(
        `${BASE_URL}&tags=${searchQuery}&format=json&nojsoncallback=1&per_page=60`,
        {
          method: 'GET',
        },
      )
      .then(res => {
        setSearchLoading(false);
        setSearchResults(res.data.photos.photo);
      })
      .catch((err: AxiosError) => {
        console.log('Error', err);
        setSearchLoading(false);
      });
  };

  return (
    <View style={[styles.container, {marginBottom: windowWidth / 3 - 12}]}>
      <Searchbar
        style={styles.search}
        onChangeText={text => {
          setSearchQuery(text);
        }}
        placeholderTextColor="grey"
        placeholder="Search Flickr Image Cloud"
        icon={() =>
          searchLoading && searchQuery && searchQuery.length > 0 ? (
            <ActivityIndicator color="grey" size={24} />
          ) : (
            <Icon name="search" color="grey" size={24} />
          )
        }
        onSubmitEditing={() => {
          if (searchQuery && searchQuery.length > 0) {
            fetchFlickrImgs();
          } else {
            setSearchResults([]);
          }
        }}
      />
      {!Array.isArray(searchResults) || searchResults.length === 0 ? (
        <View style={[styles.container, styles.flexCenter]}>
          <Text style={styles.placeholderText}>No photos here...</Text>
        </View>
      ) : (
        <View style={styles.imgContainer}>
          <Text style={styles.placeholderText}>Search Results</Text>
          <FlatList
            keyExtractor={item => item.id}
            numColumns={3}
            data={searchResults}
            renderItem={({item}) => (
              <Card
                style={styles.imgCard}
                onPress={() => {
                  navigation.navigate('imgDetail', item);
                }}>
                <Image
                  source={{
                    uri: generateImgUrl({
                      id: item.id,
                      serverId: item.server,
                      secret: item.secret,
                    }),
                  }}
                  style={styles.img}
                  PlaceholderContent={
                    <ActivityIndicator color="grey" size={24} />
                  }
                />
                <Text style={styles.imgTitle}>{item.title}</Text>
              </Card>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    margin: 10,
  },
  placeholderText: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 15,
  },
  imgContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  imgCard: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 2,
  },
  img: {
    width: windowWidth / 3 - 12,
    height: windowWidth / 3 - 12,
    marginVertical: 4,
  },
  imgTitle: {
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
});

export default ImgSearch;
