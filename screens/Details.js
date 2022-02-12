import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovieDetail } from '../redux/actions/index'
import { Dimensions, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

function Details(props) {
  const movieId = props.route.params.id
  const [result, setResult] = useState(null);
  useEffect(() => {
    props.fetchMovieDetail(movieId)
  }, [])

  console.log(props.movieDetail)
  const {homepage, original_title, poster_path, overview, vote_average, runtime, release_date} = props.movieDetail
  return (
    <View>
      <View style={styles.titleContainer}>
       <Text style={styles.title}>
            {original_title}
        </Text>
      </View>
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w185/${poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png" }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.release}>Release: {release_date}</Text>
          <Text style={styles.time}>Runtime: {runtime} mins</Text>
          <Text style={styles.boldText}>{vote_average}/10</Text>
        </View>
      </View>
      <View style={styles.baseContainer}>
        <Text style={styles.header}>Summary</Text>
        <Text style={styles.summary}>{overview}</Text>
      </View>
      <View style={styles.baseContainer}>
        <Text style={styles.header}>Links</Text>
        <View style={styles.link}>
          <Text style={styles.boldText} onPress={()=>WebBrowser.openBrowserAsync(homepage)}>Movie Homepage</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: Dimensions.get('window').width / 185 * 278 * 0.4,
    width: Dimensions.get('window').width / 2.5,
  },
  baseContainer: {
    paddingHorizontal: '1rem',
    paddingBottom: '1rem'
  },
  summary: {
    fontSize: '1rem'
  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
  },
  titleContainer: {
    backgroundColor: '#746A64',
    padding: '1rem'
  },
  header: {
    fontSize: '1rem',
    fontWeight: '600',
    borderBottomColor: 'black',
    borderBottomWidth: '1px',
    paddingBottom: '1rem',
    marginBottom: '1rem'
  },
  release: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  time: {
    fontSize: '1rem',
    flex: 1
  },
  boldText: {
    fontSize: '1rem',
    fontWeight: '600',
    flex: 1
  },
  link: {
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: 'lightgrey'
  }
});

const mapStateToProps = (store) => ({
  movieDetail: store.moviesState.movieDetail
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchMovieDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Details);