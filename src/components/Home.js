import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart} from './actions/cartActions';
import { removeToCart} from './actions/cartActions';
import { Link } from 'react-router-dom';
//mport { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
//import Recipe from './Recipe'
//import cart from './Cart'

 class Home extends Component{

    handleRem = (id)=>{
        this.props.removeToCart(id); 
    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    
    
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
            
                        <div className="card-image">
                            
                            <span  className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRem(item.id)}}><i className="material-icons">-</i> </span>
                       
                            <img src={item.img} alt={item.title}/>
                            <br/>
                            <br/>
                            <span className="card-title" >{item.title}</span>
                            <br/>
                            <span  className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                            {/*<span  className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRem(item.id)}}><i className="material-icons">-</i> </span>                     
                            <span  className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRem(item.id)}}><i className="material-icons">-</i> </span> */}                       
                            
                        </div>

                        {/*<div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                           </div>*/}
                         
                </div>
                
                 

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                    
                </div>
                {/*<button className="waves-effect waves-light btn pink remove" onClick={()=>{'/Cart.js'}}>Submit</button>
                <Link to="/cart">submit</Link>*/}
                <Link to="/cart">
                    <button className="waves-effect waves-light btn pink remove" >
                         Submit
                    </button>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))} ,
        removeToCart: (id)=>{dispatch(removeToCart(id))}
        }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)