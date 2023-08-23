import foodImg from '../assets/food.jpg'
import { motion } from 'framer-motion';

function ChefBotGif() {
  return (
    <motion.section
      className="bot-container">
      <div className="foodImg-container">
        <img className="food-img" src={foodImg} alt="bot gif" />
      </div>
    </motion.section>
  );
}


export default ChefBotGif