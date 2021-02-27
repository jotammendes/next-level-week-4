import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://avatars.githubusercontent.com/u/64609444?s=460&u=674335b2cb02cfde0e2889fcdd1d70337b66ce74&v=4" alt="João Paulo"/>
            <div>
                <strong>João Paulo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}