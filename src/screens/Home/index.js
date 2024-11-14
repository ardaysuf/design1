import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets/';
import Style from './styles';

const index = () => {
  return (
    <SafeAreaView style={Style.container} edges={['left', 'right']}>
      <View style={{weight: '100%', height: '100%'}}>
        <ImageBackground
          source={Images.mountain}
          style={Style.backgroundImage}
          resizeMode="cover">
          <View style={Style.menu}>
            <Image source={Icons.menu} style={{margin: 6.5}}></Image>
          </View>
          <View style={Style.notifications}>
            <Image source={Icons.notifications}></Image>
          </View>
          <View style={Style.profileBar}>
            <Image source={Images.profile} style={Style.profile}></Image>
          </View>
          <View>
            <Text style={Style.helloText}>Hello! Arda</Text>
          </View>
          <View>
            <Text style={Style.whereText}>Where would you like to go?</Text>
          </View>
          <View style={Style.flightBar}>
            <Image source={Icons.flight} style={Style.flight}></Image>
            <Text style={Style.flightText}>Flight</Text>
          </View>
          <View style={Style.hotelBar}>
            <Image source={Icons.hotel} style={Style.hotel}></Image>
            <Text style={Style.hotelText}>Hotel</Text>
          </View>
          <View style={Style.holidayBar}>
            <Image source={Icons.holiday} style={Style.holiday}></Image>
            <Text style={Style.holidayText}>Holiday</Text>
          </View>
          <View style={Style.offersBar}>
            <Image source={Icons.offers} style={Style.offers}></Image>
            <Text style={Style.offersText}>Offers</Text>
          </View>
        </ImageBackground>
        <View style={Style.panel}>
          <View style={Style.searchBar}>
            <Image
              source={Icons.search}
              style={{marginLeft: 25, marginBottom: 20, marginTop: 18}}></Image>
            <Text style={Style.searchBarText}>Where to go</Text>
          </View>
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
          <View style={Style.containerRecommend}>
            <Text style={Style.recommended}>Recommended</Text>
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
          <ImageBackground
            source={Images.bali}
            style={Style.recommendedMidImage}>
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
        <View style={Style.containerPopular}>
          <Text style={Style.popular}>Popular Destination</Text>
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
      </View>
    </SafeAreaView>
  );
};
export default index;
