import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';

const MovieCard = (props) => {
    const { movie, onPress } = props;
    const { id, original_title, poster_path, title, vote_average } = movie;
    return (
        <TouchableOpacity style={styles.movieCard} onPress={onPress}>
            <View style={styles.infoContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w185/${poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png" }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {original_title}
                </Text>
                <Text style={styles.rating}>
                    {vote_average}
                </Text>
            </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;


const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    minHeight: Dimensions.get('window').width / 185 * 278 * 0.5,
    width: Dimensions.get('window').width / 2,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'rgb(53, 53, 53)',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    paddingRight: '0.25rem'
  },
  rating: {
    color: 'white',
    backgroundColor: 'rgb(88, 88, 88)',
    paddingHorizontal: '8px',
    borderRadius: '4px',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: '0.5rem',
    color: 'white',
    height: '3.5rem',
    overflow: 'hidden'
  },
  infoContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    flex: 1,
  },
  movieCard: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'rgb(53, 53, 53)',
  }
});