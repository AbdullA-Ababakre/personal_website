HOC  simply means high order component,which receives a component and return a component.it wraps another component and simply add some extrta html structure or  styling or logic .

### one form of HOC 

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/React/HOC/hoc1.png?raw=true)


![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/React/HOC/hoc2.png?raw=true)


here,withClass is a high order component,it receives another components then adds div wrapper to them . 

### function form

accepts a component as an argument and then return a new component .

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/React/HOC/hoc3.png?raw=true)


How to use it 

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/React/HOC/hoc4.png?raw=true)



### typical usage 


````
import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/index'

const WithErrorHandler = (WrappedComponent, axios) => {

    return class Error extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            // Add a request interceptor
            axios.interceptors.request.use(req=> {
                this.setState({error: null})
                console.log("before request");
                return req;
            });
             
             // add a response interceptor
            axios.interceptors.response.use(res=> res,error=>{
                this.setState({error: error});
            });
        }


        handleError = () => {
            this.setState({ 
                error: null 
            })
        }

        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.handleError}>
                        {this.state.error?this.state.error:null}
                        {/* error occurred */}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }

}

export default WithErrorHandler;
````

This is a handleError component, when there is something wrong when we request from the server, we can show the error message in the Modal .

and this is a typical HOC , recieve a component and handle it ,then return it .


