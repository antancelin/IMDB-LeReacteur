// import des composants
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// import des icônes
import FontAwesome from "@expo/vector-icons/FontAwesome";

// import du style
import styles from "./styles";

// imoprt des images
import logo from "./assets/imgs/logo-imdb.png";
import film from "./assets/imgs/film.jpg";
import anne from "./assets/imgs/anne.jpg";
import jessica from "./assets/imgs/jessica.jpg";
import mackenzie from "./assets/imgs/mackenzie.jpg";
import matthew from "./assets/imgs/matthew.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.globalContent}>
            <View style={styles.filmInfos}>
              <Text style={styles.title}>Interstellar</Text>
              <View style={styles.filmData}>
                <Text style={styles.textData}>2014</Text>
                <Text style={styles.textData}>PG-13</Text>
                <Text style={styles.textData}>2h 49min</Text>
                <Text style={styles.textData}>Adventure, Drame, Sci-Fi</Text>
              </View>
              <View style={styles.imgAndResume}>
                <Image source={film} style={styles.filmImg} />
                <View style={styles.filmResume}>
                  <Text style={styles.resume}>
                    A team of eplorers travel through a wormhole in space in an
                    attempt to ensure humanity's survival.
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+ ADD TO WATCHLIST</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.rates}>
                <View style={styles.star}>
                  <FontAwesome name="star" size={24} color="#E6B91E" />
                  <View style={styles.rateStar}>
                    <Text style={styles.rate01}>8.6</Text>
                    <Text style={styles.rate02}>/10</Text>
                  </View>
                  <Text style={styles.rateNumber}>1.1M</Text>
                </View>
                <View style={styles.emptyStar}>
                  <FontAwesome name="star-o" size={24} color="#fff" />
                  <Text style={styles.emptyStarText}>RATE THIS</Text>
                </View>
                <View style={styles.score}>
                  <View style={styles.metascoreRate}>
                    <Text style={styles.metascoreNumber}>74</Text>
                  </View>
                  <Text style={styles.metascoreName}>Metascore</Text>
                  <Text style={styles.metascoreReviews}>46 critic reviews</Text>
                </View>
              </View>
            </View>
            <View style={styles.actorInfos}>
              <View style={styles.cast}>
                <View style={styles.castTop}>
                  <Text style={styles.topTitle}>Top Billed Cast</Text>
                  <TouchableOpacity style={styles.allButton}>
                    <Text style={styles.textSeeAllButton}>SEE ALL</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.actorsCarroussel}
                  contentContainerStyle={{ gap: 10 }}
                >
                  <View style={styles.actor}>
                    <Image source={matthew} style={styles.actorPic} />
                    <Text
                      style={styles.actorRealName}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Matthew McConaughey
                    </Text>
                    <Text style={styles.characterName}>Cooper</Text>
                  </View>
                  <View style={styles.actor}>
                    <Image source={anne} style={styles.actorPic} />
                    <Text style={styles.actorRealName}>Anne Hathaway</Text>
                    <Text style={styles.characterName}>Brand</Text>
                  </View>
                  <View style={styles.actor}>
                    <Image source={jessica} style={styles.actorPic} />
                    <Text style={styles.actorRealName}>Jessica Chastain</Text>
                    <Text style={styles.characterName}>Murph</Text>
                  </View>
                  <View style={styles.actor}>
                    <Image source={mackenzie} style={styles.actorPic} />
                    <Text style={styles.actorRealName}>Mackenzie Foy</Text>
                    <Text style={styles.characterName}>Murph</Text>
                  </View>
                </ScrollView>
                <View style={styles.bottomView}>
                  <Text style={styles.post}>Director</Text>
                  <Text style={styles.name}>Christopher Nolan</Text>
                </View>
                <View style={styles.bottomView}>
                  <Text style={styles.post}>Writers</Text>
                  <Text style={styles.name}>
                    Jonathan Nolan (written by) and Christopher Nolan (written
                    by)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
};

export default App;
