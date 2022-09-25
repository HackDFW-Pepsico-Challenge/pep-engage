import { useD3 } from './hooks/useD3';
import axios from 'axios'
import {useEffect, useState} from 'react';
import React from 'react';
import * as d3 from 'd3';

function Graphs() {
    const [images, setImages] = useState([])
    let imageOne = 'http://127.0.0.1:5000/static/graph_one.png'
    let imageTwo = 'http://127.0.0.1:5000/static/graph_two.png'
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/countySales')
            .then(response => {
                console.log(response.data)
                setImages(response.data)
            })
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ requestFailed: true });
              });        
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/countyWorstProd')
              .then(response => {
                  console.log(response.data)
                  setImages(response.data)
              })
              .catch((error) => {
                  console.log('error: ' + error);
                  this.setState({ requestFailed: true });
                });        
      }, [])

    return (
        <div>
            <img src={imageOne} style={{"width": "30%"}}></img>
            <img src={imageTwo} style={{"width": "30%"}}></img>
            <img src={imageOne} style={{"width": "30%"}}></img>
            <img src={imageTwo} style={{"width": "30%"}}></img>
      </div>
    )

}

export default Graphs