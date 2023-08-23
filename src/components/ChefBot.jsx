import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { motion } from 'framer-motion'
import chefBotImg from '../assets/chefBot.png'

function ChefBot() {
  const tempText = 'Give me all the ingredients you have and I will give you my best 5 recipes. Make sure to add " , " between your ingredients'
  const [ botText, setBotText ] = useState(tempText)
  const [ userInput, setUserInput ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <motion.section
      initial={{ y: '50%' }}
      animate={{ y: '0' }}
      transition={{ delay: '0.1'}}
      layout
      className="bot-container"
    >
        <div className="chefBot-container">
          <div className="chefBot">
            <img className="botImg" src={chefBotImg} alt="bot-gif" />
            <div className="botChatBox">{botText}</div>
          </div>
          <form
            action="post"
            onSubmit={handleSubmit}
            className="userInput-form"
          >
            <input
              type="text"
              className="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="form-btn">
              <IconContext.Provider value={{ color: "#ffffff", size: "1.8rem" }}>
                <BsSend className="send-icon" />
              </IconContext.Provider>
            </button>
          </form>
        </div>
    </motion.section>
  );
}

export default ChefBot