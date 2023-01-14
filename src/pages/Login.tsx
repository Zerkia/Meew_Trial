import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import supabase from '../supabaseClient';
import './Login.css';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(data)
    console.log(error)
    history.push('/profilepage')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <IonItem lines="full">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" onChange={(e) => setEmail((e.target as HTMLInputElement).value)} required></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" onChange={(e) => setPassword((e.target as HTMLInputElement).value)} required></IonInput>
            </IonItem>
            <IonRow>
              <IonCol>
                <IonButton type="submit" color="danger" expand="block">Login</IonButton>
                <Link to="/forgotpassword">
                  <center><p className='text-sm'>Forgot Password?</p></center>
                </Link>
              </IonCol>
            </IonRow>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
