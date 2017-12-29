import Drawer from 'react-native-drawer'
import{Text,View, Button} from 'react-native'
import React, {Component} from "react"

class Test extends Component {
  state = {  }
  render() {
    return (
        <View >
      
      <Text>Ibad is in drawer</Text>
        </View >

    );
  }
}

class App extends Component { 
  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        type="static"
        content={<Test />}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        ref={ref=>this._drawer = ref}
        >
        <View >
          <Button onPress={this.openControlPanel} title="Press Here"/>
        </View >
      </Drawer>
    )
  }
}
export default App;



const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}