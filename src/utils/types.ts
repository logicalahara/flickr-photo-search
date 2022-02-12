import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ImgMeta = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

export type ImgSearchProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'imgSearch'>;
};

export type ImgDetailProps = {
  route: RouteProp<AppStackParamList, 'imgDetail'>;
};

export type AppStackParamList = {
  //
  imgSearch: undefined;
  //
  imgDetail: ImgMeta;
};

export default null;
