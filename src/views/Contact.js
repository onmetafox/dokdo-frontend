import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { createContactAsync, selectStatus, selectMsg } from 'src/features/contact/contactSlice';
import { validateEmail } from 'src/libs/validate';

import Success from 'src/components/Success';

const ContactPage = () => {
  const dispath = useDispatch();
  const status = useSelector(selectStatus);
  const msg = useSelector(selectMsg);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [comment, setComment] = useState();
  const [emailErr, setEmailErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [commentErr, setCommentErr] = useState('');
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [success, setSuccess] = useState(false);

  function validatePhoneNumber(phoneNumber) {
    // Regular expression to match a phone number in the format +37495220490
    const phoneRegex = /^\+\d{7,15}$/;
  
    // Check if the phone number matches the regular expression
    if (phoneRegex.test(phoneNumber)) {
      return true; // Phone number is valid
    } else {
      return false; // Phone number is invalid
    }
  }

  const handleEmailChange = value => {
    setEmailErr('');
    setEmail(value)
  };
  
  const handlePhoneNumberChange = value => {
    setPhoneErr('');
    setPhone(value);
  };

  const handleNameChange = value => {
    setNameErr('');
    setName(value)
  };

  const handleCommentChange = value => {
    setCommentErr('');
    setComment(value)
  };

  const checkEmail = useCallback(() => {
    let check = true;
    setEmailErr('');
    if (email && !validateEmail(email)) {
      setEmailErr('Email is not valid!');
      check = false;
    }
    return check;
  }, [email]);

  const checkPhone = useCallback(() => {
    let check = true;
    setPhoneErr('');
    if (phone && !validatePhoneNumber(phone)) {
      setPhoneErr('Phone number is not valid!');
      check = false;
    }
    return check;
  }, [phone]);

  const validate = useCallback(() => {
    let check = true;
    setEmailErr('');
    setNameErr('');
    setPhoneErr('');
    setCommentErr('');

    if (!email) {
      setEmailErr('Email is required!');
      check = false;
    } else if (!validateEmail(email)) {
      setEmailErr('Email is not valid!');
      check = false;
    }
    if (!name) {
      setNameErr('Name is required.');
      check = false;
    }
    if (!phone) {
      setPhoneErr('Phone Number is required.');
      check = false;
    } else if (!validatePhoneNumber(phone)) {
      setPhoneErr('Phone number is not valid!');
      check = false;
    }
    if (!comment) {
      setCommentErr('Comment is required.');
      check = false;
    }
    return check;
  }, [email, name, comment, phone]);

  const handlerContact = useCallback(() => {
    if (validate()) {
      dispath(createContactAsync({ email, name, phone, comment }));
    }
  }, [dispath, email, comment, name, phone, validate]);

  useEffect(() => {
    if (status === 'Success') {
      setOpen(true);
      setTitle('Thank you');
      setSuccess(true);
    } else {
      setTitle('Faield');
      setSuccess(false);
    }
  }, [status]);

  const handlerDialog = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Box className="contact-section p-tb-80">
      <Container maxWidth="xl">
        <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={5}>
          <Grid item xs={12} md={12} lg={5}>
            <Box className="h2 t-p"> Contact us for partnership</Box>
            <Box className="fs-s2 t-p p-tb-20">Interested in working with us? Let's get acquainted.</Box>
          </Grid>
          <Grid item xs={12} md={12} lg={7}>
            <Box className="contact-box">
              <Input handler={handleEmailChange} value={email} placeHolder="Email" error={emailErr} onBlur={checkEmail} />
              <Input handler={handlePhoneNumberChange} value={phone} placeHolder="Phone number" error={phoneErr} onBlur={checkPhone} />
              <Input handler={handleNameChange} value={name} placeHolder="Name" error={nameErr} />
              <Input
                handler={handleCommentChange}
                value={comment}
                placeHolder="Comment"
                multiple={true}
                rows={4}
                error={commentErr}
              />
              <Button handler={handlerContact} className="btn bg-gp t-p btn-sm p-lr-10" title="Send" />
            </Box>
          </Grid>
        </Grid>
        <Success open={open} msg={msg} success={success} title={title} closeDlg={handlerDialog} />
      </Container>
    </Box>
  );
};

export default ContactPage;
