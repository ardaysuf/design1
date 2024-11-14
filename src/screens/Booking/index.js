import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets/';
import Style from './styles';

const index = () => {
  return (
    <SafeAreaView>
      <View style={{weight: '100%', height: '100%', backgroundColor: 'white'}}>
        <View>
          <Image source={Icons.threeLine} style={Style.threeLine}></Image>
        </View>
        <View>
          <Text style={Style.booking}>Booking</Text>
        </View>
        <View>
          <Image source={Icons.searchBlack} style={Style.searchBlack}></Image>
        </View>
        <View style={Style.ongoingBar}>
          <Text style={Style.ongoingText}>Ongoing</Text>
        </View>
        <View style={Style.completedBar}>
          <Text style={Style.completedText}>Completed</Text>
        </View>
        <View style={Style.cancelledBar}>
          <Text style={Style.cancelledText}>Cancelled</Text>
        </View>
        <View style={Style.book1}>
          <Image source={Images.hotelRoom} style={Style.hotelRoomImage}></Image>
          <Text style={Style.hotelName}>Intercontinental Hotel</Text>
          <Text style={Style.location}>Lagos, Nigeria</Text>
          <View style={Style.paidBar}>
            <Text style={Style.paidText}>Paid</Text>
          </View>
          <View style={Style.line}></View>
          <View style={Style.cancelBookingBar}>
            <Text style={Style.cancelBookingText}>Cancel Booking</Text>
          </View>
          <View style={Style.viewTicketBar}>
            <Text style={Style.viewTicketText}>View Ticket</Text>
          </View>
        </View>
        <View style={Style.book2}>
          <Image source={Images.hotelRoom} style={Style.hotelRoomImage}></Image>
          <Text style={Style.hotelName}>Intercontinental Hotel</Text>
          <Text style={Style.location}>Lagos, Nigeria</Text>
          <View style={Style.paidBar}>
            <Text style={Style.paidText}>Paid</Text>
          </View>
          <View style={Style.line}></View>
          <View style={Style.cancelBookingBar}>
            <Text style={Style.cancelBookingText}>Cancel Booking</Text>
          </View>
          <View style={Style.viewTicketBar}>
            <Text style={Style.viewTicketText}>View Ticket</Text>
          </View>
        </View>
        <View style={Style.book3}>
          <Image source={Images.hotelRoom} style={Style.hotelRoomImage}></Image>
          <Text style={Style.hotelName}>Intercontinental Hotel</Text>
          <Text style={Style.location}>Lagos, Nigeria</Text>
          <View style={Style.paidBar}>
            <Text style={Style.paidText}>Paid</Text>
          </View>
          <View style={Style.line}></View>
          <View style={Style.cancelBookingBar}>
            <Text style={Style.cancelBookingText}>Cancel Booking</Text>
          </View>
          <View style={Style.viewTicketBar}>
            <Text style={Style.viewTicketText}>View Ticket</Text>
          </View>
        </View>
        <View style={Style.bottomBar}>
          <Image source={Icons.home} style={Style.home}></Image>
          <Text style={Style.homeText}>Home</Text>
          <Image source={Icons.booking} style={Style.bookingImage}></Image>
          <Text style={Style.bookingText}>Booking</Text>
          <Image source={Icons.locationWhite} style={Style.locationWhiteM}></Image>
          <Text style={Style.locationWhiteText}>Location</Text>
          <Image source={Icons.profile} style={Style.profileM}></Image>
          <Text style={Style.profileMText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
