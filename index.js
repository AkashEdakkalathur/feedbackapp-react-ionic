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
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Title</h1>
              <IonNote>Lorem ipsum dolor sit amet.</IonNote>
            </IonLabel>
           <IonBadge color="success" slot="end">
              5 days
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
              <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> 
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