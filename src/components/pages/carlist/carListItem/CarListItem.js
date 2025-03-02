import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Badge } from 'reactstrap';

const CarListItem = ({ info }) => {
  const {
    carName,
    imgUrl,
    ridingCapacity,
    battery,
    fullChargeRange,
    subsidy,
    topSpeed,
    callNumber,
    company,
    country,
    locationUrl,
  } = info;

  const handleCarInfoBoxClick = () => {
    window.location.href = locationUrl;
  };

  return (
    <Grid item className='carInfo' onClick={handleCarInfoBoxClick}>
      <div className='carName'>{carName}</div>
      <Badge
        color='dark'
        // pill
        style={{
          width: 'fit-content',
          height: 'fit-content',
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          fontSize: '15px',
        }}
      >
        {company}
      </Badge>
      <div className='imageContainer'>
        <img
          src={`https://ev.or.kr${imgUrl}`}
          alt='CarA'
          style={{ width: '100%', overflow: 'hidden' }}
        />
      </div>
      <Typography
        variant='body2'
        className='carStat'
        style={{ marginTop: '10px' }}
      >
        <strong>승차인원</strong>: {ridingCapacity}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>배터리</strong>: {battery}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>1회충전 주행거리</strong>: {fullChargeRange}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>지원금</strong>: {subsidy}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>최고속도</strong>: {topSpeed}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>제조국</strong>: {country}
      </Typography>
      <Typography variant='body2' className='carStat'>
        <strong>판매사 연락처</strong>: {callNumber}
      </Typography>
      <FontAwesomeIcon icon={faExpand} className='expandIcon' />
    </Grid>
  );
};

export default CarListItem;
