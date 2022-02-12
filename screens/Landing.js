import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDiscoverMovies } from '../redux/actions/index'
import { TouchableOpacity, FlatList, ScrollView, Text, View, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import MovieCard from '../components/MovieCard';

function Landing(props) {
  const { navigate } = props.navigation
  const [page, setPage] = useState(1)

  useEffect(() => {
    props.fetchDiscoverMovies(page)
  }, [])
  
  const onCardClick = (movie) => {
    navigate('Details', movie)
  }

  return (
    <>
      <FlatList
        style={styles.container}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={props.movies.results}
        renderItem={({ item }) => {
            return (<MovieCard movie={item} onPress={()=>onCardClick(item)} />
        )}}
      />
      <View style={styles.pagination}>
      <TouchableOpacity onPress={() => {
            if (page != 1) {
              setPage(page-1)
              props.fetchDiscoverMovies(page-1)
            }
          }}
          disabled={page == 1 ? true : false}
        >
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.number}>{page}</Text>
        </View>
        <TouchableOpacity onPress={() => {
            if (page < props.movies.total_pages) {
              setPage(page+1)
              props.fetchDiscoverMovies(page+1)
            }
          }}
          disabled={page == props.movies.total_pages ? true : false}
        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
    
  )
}

const mapStateToProps = (store) => ({
  movies: store.moviesState.movies
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchDiscoverMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Landing);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    backgroundColor: 'rgb(53, 53, 53)',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: '2.5rem'
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#212121',
    justifyContent: 'center',
    padding: '0.5rem',
    alignContent: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: '0.5rem',
  },
  number: {
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: '0.5rem',
    borderRadius: '5px',
    backgroundColor: 'orange',
  }
});