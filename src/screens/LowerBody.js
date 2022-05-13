import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Card, Title} from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe';

const LowerBody = () => {
   return (
       <Card style = {{padding: 18, margin:8, backgroundColor: "#bbd3e7", borderRadius:20}}>
       <Card.Content style = {{marginTop:-20}}>
           <Title>Video 1</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'Fu_oExrPX68'}
                />
            </View>
       </Card.Content>
       <Card.Content style = {{marginTop:10}}>
           <Title>Video 2</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'X0xt0fYTZv8'}
                />
            </View>
       </Card.Content>
        <Card.Content style = {{marginTop:20}}>
            <Title>Video 3</Title>
            <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'8-PjpUH8TcE'}
                />
            </View>
        </Card.Content>
        </Card>
    );
};

export default LowerBody;

const styles = StyleSheet.create(
    {
    title:{
            fontSize: 18,
    },
});