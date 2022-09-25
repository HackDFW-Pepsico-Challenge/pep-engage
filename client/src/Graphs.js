import { useD3 } from './hooks/useD3';
import axios from 'axios'
import {useEffect, useState} from 'react';
import React from 'react';
import * as d3 from 'd3';

function Graphs() {
    const [imageOne, setImageOne] = useState()
    const [imageTwo, setImageTwo] = useState()
    const [imageThree, setImageThree] = useState()
    let testOutput = 'http://127.0.0.1:5000/static/output3.png'
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/countySales')
            .then(response => {
                //console.log(response)
                setImageOne('http://127.0.0.1:5000/static/graph_one.png')
            })
            .catch((error) => {
                console.log('error: ' + error);
              });        
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/countyWorstProd')
              .then(response => {
                  setImageTwo('http://127.0.0.1:5000/static/graph_two.png')
              })
              .catch((error) => {
                  console.log('error: ' + error);
                });        
      }, [])

    useEffect(() => {
    axios.get('http://127.0.0.1:5000/channelSales')
            .then(response => {
                console.log(response.data)
                setImageThree('http://127.0.0.1:5000/static/graph_three.png')
            })
            .catch((error) => {
                console.log('error: ' + error);
            });        
    }, [])

    return (
        <div>
            <img src={imageOne} style={{"width": "60%"}}></img>
            <img src={imageThree} style={{"width": "35%"}}></img>
            <img src={imageTwo} style={{"width": "60%"}}></img>
            {/* <img src={imageTwo} style={{"width": "50%"}}></img> */}
      </div>
    )
}

export default Graphs