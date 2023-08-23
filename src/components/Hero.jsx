import {useContext} from 'react'
import { Context } from '../App'

function Hero() {
  const { showChefBot, setShowChefBot } = useContext(Context)

  const handleShow = () => {
    if(!showChefBot){
      setShowChefBot(true)
    }
  }

  return (
    <div className='hero'>
        <h1 className='hero-title'>Have all the ingredients but can&apos;t decide what to make?</h1>
        <p className='hero-desc'>Everyday in the evening do you ask the same question to yourself?
            What should I make for dinner today? if yes then do not worry,
            Chef Droid is here to solve that eternity long question for you.
            Just enter the list of ingredients that you have at your disposal
            and our smart AI will give you five of the best recipes for you to work with.
        </p>
        <button className=' btn from-left hero-btn' onClick={handleShow}>Try Now !</button>
    </div>
  )
}

export default Hero