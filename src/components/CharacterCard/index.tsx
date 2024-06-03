import { Card, Col, Row } from 'antd';
import styles from './style.module.css'
import { Character } from 'src/models/Character';

interface CharacterProps {
    character : Character;
}

export default function CharacterCard({character}:CharacterProps) {
    return (
        <Card title={character.name} className={styles.card} styles={{title:{fontSize: 32, fontWeight: 700}}}>
             <Row>
                <Col span={12}><span className={styles.label}>Height:</span> {character.height} m</Col>
                <Col span={12}><span className={styles.label}>Mass:</span> {character.mass} kg</Col>
            </Row>
            <Row>
                <Col span={12}><span className={styles.label}>Skin Color:</span> {character.skin_color}</Col>
                <Col span={12}><span className={styles.label}>Hair Color:</span> {character.hair_color}</Col>
            </Row>
            <Row>
                <Col span={12}><span className={styles.label}>Eye Color:</span> {character.eye_color}</Col>
                <Col span={12}><span className={styles.label}>Birth Year:</span> {character.birth_year}</Col>
            </Row>
        </Card>
    );
};

