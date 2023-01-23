import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { doc, updateDoc } from 'firebase/firestore';
import { PopupStyles } from './Styles';
const PostponeSection = ({
  setPostponeOpen,
  determineDoc,
  selected,
  firestore,
  user,
}) => {
  const [date, setDate] = useState(moment());

  const handleAccept = async () => {
    setPostponeOpen(false);
    const documentName = await determineDoc(selected.id, firestore, user.uid);
    await updateDoc(doc(firestore, user.uid, documentName), {
      deadline: date.format(),
    });
  };
  return (
    <PopupStyles>
      <StaticDateTimePicker
        displayStaticWrapperAs='mobile'
        value={date}
        onChange={newValue => {
          setDate(newValue);
        }}
        onAccept={handleAccept}
        disablePast
        ampm={false}
        renderInput={params => <TextField {...params} />}
        componentsProps={{
          actionBar: {
            actions: ['today', 'accept'],
          },
        }}
      />
    </PopupStyles>
  );
};

export default PostponeSection;
