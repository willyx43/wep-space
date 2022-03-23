import React, { useState } from 'react';
import { 
    Alert,
    FlatList,
    View, 
    Modal, 
    Button, 
    StyleSheet, 
    Image, 
    Dimensions, 
    Text, 
    Share,
    TouchableNativeFeedback, 
    TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import FormInput from '../components/FormInput';
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window');

function Card({ item, onPress }) {

    const [post, setPost] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const submitPost = async () => {
        const {id, comments} = item;
        console.log(id);
        console.log(comments);
    
        firestore()
        .collection('articles')
        .doc(id)
        .update({
          comments: firestore.FieldValue.arrayUnion(post),
        })
        .then(() => {
          console.log('Comments Added!');
          Alert.alert(
            'Comment added',
          );
          setPost(null);
        })
        .catch((error) => {
          console.log('Something went wrong with added post to firestore.', error);
        });
      }

    //handleShare
    const handleShare = () => {
        const {url, title} = item; //get url and title form our prop
        var message = `${title} \n\n Read More ${url} \n\n Shared via The NewsXTimes`; // custome message
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        );
    }

    return (
        <View>
            <TouchableNativeFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={{
                    margin: 20,
                    borderRadius: 15,
                    backgroundColor: "black",
                    height: 290,
                    overflow: 'hidden',
                    elevation: 3
                }}>
                    <Image source={{ uri: item.urlToImage}} style={styles.image} />
                    <Text style={{
                        width: width,
                        marginHorizontal: width * 0.03,
                        marginVertical: width * 0.03,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: "red",
                        maxWidth: width * 0.85
                    }} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.author}>{item.author ? item.author : 'Not Available'}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{
                            backgroundColor: "blue",
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 140,
                            padding: 2,
                            elevation: 3,
                            marginLeft: 10,
                            marginTop: 5}}>    
                            <Text style={{
                                fontSize: 10,
                                color: 'white',
                            }}>🕘 {item.publishedAt}
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            marginRight: 10,
                        }}
                        onPress={handleShare}
                        >
                            <Ionicons name='share-social' color={"green"} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableNativeFeedback>
            
            <TouchableOpacity style={{ justifyContent: 'center', marginRight: 10,  }} onPress={() => setModalVisible2(!modalVisible2)}>
                <Ionicons name='chatbubble-ellipses-outline' color={"red"} size={20} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible(!modalVisible2);
                }}
                statusBarTranslucent={false}
            >
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30, marginTop: 50, overflow: 'hidden', flexDirection: 'column',
                }}>
                    <View>
                        <Button
                            title="Close"
                            onPress={() => setModalVisible2(!modalVisible2)}
                            color={'#252525'}
                        />
                        <Button
                             title="Add comment"
                             onPress={submitPost}
                             color={'#DA3349'}
                        />
                    </View>
                    <View>
                    <FormInput
                        placeholderText="commentaire..."
                        iconType="user"
                        value={post}
                        onChangeText={(content) => setPost(content)}
                    />
                    <View style={{alignItems: 'center'}}>
                        <FlatList
                            data={item.comments}
                            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        />
                    </View>
                    
                        {/* <Text>{item.comments}</Text> */}
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent={false}
            >
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30, marginTop: 50, overflow: 'hidden', flexDirection: 'column',
                }}>
                    <View>
                        <Button
                            title="Close"
                            onPress={() => setModalVisible(!modalVisible)}
                            color={'#252525'}
                        />
                        <Button
                             title="Share"
                             onPress={handleShare}
                             color={'#DA3349'}
                        />
                    </View>
                    
                    <WebView source={{ uri: item.url }} />
                </View>
            </Modal>
            
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.15,
    },
    author: {
        width: width,
        marginTop: -10,
        marginHorizontal: width * 0.03,
        color: 'darkgray'
    },
    desc: {
        width: width,
        marginTop: 5,
        marginHorizontal: width * 0.03,
        color: 'gray',
        maxWidth: width * 0.8
    }
})

export default Card;