import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import YoutubePlayer from "react-native-youtube-iframe";
import { db } from "../../firebase";
import { useEffect } from "react";

var OldestVideoIndex = 1;

const UpperBody = () => {
  //const [UpperBodyVideoLinkFromDB, setUpperBodyVideoLinkFromDB] = useState("");

  let UpperBodyVideoLinkFromDB = "";
  const [UpperBodyVideoLink1, setUpperBodyVideoLink1] = useState("DHOPWvO3ZcI");
  const [UpperBodyVideoLink2, setUpperBodyVideoLink2] = useState("mm47bCaCzpQ");
  const [UpperBodyVideoLink3, setUpperBodyVideoLink3] = useState("RPbscYct3I4");

  async function getUpperBodyWorkoutLink() {
    const snapshot = await db.collection("Workouts").get();

    snapshot.docs.map(doc => {
      if (!isEmpty(doc)) {
        UpperBodyVideoLinkFromDB = doc.data()["workoutLink"].toString();
      }
    });

    console.warn("apel");
    console.warn("old " + OldestVideoIndex);

    if (
      !(
        UpperBodyVideoLinkFromDB in
        [UpperBodyVideoLink1, UpperBodyVideoLink2, UpperBodyVideoLink3]
      )
    ) {
      if (OldestVideoIndex === 1) {
        setUpperBodyVideoLink1(UpperBodyVideoLinkFromDB);
      } else if (OldestVideoIndex === 2) {
        setUpperBodyVideoLink2(UpperBodyVideoLinkFromDB);
        console.warn("aici");
      } else {
        setUpperBodyVideoLink3(UpperBodyVideoLinkFromDB);
      }

      if (OldestVideoIndex === 3) {
        OldestVideoIndex = 1;
      } else {
        OldestVideoIndex++;
      }

      console.warn("old2 " + OldestVideoIndex);
    }
  }

  useEffect(() => {
    getUpperBodyWorkoutLink();
  }, []);

  return (
    <Card
      style={{
        padding: 17,
        margin: 8,
        backgroundColor: "#e7bbbc",
        borderRadius: 20,
      }}
    >
      <Card.Content style={{ marginTop: -20 }}>
        <Title>Video 1</Title>
        <View>
          <YoutubePlayer
            height={180}
            play={false}
            videoId={UpperBodyVideoLink1}
          />
        </View>
      </Card.Content>
      <Card.Content style={{ marginTop: 10 }}>
        <Title>Video 2</Title>
        <View>
          <YoutubePlayer
            height={180}
            play={false}
            videoId={UpperBodyVideoLink2}
          />
        </View>
      </Card.Content>
      <Card.Content style={{ marginTop: 20 }}>
        <Title>Video 3</Title>
        <View>
          <YoutubePlayer
            height={180}
            play={false}
            videoId={UpperBodyVideoLink3}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default UpperBody;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});
