import { Flex } from 'antd';
import styles from './style.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Flex vertical gap="0" align='center'>
                <h1 className={styles.title}>Desafio Técnico</h1>
                <h2 className={styles.subtitle}>Desenvolvedor Front-end Jr</h2>
            </Flex>
        </div>
    );
};