import Bullet from './bullet';
import styles from '../styles/styles';
import Distance from './distance';

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

interface Props {
    name: string;
    distance: number;
    trains: Array<string>;
    onShow: () => void;
  }

const SimpleStation: React.FC<Props> = ({ name, distance, trains, onShow }) => {

  const first = trains.find(Boolean);
  const bgColor = first !== undefined ? styles[first].darkAccentBgColor : 'bg-white';

  return (
    <TouchableOpacity onPress={onShow} className="w-full" activeOpacity={0.8}>
      <View className={`rounded-xl ${bgColor} shadow w-full pt-1.5 pb-3 px-4 mt-6 flex flex-col`}>
          <View className="flex flex-row w-full justify-between items-center">
              <Text className="font-medium text-xl">
                  { name }
              </Text>
              <Distance distance = {distance} />
          </View>
          <View className="pt-1 flex flex-row flex-wrap gap-y-3">
            {trains.map((train) => 
              <View key={train} className="mr-2">
                <Bullet style={styles[train]} />
              </View>
            )}
          </View>
      </View>
    </TouchableOpacity>
  );
};
export default SimpleStation;