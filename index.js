import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonItem, IonLabel, IonNote, IonBadge, IonList, IonFab, IonFabButton, IonFooter, IonIcon, IonApp, IonPage, IonRouterOutlet  } from '@ionic/react';

import { add } from 'ionicons/icons';
import './style.css';

const Home = () => {
  return (
    
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FeedBack-App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     
     <ion-list radio-group>
  <ion-list-header>
    Language
  </ion-list-header>

  <ion-item>
    <ion-label>Go</ion-label>
    <ion-radio checked="true" value="go"></ion-radio>
  </ion-item>

  <ion-item>
    <ion-label>Rust</ion-label>
    <ion-radio value="rust"></ion-radio>
  </ion-item>

  <ion-item>
    <ion-label>Python</ion-label>
    <ion-radio value="python" disabled="true"></ion-radio>
  </ion-item>
</ion-list>
        
      </IonContent>
    </>
  );
};


const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

ReactDOM.render(<App />, document.getElementById('root'));