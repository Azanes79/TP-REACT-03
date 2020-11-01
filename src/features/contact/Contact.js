import React from 'react';
import { Grommet, Box, TextInput, TextArea, Button, Text } from 'grommet';
import Navigation from '../navigation/Navigation';
import { Send } from 'grommet-icons'
import './Contact.css';

import { useSelector } from 'react-redux';
import {
    getMode
} from '../color-mode/ColorMode';

const Contact = () => {

  let colorText;
  let borderButton;
  if (useSelector(getMode)) {
    colorText = 'black';
    borderButton = '#009d55';
  } else {
    colorText = 'white';
    borderButton = 'white';

  }

  return (
    <Grommet full plain>
      <Box fill="vertical">
        <Navigation />
        <Box className={useSelector(getMode) ? '' : 'background-second-dark color-light'} height="100%" pad="0 30%" justify="center" align="center" gap=" 10px">
          <Text size="32px" margin="0 0 100px 0" weight="bold">PRENDRE CONTACT</Text>
          <TextInput
            type="email"
            placeholder="Email"
            value=""
            className={useSelector(getMode) ? '' : 'border-dark'}
          />
          <TextArea
            resize="vertical"
            rows="10"
            placeholder="Message"
            value=""
            className={useSelector(getMode) ? '' : 'border-dark'}
          />
          <Button className={useSelector(getMode) ? '' : 'color-light'}  color={borderButton} icon={<Send  color={colorText} />} label="Envoyer" />
        </Box>
      </Box>
    </Grommet>
  );
}

export default Contact;
