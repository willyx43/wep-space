import React from 'react';
import {
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';


const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 250,
    },
});

export default function IssIno() {
    const [refreshing, setRefreshing] = React.useState(false);
    const [moon, setMoon] = React.useState(0);
    // const onRefresh = React.useCallback(() => {
    //   setRefreshing(true);
    //   wait(2000).then(() => setRefreshing(false));
    // }, []);

    // React.useEffect(() => {
        async function fetchFunction() {
        try{
        const response = await fetch('http://api.open-notify.org/astros.json');
        const json = await response.json();
        // console.log(json.people);
        setMoon(json.people);
        }
        catch(err) {
            throw err;
        }
        }
        // fetchFunction();
    // }, []);
    
    return (
        <ScrollView
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchFunction()}
            />
        }
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            style={styles.tinyLogo}
            source={require("../assets/iss.jpeg")}
        >
        </Image>
        <Text>Personne dans l'ISS actuellement :</Text>
        <Text>Test : {console.log(moon[0])}</Text>
        <Text>Test : {moon.name}</Text>
        <Text>Test : {console.log(moon.name)}</Text>
        {/* <Text>name : {moon.name}</Text>
        <Text>gravity : {moon.gravity}</Text>
        <Text>Mean Radius {moon.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {moon.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {moon.polarRadius}</Text> */}
        </View>
        </ScrollView>
    );
}
