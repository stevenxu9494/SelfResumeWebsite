
import React, { Component } from 'react';
import styles from './detail.module.scss';

class WorkPageDetail extends React.Component{
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
    }

    render() {
        if (this.id == 1) {
            return <div className={ styles.wrap }>
            <div className={ styles.box }>
                <div className={ styles.title }>
                <h1>Sports Store</h1>
                <p>October 2019 to Dec 2019</p>
                </div>
                <section className={ styles.content }>
                    <p>
                        In this project, My goal is to practice my knowledge and design ability in MVC Framework.    
                    </p>
                    <p>
                        My application, called SportsStore, will follow the classic approach taken by online stores everywhere.                         
                    </p>
                    <p>
                        I created an online product catalog that customers can browse by category and page, a shopping cart where users can add and remove products, and a checkout where customers can enter their shipping details.
                    </p>
                    <p>
                        I also created an administration area that includes create, read, update, and delete (CRUD) facilities for managing the catalog; and I protected it so that only logged-in administrators can make changes.
                    </p>
                    <p>
                        For version 2 we developed apps for iOS and Android mobile devices as well as an admin web interface.
                    </p>
                    <p>
                        Now, I am hosting the website on Azure web application.
                    </p>
                    <p>
                        For more information, you can click <a href="http://mvcfivesportsstore.azurewebsites.net/" target = "_blank">here</a> to check it out.
                    </p>
                </section>
            </div>
        </div>
        }
        else {
            return <div>I don't have anything for this id yet</div>
        }
    }
        
}

export default WorkPageDetail;