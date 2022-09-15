import { ImageBackground, View } from 'react-native';

import backgroundImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children } : Props ) {
  return (
    <ImageBackground 
    source={backgroundImg}
    defaultSource={backgroundImg}
    style={styles.container} >    
    {children}
    </ImageBackground>


    
  );
}