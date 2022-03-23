
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import news from './API/news';

import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
  },
});

export default function ArticlesScreen() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState([])
  const navigation = useNavigation();
 
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // React.useEffect(() => {


  //   useEffect(()=> {
  //     getNewsFromAPI()
  //   }, [])

  // function getNewsFromAPI() {
  //   news.get('everything?q=nasa&from=2022-03-20&sortBy=popularity&apiKey=4bb887ea3e3e468d8d3e84900ca40158')
  //   .then(async function(response){
  //       setNewsTech(response.data)
  //       console.log(response.data)
  //   })
  //   .catch(function(error){
  //       console.log(error);
  //   })
  //   .finally(function(){
  //       setLoading(false);
  //   })
  // }
    // fetchFunction();
  // }, []);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('articles')
        .orderBy('publishedAt', 'desc')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const {
              id,
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
              comments,
            } = doc.data();
            list.push({
              id: doc.id,
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
              comments,
            });
          });
        });
        // console.log(list);
      setArticles(list);

      if (loading) {
        setLoading(false);
      }
      // console.log('Posts: ', articles);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [articles]);
 
  return (
    // <ScrollView style={{backgroundColor: "black"}}>
    //   {isLoading ? <ActivityIndicator size="large" color="#DA3349" /> : (
      <View>
        <FlatList
          data={articles}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Card 
              item={item}
            />
          )}
      />
      </View>
      // <FlatList
      //     data={newstech.articles}
          
      //     keyExtractor={(item, index) => 'key' + index}
      //     renderItem={({item}) => (
      //         <Card 
      //             item={item}
      //         />
      //     )}
      // />
    //   )}
    // </ScrollView>
  );
}