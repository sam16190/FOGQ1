import { Box, Text, Button } from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';
import axios from 'axios';

function Specifications() {
  const [settingsData, setSettingsData] = useState([]);
  const [advancedData, setAdvancedData] = useState([]);
  const [rulesData, setRulesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/settings')
      .then(response => {
        setSettingsData(response.data);
      })
      .catch(err => {
        console.error('Error fetching settings data:', err);
      });

    axios.get('http://localhost:4000/api/advanced')
      .then(response => {
        setAdvancedData(response.data);
      })
      .catch(err => {
        console.error('Error fetching advanced data:', err);
      });

    axios.get('http://localhost:4000/api/rules')
      .then(response => {
        setRulesData(response.data);
      })
      .catch(err => {
        console.error('Error fetching rules data:', err);
      });
  }, []);

  return (
    <Box>
      {settingsData.length > 0 && (
        <Box display="inline-block" mr="72px">
          <Text fontSize="12px" color="white">SETTINGS</Text>
          <Box display="flex" flexDirection="column">
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px" fontSize="14px" fontFamily="sans-serif">REGION</Text>
              <Text fontSize="14px" fontFamily="sans-serif">{settingsData[0].region}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px" fontSize="14px" fontFamily="sans-serif">PUNKBASTER</Text>
              {settingsData[0].punkbaster ? <Text fontSize="14px" fontFamily="sans-serif">ON</Text> : <Text fontSize="14px" fontFamily="sans-serif">OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px" fontSize="14px" fontFamily="sans-serif">FAIRFIGHT</Text>
              {settingsData[0].fairfight ? <Text fontSize="14px" fontFamily="sans-serif">ON</Text> : <Text fontSize="14px" fontFamily="sans-serif">OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px" fontSize="14px" fontFamily="sans-serif">PASSWORD</Text>
              {settingsData[0].password ? <Text fontSize="14px" fontFamily="sans-serif">ON</Text> : <Text fontSize="14px" fontFamily="sans-serif">OFF</Text>}
            </Button>
            <Button
              fontSize="14px"
              fontFamily="sans-serif"
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">PRESET</Text>
              <Text>{settingsData[0].preset}</Text>
            </Button>
          </Box>
        </Box>
      )}
      {advancedData.length > 0 && (
        <Box display="inline-block" mr="72px">
          <Text fontSize="12px" color="white">ADVANCED</Text>
          <Box display="flex" flexDirection="column">
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">MINIMAP</Text>
              <Text>{advancedData[0].minimap ? 'ON' : 'OFF'}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">ONLY SQUAD LEADER SPAWN</Text>
              {advancedData[0].onlysquadleaderspawn ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">VEHICLES</Text>
              {advancedData[0].vehicles ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">TEAM BALANCE</Text>
              {advancedData[0].teambalance ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">MINIMAP SPOTTING</Text>
              <Text>{advancedData[0].minimapspotting}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">HUD</Text>
              {advancedData[0].hud ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">3P VEHICLE CAM</Text>
              {advancedData[0].threepvehiclecam ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">REGENERATIVE HEALTH</Text>
              {advancedData[0].regenerativehealth ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">KILL CAM</Text>
              {advancedData[0].killcam ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">FRIENDLY FIRE</Text>
              {advancedData[0].friendlyfire ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">3D SPOTTING</Text>
              {advancedData[0].threedspotting ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">ENEMY NAME TAGS</Text>
              {advancedData[0].enemynametags ? <Text>ON</Text> : <Text>OFF</Text>}
            </Button>
          </Box>
        </Box>
      )}
      {rulesData.length > 0 && (
        <Box display="inline-block">
          <Text fontSize="12px" color="white">RULES</Text>
          <Box display="flex" flexDirection="column">
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">TICKETS</Text>
              <Text>{rulesData[0].tickets}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">VEHICLE SPAWN DELAY</Text>
              <Text>{rulesData[0].vehiclespawndelay}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">BULLET DAMAGE</Text>
              <Text>{rulesData[0].bulletdamage}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">KICK AFTER TEAM KILLS</Text>
              <Text>{rulesData[0].kickafterteamkills}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">PLAYER HEALTH</Text>
              <Text>{rulesData[0].playerhealth}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">PLAYER RESPAWN TIME</Text>
              <Text>{rulesData[0].playerrespawntime}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">KICK AFTER IDLE</Text>
              <Text>{rulesData[0].kickafteridle}</Text>
            </Button>
            <Button
              color="white"
              bgColor="transparent"
              borderBottomWidth="1px"
              borderColor="whitesmoke"
              mb="4px"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              <Text mr="16px">BAN AFTER KICKS</Text>
              <Text>{rulesData[0].banafterkicks}</Text>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Specifications;
