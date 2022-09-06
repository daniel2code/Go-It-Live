import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {primaryColor} from '../../../../helper/theme';
import {shadowProp} from '../../../../helper/theme';
import PieChart from 'react-native-pie-chart';

const Index = ({navigation}) => {
  const widthAndHeight = 250;
  const series = [10, 4];
  const sliceColor = ['#000', primaryColor];

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          tw`h-14 w-full flex-row  items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Icon
          name="keyboard-backspace"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={[tw`text-black font-semibold ml-3`, {fontSize: 20}]}>
          Income
        </Text>
      </View>

      <View style={[tw`p-5`]}>
        <Text style={[tw`text-black text-2xl font-bold`]}>Hi Pfeelings,</Text>
        <Text style={[tw`text-sm text-black my-4 `]}>
          View the progress of the income you have made so far, Keep going live.
        </Text>

        <View style={[tw`items-center p-3 mt-6`, {borderRadius: 30}]}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },
});
