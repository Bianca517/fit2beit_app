import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Card, Title} from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe';

const FullBody = () => {
   return (
       <Card style = {{padding: 17, margin:8, backgroundColor: "#e7e6bb", borderRadius:20,  }}>
       <Card.Content style = {{marginTop:-20}}>
           <Title>Video 1</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'ZeJLIdQenTo'}
                />
            </View>
       </Card.Content>
       <Card.Content style = {{marginTop:10}}>
           <Title>Video 2</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'R6gZoAzAhCg'}
                />
            </View>
       </Card.Content>
        <Card.Content style = {{marginTop:20}}>
            <Title>Video 3</Title>
            <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'gnTzk1yUHB4'}
                />
            </View>
        </Card.Content>
        </Card>
    );
};

export default FullBody;

const styles = StyleSheet.create(
    {
    title:{
            fontSize: 18,
    },
});