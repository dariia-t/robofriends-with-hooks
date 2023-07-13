import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {createUseStyles} from 'react-jss'
import {saveAs} from "file-saver"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'
import LikeButton from "./LikeButton"
import Button from "./Button"

const useStyles = createUseStyles({
    myInfo: {
        textAlign: 'center',
        backgroundColor: '#9eebce',
        display: 'flow',
        padding: '3rem',
        margin: '2rem',
        borderRadius: '0.5rem',
    },
    desc: {
      margin: '10px auto',
      color: '#9eebce',
      fontSize: '1rem',
      backgroundColor: '#375f7f',
      borderRadius: '0.5rem',
      padding: '2rem',
      width: '70%',
    },
    share: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '200px',
      margin: '0 auto',
      padding: '10px 0',
    }
})


const CardDetails = ({type}) => {
    const { id } = useParams();
    const [robot, setRobot] = useState(null);
    const classes = useStyles();

    const handleClick = ()=>{
      let url = `https://robohash.org/${id}?200x200`;
      saveAs(url, `Robot-${id}`);
    }
    const description = ["This towering humanoid robot is designed for heavy lifting and construction tasks. Its immense strength allows it to effortlessly move massive objects and operate in hazardous environments. However, its large size and weight limit its agility and maneuverability. It has advanced sensors that mimic human balance, allowing it to maintain stability even on uneven terrain.",
      "This sleek and agile robot is equipped with high-speed processors and advanced sensors. Its speed and precision make it ideal for tasks requiring quick reflexes and accurate movements. However, its compact design limits its strength, making it unsuitable for heavy-duty operations. Its sensors are inspired by nocturnal animals, granting it exceptional low-light vision.",
      "This small and nimble robot is specialized in electrical repairs and maintenance. Its compact size allows it to access tight spaces, and it is equipped with an array of tools for intricate tasks. However, its lightweight construction makes it vulnerable to rough handling and extreme weather conditions. It has an energy-efficient design that enables it to recharge itself using solar power.",
      "This formidable combat robot is built for military operations. It possesses heavy armor and advanced weapon systems, making it a formidable force on the battlefield. However, its sheer size and power consumption limit its mobility and operational duration. Its modular design allows it to swap weapon systems quickly, adapting to various combat scenarios.",
      "This intelligent companion robot is designed to assist in daily tasks and provide emotional support. It possesses advanced speech recognition and natural language processing capabilities. However, its physical strength is limited, making it reliant on humans for tasks requiring significant force. It can learn and adapt to its owner's preferences, creating a personalized experience.",
      "This speed-focused robot is designed for competitive racing. It boasts powerful motors, aerodynamic design, and advanced control algorithms, making it a top contender on the racetrack. However, its lightweight structure makes it prone to damage from collisions. It holds multiple records for the fastest lap times in various robot racing competitions.",
      "This versatile underwater exploration robot is equipped with high-resolution cameras, sonar systems, and dexterous robotic arms, enabling it to navigate and investigate the depths of the ocean. However, its dependency on external power sources limits its exploration range. Its design is inspired by bioluminescent sea creatures, allowing it to emit its own light signals.",
      "This medical assistance robot is designed to support healthcare professionals. It possesses a wide range of medical knowledge and can perform tasks such as monitoring vital signs and assisting in surgeries. However, it lacks human-like empathy, which can affect patient comfort in certain situations. Its dexterity and precision in surgical procedures exceed human capabilities.",
      "This highly intelligent and resourceful robot is proficient in problem-solving and data analysis. Its vast computing power and memory storage allow it to process complex algorithms and provide valuable insights. However, its physical abilities are limited, making it reliant on humans for executing tasks that require manual interaction. It holds multiple patents for innovative technological solutions.",
      "This advanced lunar exploration robot is sent to study the moon's surface. It is equipped with a suite of scientific instruments, including cameras, spectrometers, and soil analyzers. However, its operational capabilities are affected by the challenging lunar environment, such as extreme temperature variations and limited power resources. It played a crucial role in discovering previously unknown lunar geological features during its missions."
    ];

    const points = [100, 120, 130, 140, 150, 160, 170, 180, 190, 200];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(robotData => setRobot(robotData));
    }, [id]);

  if (!robot) {
    return <h1>`</h1>;
  }

  return (
    <div>
        <h1 >Information about {robot.name}</h1>
            <div className={classes.myInfo}>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h3>{robot.name}</h3>
                <h4>{points[id-1]+ ' XP'}</h4>
                <p className={classes.desc}>{description[id-1]}</p>
                <Button label={'Download Robot Image'} onClick={handleClick} style={{color: '#0ccac4', backgroundColor: '#05375f'}}/>
                <div className={classes.share}>
                  <FacebookShareButton
                      url={`https://robohash.org/${id}?200x200`}
                      quote={'Robot Image!'}
                      hashtag="#robofriends"
                  >
                    <FacebookIcon size={64} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://robohash.org/${id}?200x200`}
                    quote={'Robot Image!'}
                    hashtag="#robofriends"
                  >
                    <TwitterIcon size={64} round/>
                  </TwitterShareButton>
                  <LikeButton id={id} type={type}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CardDetails;