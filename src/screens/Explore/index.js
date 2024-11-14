import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets/';
import Style from './styles';

const index = () => {
  return (
    <SafeAreaView>
      <View style={{weight: '100%', height: '100%',backgroundColor:'white'}}>
        <View style={Style.dubaiBar}>
          <Image source={Images.dubai} style={Style.dubai}></Image>
        </View>
        <View>
          <Text style={Style.dubaiText}>Dubai</Text>
        </View>
        <View style={Style.maldivesBar}>
          <Image source={Images.maldives} style={Style.maldives}></Image>
        </View>
        <View>
          <Text style={Style.maldivesText}>Maldives</Text>
        </View>
        <View style={Style.baliBar}>
          <Image source={Images.bali} style={Style.bali}></Image>
        </View>
        <View>
          <Text style={Style.baliText}>Bali</Text>
        </View>
        <View style={Style.veniceBar}>
          <Image source={Images.venice} style={Style.venice}></Image>
        </View>
        <View>
          <Text style={Style.veniceText}>Venice</Text>
        </View>
        <View style={Style.londonBar}>
          <Image source={Images.london} style={Style.london}></Image>
        </View>
        <View>
          <Text style={Style.londonText}>London</Text>
        </View>
        <View style={Style.threePoints}>
          <Image source={Icons.threePoints}></Image>
        </View>
        <View>
          <Text style={Style.recommended}>Recommended</Text>
        </View>
        <View>
          <Text style={Style.viewAllR}>View All</Text>
        </View>
      </View>
      <View style={Style.recommendedMid}>
        <ImageBackground
          source={Images.maldives}
          style={Style.recommendedMidImage}>
          <View style={Style.heartBar}>
            <Image source={Icons.heart} style={Style.heart}></Image>
          </View>
          <Image
            source={Icons.locationWhite}
            style={Style.locationWhiteImage}></Image>
          <Text style={Style.locationWhiteText}>Blabla, Maldives</Text>
          <Image source={Icons.star} style={Style.star}></Image>
          <Text style={Style.score}>4.5</Text>
        </ImageBackground>
      </View>
      <View style={Style.recommendedLeft}>
        <ImageBackground
          source={Images.london}
          style={Style.recommendedMidImage}>
          <View style={Style.heartBar}>
            <Image source={Icons.heart} style={Style.heart}></Image>
          </View>
          <Image
            source={Icons.locationWhite}
            style={Style.locationWhiteImage}></Image>
          <Text style={Style.locationWhiteText}>Blabla, London</Text>
          <Image source={Icons.star} style={Style.star}></Image>
          <Text style={Style.score}>4.5</Text>
        </ImageBackground>
      </View>
      <View style={Style.recommendedRight}>
        <ImageBackground source={Images.bali} style={Style.recommendedMidImage}>
          <View style={Style.heartBar}>
            <Image source={Icons.heart} style={Style.heart}></Image>
          </View>
          <Image
            source={Icons.locationWhite}
            style={Style.locationWhiteImage}></Image>
          <Text style={Style.locationWhiteText}>Blabla, Bali</Text>
          <Image source={Icons.star} style={Style.star}></Image>
          <Text style={Style.score}>4.5</Text>
        </ImageBackground>
      </View>
      <View>
        <Text style={Style.popular}>Popular Destination</Text>
      </View>
      <View>
        <Text style={Style.viewAllP}>View All</Text>
      </View>
      <View style={Style.pd1}>
        <View style={Style.pdImageBar}>
          <ImageBackground source={Images.venice} style={Style.pdImage}>
            <Image source={Icons.star} style={Style.starPD}></Image>
            <Text style={Style.scorePD}>4.5</Text>
          </ImageBackground>
        </View>
        <Text style={Style.enjoy1}>Enjoy Your</Text>
        <Text style={Style.enjoy2}>Summer Vacation</Text>
        <Text style={Style.location}>Blabla, Venice</Text>
        <Image source={Icons.location} style={Style.locationImage}></Image>
        <Text style={Style.from}>From</Text>
        <Text style={Style.price}>200$ /</Text>
        <Text style={Style.perPerson}>Per Person</Text>
      </View>
      <View style={Style.pd2}>
        <View style={Style.pdImageBar}>
          <ImageBackground source={Images.bali} style={Style.pdImage}>
            <Image source={Icons.star} style={Style.starPD}></Image>
            <Text style={Style.scorePD}>4.5</Text>
          </ImageBackground>
        </View>
        <Text style={Style.enjoy1}>Best place for</Text>
        <Text style={Style.enjoy2}>honeymoon</Text>
        <Text style={Style.location}>Blabla, Bali</Text>
        <Image source={Icons.location} style={Style.locationImage}></Image>
        <Text style={Style.from}>From</Text>
        <Text style={Style.price}>200$ /</Text>
        <Text style={Style.perPerson}>Per Person</Text>
      </View>
      <View style={Style.pd3}>
      <View style={Style.pdImageBar}>
          <ImageBackground source={Images.london} style={Style.pdImage}>
            <Image source={Icons.star} style={Style.starPD}></Image>
            <Text style={Style.scorePD}>4.5</Text>
          </ImageBackground>
        </View>
        <Text style={Style.enjoy1}>Enjoy in a Farm</Text>
        <Text style={Style.enjoy2}>House</Text>
        <Text style={Style.location}>Blabla, London</Text>
        <Image source={Icons.location} style={Style.locationImage}></Image>
        <Text style={Style.from}>From</Text>
        <Text style={Style.price}>200$ /</Text>
        <Text style={Style.perPerson}>Per Person</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
