import React, { Component } from 'react'
import {
    ListView,
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native'

// Row data (hard-coded)
const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export default class Invite extends Component {

  state = {
    dataSource: ds.cloneWithRows(rows)
  }

  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  render() {
    return (
        <View>
            <StatusBar hidden={true} />
            {/*Header Section  */}
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Invite Friend</Text>
            </View>
            {/*ListView Section  */}
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'red',
  },
  headerText: {
      textAlign: 'center',
      fontSize: 30,
      marginTop: 5
  },
  headerView: {
      padding: 20,
      borderWidth: 1
  }
})

