import React, { useState } from 'react'
import { Button } from 'antd';
import styles from './Device.module.css'

const Device: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

    const mesage = () => {
        console.log("pamal sahan")
        setShowForm(true);
    }

    return (

        <div>
            <div className={styles.addButton}>
                <Button type="primary" onClick={mesage}>
                    Add Device
                </Button>
            </div>
            {showForm && <div className={styles.form}>
                <form>
                    <label>
                        Device Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Device Type:
                        <input type="text" name="type" />
                    </label>
                    <label>
                        Device Status:
                        <input type="text" name="status" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>}
        </div>
    )
}

export default Device
