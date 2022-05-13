import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Card, Title} from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe';

const UpperBody = () => {
   return (
       <Card style = {{padding: 17, margin:8, backgroundColor: "#e7bbbc", borderRadius:20,  }}>
       <Card.Content>
           <Title>Video 1</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'DHOPWvO3ZcI'}
                />
            </View>
       </Card.Content>
       <Card.Content>
           <Title>Video 2</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'mm47bCaCzpQ'}
                />
            </View>
       </Card.Content>
        <Card.Content>
            <Title>Video 3</Title>
            <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={'RPbscYct3I4'}
                />
            </View>
        </Card.Content>
        </Card>
    );
};

export default UpperBody;

const styles = StyleSheet.create(
    {
    title:{
            fontSize: 18,
    },
});