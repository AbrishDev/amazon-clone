import React from 'react';
import CatagoryCard from './CatagoryCard';
import {catagoryImage} from './CatagoryFullInfos';
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <section className={classes.catagory_container}>
        {
        catagoryImage.map((infos) => (
            <CatagoryCard data ={infos} />
        ))
        }
    </section>
  )
}

export default Catagory