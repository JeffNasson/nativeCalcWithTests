import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      num1: null,
      num2: null,
      total: null
    }
    this.multiplier=this.multiplier.bind(this)
    this.divider=this.divider.bind(this)
    this.subtractor=this.subtractor.bind(this)
    this.adder=this.adder.bind(this)
  }

  changeToNums=(num1,num2)=>{
    num1 = parseInt(this.state.num1)
    num2 = parseInt(this.state.num2)
    return num1,num2
  }

  multiplier=(val)=>{
    console.log(this.changeToNums())
    let num1 = parseInt(this.state.num1)
    // console.log(num1)
    let num2 = parseInt(this.state.num2)
    // console.log(num2)
   val = num1 * num2
   this.setState({total: val, num1: null, num2: null})
  }

  divider=()=>{
    let num1 = parseInt(this.state.num1)
    console.log(num1)
    let num2 = parseInt(this.state.num2)
    console.log(num2)
    val = num1 / num2
   this.setState({total: val, num1: null, num2: null})
  }

  subtractor=()=>{
    let num1 = parseInt(this.state.num1)
    console.log(num1)
    let num2 = parseInt(this.state.num2)
    console.log(num2)
    val = num1 - num2
   this.setState({total: val, num1: null, num2: null})
  }

  adder=()=>{
    let num1 = parseInt(this.state.num1)
    console.log(num1)
    let num2 = parseInt(this.state.num2)
    console.log(num2)
    val = num1 + num2
   this.setState({total: val, num1: null, num2: null})
  }

  
  render() {


    return (
      // Access the container property in the styles object
      <View style={styles.container}>
        <Text>Multiply 10 by 2 in curly braces = {10*2}</Text>
        <Text>Divide 10 by 2 in curly braces = {10/2}</Text>
        <Text>Add 10 and 2 in curly braces = {10+2}</Text>
        <Text>Subtract 2 from 10 in curly braces = {10-2}</Text>
        <TextInput 
          placeholder='import TextInput tag from "react-native" '
          onChangeText={(text)=>this.setState({text})}
        />
        <Text>Displaying state output: {this.state.text}</Text>

        <View style={styles.calculator}>
          <Text>Calculator</Text>
          <TextInput 
            placeholder='first number'
            value={this.state.num1}
            onChangeText={(num1)=>this.setState({num1})}
          />
          <TextInput 
            placeholder='second number'
            onChangeText={(num2)=>this.setState({num2})}
            value={this.state.num2}
          />
          <Button
            title='multiply'
            onPress={this.multiplier}
          />
          <Button 
            title='divide'
            onPress={this.divider}
          />
          <Button 
            title='subtract'
            onPress={this.subtractor}
          />
          <Button 
            title='add'
            onPress={this.adder}
          />

          {
            this.state.total != null ? 
            (<Text>Total: {this.state.total}</Text>) : (null)
          }
        </View>
      </View>
    );
  }
}

// Stylesheet is used to create styled components and variables
const styles = StyleSheet.create({
  container: {
    // since it is a positive value it is sized proportional to the assigned values. 2 would take twice as much space as 1. 0 would render the space inflexible
    flex: 1, 
    // a pink background color
    backgroundColor: '#f3f3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calculator:{
    flex: 0,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1
  },
})
// FLEX
// In React Native flex does not work the same way that it does in CSS. flex is a number rather than a string, and it works according to the Yoga library at https://github.com/facebook/yoga
// When flex is a positive number, it makes the component flexible and it will be sized proportional to its flex value. So a component with flex set to 2 will take twice the space as a component with flex set to 1.
// When flex is 0, the component is sized according to width and height and it is inflexible.
// When flex is -1, the component is normally sized according width and height. However, if there's not enough space, the component will shrink to its minWidth and minHeight.



// Handling Text Input
// TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.

