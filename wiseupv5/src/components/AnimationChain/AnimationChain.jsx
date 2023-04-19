import React, { useState, useEffect } from 'react'
import MovingText from 'react-moving-text'
 
const AnimationsForChaining = ["fadeIn", "swing", "flipSlowDown", "fadeOutToBottom", "jelly"]


const AnimationChain = (props) => {

  const [ animationIndex, setAnimationIndex ] = useState(2)

  useEffect(() => {
    setAnimationIndex([2]);
  }, []);

  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[animationIndex])
  // const [counter, setCounter] = ([]);


  const handleChainAnimation = () => {
    React.setCounter(animationIndex+1)
    setAnimationType(React.selectedItems[animationIndex+1])
  }
 
  return (
    <MovingText
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="6000ms"
      timing="linear"
      iteration="infinite">
      {props.diamond}
    </MovingText>
  )
}

export default AnimationChain