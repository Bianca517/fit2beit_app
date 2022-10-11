import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import YoutubePlayer from "react-native-youtube-iframe";
import { db } from "../../firebase";

const [UpperBodyVideoLinkFromDB, setUpperBodyVideoLinkFromDB] = useState("");
const [OldestVideoIndex, setOldestVideoIndex] = useState("");

const [UpperBodyVideoLink1, setUpperBodyVideoLink1] = useState("DHOPWvO3ZcI");
const [UpperBodyVideoLink2, setUpperBodyVideoLink2] = useState("mm47bCaCzpQ");
const [UpperBodyVideoLink3, setUpperBodyVideoLink3] = useState("RPbscYct3I4");

async function getUpperBodyWorkoutLink() {
  const snapshot = await db.collection("Workouts").get();
  if (snapshot.docs("upper_body").data["workoutLink"].length() === 0) {
    setOldestVideoIndex(0);
  } else {
    snapshot.docs.map(doc =>
      setUpperBodyVideoLinkFromDB(doc.data()["workoutLink"].toString())
    );
    if (OldestVideoIndex === 3) {
      setOldestVideoIndex(1);
    } else {
      setOldestVideoIndex(OldestVideoIndex + 1);
    }
  }
}

function mapVideoLink1() {
  if (OldestVideoIndex === 1) {
    getUpperBodyWorkoutLink();
    setUpperBodyVideoLink1(UpperBodyVideoLinkFromDB);
  }
  return UpperBodyVideoLink1;
}

function mapVideoLink2() {
  if (OldestVideoIndex === 2) {
    getUpperBodyWorkoutLink();
    setUpperBodyVideoLink2(UpperBodyVideoLinkFromDB);
  }
  return UpperBodyVideoLink2;
}

function mapVideoLink3() {
  if (OldestVideoIndex === 3) {
    getUpperBodyWorkoutLink();
    setUpperBodyVideoLink3(UpperBodyVideoLinkFromDB);
  }
  return UpperBodyVideoLink3;
}

const UpperBody = () => {
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
          <YoutubePlayer height={180} play={false} videoId={mapVideoLink1()} />
        </View>
      </Card.Content>
      <Card.Content style={{ marginTop: 10 }}>
        <Title>Video 2</Title>
        <View>
          <YoutubePlayer height={180} play={false} videoId={"mm47bCaCzpQ"} />
        </View>
      </Card.Content>
      <Card.Content style={{ marginTop: 20 }}>
        <Title>Video 3</Title>
        <View>
          <YoutubePlayer height={180} play={false} videoId={"RPbscYct3I4"} />
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
