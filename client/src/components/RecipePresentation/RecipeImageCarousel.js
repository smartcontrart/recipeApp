import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './RecipeImageCarousel.css'

class RecipeImageCarousel extends Component {

    renderCarousel(){
        if(this.props.images[0]==null){
            return(
                <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={require("../../Assets/image_placeholder.jpg")}
                    alt="placeholder"
                    />
                </Carousel.Item>
            )
        }else{
            return(
                this.props.images.map((image,key)=>{
                    return(
                        <Carousel.Item key={key}>
                            <img
                            className="d-block w-100"
                            src={require(`${image.path}`)}
                            alt={image.path}
                            />
                        </Carousel.Item>
                    )
                })
            )

        }
    }
    

    render() {

        return(
            <div className="recipeImageCarousel">
                <Carousel className="carousel">
                    {this.renderCarousel()}
                </Carousel>
            </div>
            )
        }

}

export default withRouter(RecipeImageCarousel);